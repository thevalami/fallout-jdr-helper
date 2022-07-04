import {DataTableDefinition} from "../generic-data";

export const MOD_HEAVY_WEAPON_DEF: DataTableDefinition[] = [
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
    column: 'Effect3',
    label: 'Effet 3'
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

export const MOD_HEAVY_WEAPON_DATA = [
  {
    "Name": "Canon grande vitesse",
    "Effect1": "+1 D de dégâts",
    "Effect2": "+1 cadence de tir",
    "Effect3": "Réduit la portée d'un niveau",
    "Weight": "+ 2,5 kg",
    "Cost": "+ 45 caps",
    "Skill": "Fana d'armes 3"
  },
  {
    "Name": "Triple canon",
    "Effect1": "+2 D de dégâts",
    "Effect2": "-2 cadence de tir",
    "Effect3": "",
    "Weight": "+ 1,5 kg",
    "Cost": "+ 75 caps",
    "Skill": "Fana d'armes 4"
  },
  {
    "Name": "Viseur d'artilleur",
    "Effect1": "Perd Imprécis",
    "Effect2": "",
    "Effect3": "",
    "Weight": "+ 0,5 kg",
    "Cost": "+ 68 caps",
    "Skill": ""
  },
  {
    "Name": "Broyeur",
    "Effect1": "Arme de corps à corps, inflige un nombre de D de dégâts balistiques égal à la cadence de tir",
    "Effect2": "",
    "Effect3": "",
    "Weight": "+ 2,5 kg",
    "Cost": "+ 5 caps",
    "Skill": "Fana d'armes 2"
  }
]
