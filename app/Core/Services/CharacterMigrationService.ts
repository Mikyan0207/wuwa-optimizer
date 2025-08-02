import type Character from '~/Core/Interfaces/Character'
import { TemplateCharacters } from '~/Core/Characters'

export class CharacterMigrationService {
  private readonly STORAGE_KEY = 'Characters'
  private readonly BACKUP_KEY = 'CharactersBackup'
  private readonly VERSION_KEY = 'CharactersVersion'

  private readonly PRESERVABLE_FIELDS = [
    'EquipedEchoes',
    'EquipedWeapon',
  ] as const

  NeedsMigration(): boolean {
    const storedVersion = this.GetStoredVersion()
    const currentVersion = this.GetCurrentVersion()
    return storedVersion !== currentVersion
  }

  async MigrateCharacters(): Promise<Character[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.CreateBackup()

          const currentCharacters = this.GetStoredCharacters()
          const migratedCharacters = this.PerformMigration(currentCharacters)

          if (!this.ValidateMigration(migratedCharacters)) {
            throw new Error('Migration validation failed')
          }

          this.SaveCharacters(migratedCharacters)
          this.UpdateVersion()

          console.warn('✅ Character migration successful')
          resolve(migratedCharacters)
        }
        catch (error) {
          console.error('❌ Error during migration:', error)
          this.RestoreBackup()
          reject(error)
        }
      }, 0)
    })
  }

  private PerformMigration(currentCharacters: Character[]): Character[] {
    return currentCharacters.map((character) => {
      const template = TemplateCharacters.find(t => t.Id === character.Id)

      if (!template) {
        console.warn(`Template not found for character ${character.Id}`)
        return character
      }

      // Preserve user data
      const preservedData = this.ExtractPreservedData(character)

      // Merge template + preserved data
      const migratedCharacter: Character = {
        ...template,
        ...preservedData,
      }

      return migratedCharacter
    })
  }

  private ExtractPreservedData(character: Character): Partial<Character> {
    const preserved: Partial<Character> = {}

    this.PRESERVABLE_FIELDS.forEach((field) => {
      if (character[field] !== undefined) {
        (preserved as any)[field] = character[field]
      }
    })

    return preserved
  }

  private ValidateMigration(characters: Character[]): boolean {
    // Check that all characters have a valid ID
    const hasValidIds = characters.every(char => char.Id > 0)

    // Check that equipped echoes are preserved
    const hasPreservedEchoes = characters.every(char =>
      Array.isArray(char.EquipedEchoes),
    )

    return hasValidIds && hasPreservedEchoes
  }

  private CreateBackup(): void {
    const characters = this.GetStoredCharacters()
    if (characters.length > 0) {
      localStorage.setItem(this.BACKUP_KEY, JSON.stringify(characters))
    }
  }

  private RestoreBackup(): void {
    const backup = localStorage.getItem(this.BACKUP_KEY)
    if (backup) {
      try {
        const characters = JSON.parse(backup)
        this.SaveCharacters(characters)
        console.warn('🔄 Backup restored')
      }
      catch (error) {
        console.error('❌ Error during restoration:', error)
      }
    }
  }

  private GetStoredCharacters(): Character[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    catch (error) {
      console.error('❌ Error reading characters:', error)
      return []
    }
  }

  private SaveCharacters(characters: Character[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(characters))
  }

  private GetStoredVersion(): string {
    return localStorage.getItem(this.VERSION_KEY) || '0.0.0'
  }

  private UpdateVersion(): void {
    localStorage.setItem(this.VERSION_KEY, this.GetCurrentVersion())
  }

  private GetCurrentVersion(): string {
    // Create a simple hash of templates to detect changes
    const templateHash = this.HashTemplates()
    return `1.0.0-${templateHash.substring(0, 8)}`
  }

  private HashTemplates(): string {
    const templateString = JSON.stringify(TemplateCharacters.map(char => ({
      id: char.Id,
      icon: char.Icon,
      splashArt: char.SplashArt,
      rarity: char.Rarity,
      releaseState: char.ReleaseState,
      type: char.Type,
      weaponType: char.WeaponType,
      level: char.Level,
      stats: char.Stats,
      sequences: char.Sequences,
      skills: char.Skills,
      statsWeights: char.StatsWeights,
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
