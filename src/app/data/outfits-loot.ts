import {DataTableDefinition} from "./generic-data";

export const OUTFITS_LOOT_DEF: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'PhysicalRes',
  label: 'Résistance ballistique'
}, {
  column: 'EnergyRes',
  label: 'Résistance energétique'
}, {
  column: 'RadiationRes',
  label: 'Résistance radiation'
}, {
  column: 'BodyParts',
  label: 'Parties couvertes'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}, {
  column: 'Special',
  label: 'Spécial'
}]

export const OUTFITS_LOOT_DATA = [
  {
    "Name": "Harnais",
    "PhysicalRes": 0,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": "0,5",
    "Cost": 5,
    "Rarity": "0",
    "Special": ""
  },
  {
    "Name": "Uniforme de la Confrérie de l'Acier",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 1,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 2,
    "Special": ""
  },
  {
    "Name": "Vêtements décontractés",
    "PhysicalRes": 0,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 1,
    "Special": "Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur la FOR ou l'AGI. Peut être renforcée avec du Tissu Balistique"
  },
  {
    "Name": "Vêtements de cuir",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": "0,5",
    "Cost": 5,
    "Rarity": 1,
    "Special": ""
  },
  {
    "Name": "Vêtements résistants",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": "1,5",
    "Cost": 20,
    "Rarity": 1,
    "Special": ""
  },
  {
    "Name": "Treillis militaire",
    "PhysicalRes": 0,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": "1,5",
    "Cost": 12,
    "Rarity": 1,
    "Special": "Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur la FOR ou l'AGI. Peut être renforcée avec du Tissu Balistique"
  },
  {
    "Name": "Combinaison d'abri",
    "PhysicalRes": 0,
    "EnergyRes": 1,
    "RadiationRes": 2,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": "0,5",
    "Cost": 20,
    "Rarity": 2,
    "Special": "Peut être renforcée avec un revêtement de protection supplémentaire, recevant un des mods de la table spécifique des mods de combinaison d'abri."
  },
  {
    "Name": "Tenue de nomade",
    "PhysicalRes": 1,
    "EnergyRes": 2,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 5,
    "Cost": 35,
    "Rarity": 1,
    "Special": ""
  },
  {
    "Name": "Peaux",
    "PhysicalRes": 1,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 2,
    "Cost": 13,
    "Rarity": "0",
    "Special": ""
  },
  {
    "Name": "Armure cage",
    "PhysicalRes": 3,
    "EnergyRes": 4,
    "RadiationRes": 0,
    "BodyParts": "Tête, Bras, Jambes, Buste",
    "Weight": "16,5",
    "Cost": 110,
    "Rarity": 3,
    "Special": ""
  },
  {
    "Name": "Armure d'ingénieur",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 15,
    "Rarity": 1,
    "Special": ""
  },
  {
    "Name": "Manteau lourd",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 1,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 1,
    "Special": "Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur l'END. Peut être renforcée avec du Tissu Balistique"
  },
  {
    "Name": "Blouse",
    "PhysicalRes": 0,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 10,
    "Rarity": 1,
    "Special": "Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur l'INT. Peut être renforcée avec du Tissu Balistique"
  },
  {
    "Name": "Bleu de travail",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 12,
    "Rarity": 1,
    "Special": "Donne +5 à la charge maximale du porteur"
  },
  {
    "Name": "Vêtements élégants",
    "PhysicalRes": 0,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 1,
    "Cost": 30,
    "Rarity": 2,
    "Special": "Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur le CHR. Peut être renforcée avec du Tissu Balistique"
  },
  {
    "Name": "Armure de scribe de la Confrérie de l'Acier",
    "PhysicalRes": 1,
    "EnergyRes": 2,
    "RadiationRes": 2,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 2,
    "Cost": 20,
    "Rarity": 2,
    "Special": ""
  },
  {
    "Name": "Treillis de la Confrérie de l'Acier",
    "PhysicalRes": 2,
    "EnergyRes": 2,
    "RadiationRes": 2,
    "BodyParts": "Bras, Jambes, Buste",
    "Weight": 2,
    "Cost": 20,
    "Rarity": 3,
    "Special": ""
  },
  {
    "Name": "Combinaison étanche",
    "PhysicalRes": 0,
    "EnergyRes": 0,
    "RadiationRes": "Immunité",
    "BodyParts": "Tête, Bras, Jambes, Buste",
    "Weight": "2,5",
    "Cost": 85,
    "Rarity": 3,
    "Special": ""
  },
  {
    "Name": "Armure à pointes",
    "PhysicalRes": 2,
    "EnergyRes": 2,
    "RadiationRes": 0,
    "BodyParts": "Tête, Bras, Jambes, Buste",
    "Weight": "8,5",
    "Cost": 65,
    "Rarity": 2,
    "Special": ""
  }
]
