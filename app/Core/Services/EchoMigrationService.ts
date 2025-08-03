import type Echo from '~/Core/Interfaces/Echo'
import { TemplateEchoes } from '~/Core/Echoes'
import { Sonatas } from '~/Core/Sonatas'

export class EchoMigrationService {
  private readonly STORAGE_KEY = 'Echoes'
  private readonly BACKUP_KEY = 'EchoesBackup'
  private readonly VERSION_KEY = 'EchoesVersion'

  private readonly PRESERVABLE_FIELDS = [
    'EquipedBy',
    'EquipedSlot',
    'Level',
    'MainStatistic',
    'SecondaryStatistic',
    'Statistics',
    'ExtraStatistics',
  ] as const

  NeedsMigration(): boolean {
    const storedVersion = this.GetStoredVersion()
    const currentVersion = this.GetCurrentVersion()
    return storedVersion !== currentVersion
  }

  async MigrateEchoes(): Promise<Echo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.CreateBackup()

          const currentEchoes = this.GetStoredEchoes()
          const migratedEchoes = this.PerformMigration(currentEchoes)

          if (!this.ValidateMigration(migratedEchoes)) {
            throw new Error('Echo migration validation failed')
          }

          this.SaveEchoes(migratedEchoes)
          this.UpdateVersion()

          console.warn('✅ Echo migration successful')
          resolve(migratedEchoes)
        }
        catch (error) {
          console.error('❌ Error during echo migration:', error)
          this.RestoreBackup()
          reject(error)
        }
      }, 0)
    })
  }

  private PerformMigration(currentEchoes: Echo[]): Echo[] {
    return currentEchoes.map((echo) => {
      const template = TemplateEchoes.find(e => e.Id === echo.Id)

      if (!template) {
        console.warn(`Template not found for echo ${echo.Id}`)
        return echo
      }

      const preservedData = this.ExtractPreservedData(echo)

      const syncedSonatas = this.SyncSonatas(echo.Sonata)
      const migratedEcho: Echo = {
        ...template,
        ...preservedData,
        Sonata: syncedSonatas,
      }

      return migratedEcho
    })
  }

  private SyncSonatas(echoSonatas: any[]): any[] {
    return echoSonatas.map((echoSonata) => {
      const templateSonata = Sonatas.find(s => s.Name === echoSonata.Name)

      if (!templateSonata) {
        console.warn(`Template sonata not found for ${echoSonata.Name}`)
        return echoSonata
      }

      const isSelected = echoSonata.IsSelected === true
      return {
        ...templateSonata,
        IsSelected: isSelected,
      }
    })
  }

  private ExtractPreservedData(echo: Echo): Partial<Echo> {
    const preserved: Partial<Echo> = {}

    this.PRESERVABLE_FIELDS.forEach((field) => {
      if (echo[field] !== undefined) {
        (preserved as any)[field] = echo[field]
      }
    })

    return preserved
  }

  private ValidateMigration(echoes: Echo[]): boolean {
    const hasValidIds = echoes.every(echo => echo.Id > 0)

    const hasRequiredFields = echoes.every(echo =>
      echo.Icon
      && echo.Rarity
      && echo.Cost
      && Array.isArray(echo.Sonata),
    )

    return hasValidIds && hasRequiredFields
  }

  private CreateBackup(): void {
    const echoes = this.GetStoredEchoes()
    if (echoes.length > 0) {
      localStorage.setItem(this.BACKUP_KEY, JSON.stringify(echoes))
    }
  }

  private RestoreBackup(): void {
    const backup = localStorage.getItem(this.BACKUP_KEY)
    if (backup) {
      try {
        const echoes = JSON.parse(backup)
        this.SaveEchoes(echoes)
        console.warn('🔄 Echo backup restored')
      }
      catch (error) {
        console.error('❌ Error during echo restoration:', error)
      }
    }
  }

  private GetStoredEchoes(): Echo[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    catch (error) {
      console.error('❌ Error reading echoes:', error)
      return []
    }
  }

  private SaveEchoes(echoes: Echo[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(echoes))
  }

  private GetStoredVersion(): string {
    return localStorage.getItem(this.VERSION_KEY) || '0.0.0'
  }

  private UpdateVersion(): void {
    localStorage.setItem(this.VERSION_KEY, this.GetCurrentVersion())
  }

  private GetCurrentVersion(): string {
    const templateHash = this.HashTemplates()
    return `1.0.0-${templateHash.substring(0, 8)}`
  }

  private HashTemplates(): string {
    const templateString = JSON.stringify(TemplateEchoes.map(echo => ({
      id: echo.Id,
      icon: echo.Icon,
      rarity: echo.Rarity,
      cost: echo.Cost,
      sonata: echo.Sonata.map(s => s.Name),
      isNightmare: echo.IsNightmare,
    })))

    let hash = 0
    for (let i = 0; i < templateString.length; i++) {
      const char = templateString.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash).toString(16)
  }

  CleanUp(): void {
    const backup = localStorage.getItem(this.BACKUP_KEY)
    if (backup) {
      localStorage.removeItem(this.BACKUP_KEY)
    }
  }
}
