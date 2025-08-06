import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

export interface SkillBranch {
  mainSkill: Skill | undefined
  skills: (Skill | undefined)[]
  spacingBefore?: string
  spacingAfter?: string
}

interface SkillTree {
  branches: SkillBranch[]
}

export function UseSkillTree(character: Character) {
  function FindSkill(skillId: string): Skill | undefined {
    return character.Skills?.find(skill =>
      skill.Id === skillId
      || skill.Id.replace(' ', '_') === skillId,
    )
  }

  function GetSkillTree(): SkillTree {
    const branches: SkillBranch[] = [
      {
        mainSkill: FindSkill('Basic_Attack'),
        skills: [
          FindSkill('Basic_Attack_Bonus_Stat_01'),
          FindSkill('Basic_Attack_Bonus_Stat_02'),
        ],
        spacingAfter: 'mt-[6em]',
      },
      {
        mainSkill: FindSkill('Resonance_Skill'),
        skills: [
          FindSkill('Resonance_Skill_Bonus_Stat_01'),
          FindSkill('Resonance_Skill_Bonus_Stat_02'),
        ],
        spacingBefore: 'mb-[2em]',
        spacingAfter: 'mt-[4em]',
      },
      {
        mainSkill: FindSkill('Forte_Circuit'),
        skills: [
          FindSkill('Outro_Skill'),
          FindSkill('Inherent_Skill_01'),
          FindSkill('Inherent_Skill_02'),
        ],
        spacingBefore: 'mt-[3em]',
        spacingAfter: 'mt-[3em]',
      },
      {
        mainSkill: FindSkill('Resonance_Liberation'),
        skills: [
          FindSkill('Resonance_Liberation_Bonus_Stat_01'),
          FindSkill('Resonance_Liberation_Bonus_Stat_02'),
        ],
        spacingBefore: 'mb-[2em]',
        spacingAfter: 'mt-[4em]',
      },
      {
        mainSkill: FindSkill('Intro_Skill'),
        skills: [
          FindSkill('Intro_Skill_Bonus_Stat_01'),
          FindSkill('Intro_Skill_Bonus_Stat_02'),
        ],
        spacingAfter: 'mt-[6em]',
      },
    ]

    return { branches }
  }

  function GetAllSkillsFromBranch(branch: SkillBranch): Skill[] {
    const allSkills: Skill[] = []

    if (branch.mainSkill)
      allSkills.push(branch.mainSkill)

    allSkills.push(...branch.skills.filter((skill): skill is Skill => skill !== undefined))

    return allSkills
  }

  function ActivateSkill(skill: Skill, branch: SkillBranch) {
    const allSkills = GetAllSkillsFromBranch(branch)
    const skillIndex = allSkills.findIndex(s => s.Id === skill.Id)

    if (skillIndex === -1)
      return

    for (let i = 0; i <= skillIndex; i++) {
      allSkills[i]!.Unlocked = true
    }
  }

  function DeactivateSkill(skill: Skill, branch: SkillBranch) {
    const allSkills = GetAllSkillsFromBranch(branch)
    const skillIndex = allSkills.findIndex(s => s.Id === skill.Id)

    if (skillIndex === -1)
      return

    for (let i = skillIndex; i < allSkills.length; i++) {
      allSkills[i]!.Unlocked = false
    }
  }

  function ToggleSkill(skill: Skill, branch: SkillBranch) {
    if (skill.Unlocked) {
      DeactivateSkill(skill, branch)
    }
    else {
      ActivateSkill(skill, branch)
    }
  }

  return {
    GetSkillTree,
    FindSkill,
    GetAllSkillsFromBranch,
    ActivateSkill,
    DeactivateSkill,
    ToggleSkill,
  }
}
