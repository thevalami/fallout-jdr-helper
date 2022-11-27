import {DataTableDefinition} from "../../generic-data-lang";

export const DOGARMOR_LOOT_DEF_FR: DataTableDefinition[] = [{
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
}]

export const DOGARMOR_LOOT_DATA_FR = [
  {
    "Name": "Casque de chien",
    "PhysicalRes": 2,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Tête",
    "Weight": "0,5",
    "Cost": 7,
    "Rarity": 2
  },
  {
    "Name": "Armure de chien légère",
    "PhysicalRes": 1,
    "EnergyRes": 1,
    "RadiationRes": 0,
    "BodyParts": "Buste, Jambes",
    "Weight": "0,5",
    "Cost": 10,
    "Rarity": 1
  },
  {
    "Name": "Armure de chien moyenne",
    "PhysicalRes": 2,
    "EnergyRes": 2,
    "RadiationRes": 0,
    "BodyParts": "Buste, Jambes",
    "Weight": 1,
    "Cost": 15,
    "Rarity": 2
  },
  {
    "Name": "Armure de chien lourde",
    "PhysicalRes": 3,
    "EnergyRes": 3,
    "RadiationRes": 0,
    "BodyParts": "Buste, Jambes",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 3
  }
]
