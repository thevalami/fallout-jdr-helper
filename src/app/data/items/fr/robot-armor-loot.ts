import {DataTableDefinition} from "../../generic-data-lang";

export const ROBOTARMOR_LOOT_DEF_FR: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  }, {
    column: 'PhysicalRes',
    label: 'Résistance ballistique'
  }, {
    column: 'EnergyRes',
    label: 'Résistance energétique'
  }, {
    column: 'BodyParts',
    label: 'Parties couvertes'
  }, {
    column: 'MaxCarry',
    label: 'Charge maximale'
  }
]

export const ROBOTARMOR_LOOT_DATA_FR = [
  {
    "Name": "Blindage standard",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "BodyParts": "Toutes",
    "MaxCarry": "",
    "id": "r-1"
  },
  {
    "Name": "Blindage Mister Gutsy",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "BodyParts": "Toutes",
    "MaxCarry": "- 10 kg",
    "id": "r-2"
  }
];
