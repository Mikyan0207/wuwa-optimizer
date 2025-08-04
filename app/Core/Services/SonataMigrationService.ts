import type Sonata from '~/Core/Interfaces/Sonata'
import { Sonatas } from '~/Core/Sonatas'

export class SonataMigrationService {
  private readonly STORAGE_KEY = 'Sonatas'
  private readonly BACKUP_KEY = 'SonatasBackup'
  private readonly VERSION_KEY = 'SonatasVersion'

  NeedsMigration(): boolean {
    const storedVersion = this.GetStoredVersion()
    const currentVersion = this.GetCurrentVersion()
    return storedVersion !== currentVersion
  }

  async MigrateSonatas(): Promise<Sonata[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.CreateBackup()

          const currentSonatas = this.GetStoredSonatas()
          const migratedSonatas = this.PerformMigration(currentSonatas)

          if (!this.ValidateMigration(migratedSonatas)) {
            throw new Error('Sonata migration validation failed')
          }

          this.SaveSonatas(migratedSonatas)
          this.UpdateVersion()

          console.warn('✅ Sonata migration successful')
          resolve(migratedSonatas)
        }
        catch (error) {
          console.error('❌ Error during sonata migration:', error)
          this.RestoreBackup()
          reject(error)
        }
      }, 0)
    })
  }

  private PerformMigration(currentSonatas: Sonata[]): Sonata[] {
    if (currentSonatas.length === 0) {
      return [...Sonatas]
    }

    return currentSonatas.map((sonata) => {
      const template = Sonatas.find(s => s.Name === sonata.Name)

      if (!template) {
        console.warn(`Template not found for sonata ${sonata.Name}`)
        return sonata
      }

      return template
    })
  }

  private ValidateMigration(sonatas: Sonata[]): boolean {
    const hasValidNames = sonatas.every(sonata => sonata.Name && sonata.Name.length > 0)

    const hasRequiredFields = sonatas.every(sonata =>
      sonata.Icon && sonata.Effect1,
    )

    return hasValidNames && hasRequiredFields
  }

  private CreateBackup(): void {
    const sonatas = this.GetStoredSonatas()
    if (sonatas.length > 0) {
      localStorage.setItem(this.BACKUP_KEY, JSON.stringify(sonatas))
    }
  }

  private RestoreBackup(): void {
    const backup = localStorage.getItem(this.BACKUP_KEY)
    if (backup) {
      try {
        const sonatas = JSON.parse(backup)
        this.SaveSonatas(sonatas)
        console.warn('🔄 Sonata backup restored')
      }
      catch (error) {
        console.error('❌ Error during sonata restoration:', error)
      }
    }
  }

  private GetStoredSonatas(): Sonata[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    catch (error) {
      console.error('❌ Error reading sonatas:', error)
      return []
    }
  }

  private SaveSonatas(sonatas: Sonata[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sonatas))
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
    const templateString = JSON.stringify(Sonatas.map(sonata => ({
      name: sonata.Name,
      icon: sonata.Icon,
      effect1: sonata.Effect1,
      effect2: sonata.Effect2,
      effect1RequiredEchoes: sonata.Effect1RequiredEchoes,
      effect2RequiredEchoes: sonata.Effect2RequiredEchoes,
      extraStats: sonata.ExtraStats,
    })))

    let hash = 0
    for (let i = 0; i < templateString.length; i++) {
      const char = templateString.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
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
