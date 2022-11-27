import {DataTableDefinition} from "../../generic-data-lang";

export const VAULTSEC_LOOT_DEF_FR: DataTableDefinition[] = [{
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

export const VAULTSECARMOR_LOOT_DATA_FR = [
  {
    "Name": "Casque de sécurité Vault-Tec",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Tête",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 1
  },
  {
    "Name": "Armure de sécurité Vault-Tec",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "RadiationRes": 2,
    "BodyParts": "Buste, Jambes, Bras",
    "Weight": 4,
    "Cost": 16,
    "Rarity": 1
  }
]
