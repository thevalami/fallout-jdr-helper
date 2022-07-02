import {DataTableDefinition} from "./generic-data";

export const MOD_MELEE_WEAPON_DEF: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  },
  {
    column: 'Effect1',
    label: 'Effet 1'
  },
  {
    column: 'Effect2',
    label: 'Effet 2'
  },
  {
    column: 'Weight',
    label: 'Poids'
  },
  {
    column: 'Cost',
    label: 'Coût'
  },
  {
    column: 'Skill',
    label: 'Aptitude'
  }
]

export const MOD_MELEE_WEAPON_DATA = [
  {
    "Name": "Perforant",
    "Effect1": "+2 D de dégâts",
    "Effect2": "Gagne Perforant 1",
    "Weight": "+ 0,5 kg",
    "Cost": "+ 45 caps",
    "Skill": "Forgeron 2"
  },
  {
    "Name": "Bobine thermique",
    "Effect1": "+2 D de dégâts",
    "Effect2": "Fait passer le type de dégâts à énergétiques",
    "Weight": "",
    "Cost": "+ 100 caps",
    "Skill": "Forgeron 3"
  }
]
