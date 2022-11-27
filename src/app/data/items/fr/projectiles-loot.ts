import {DataTableDefinition} from "../../generic-data-lang";

export const PROJECTILES_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Damage',
  label: 'Degâts'
}, {
  column: 'Effect',
  label: 'Effet'
}, {
  column: 'DamageType',
  label: 'Type Degâts'
}, {
  column: 'Quality',
  label: 'Qualités'
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

export const PROJECTILES_LOOT_DATA_FR = [
  {
    "Name": "Couteaux de lancer",
    "Damage": "3 $CD$",
    "Effect": "Perforant 1",
    "DamageType": "Balistiques",
    "Quality": "Dissimulé, Lancer ( C ), Silencieux",
    "Weight": "<0,5",
    "Cost": 10,
    "Rarity": 1
  },
  {
    "Name": "Tomahawk",
    "Damage": "4 $CD$",
    "Effect": "Perforant 1",
    "DamageType": "Balistiques",
    "Quality": "Lancer ( C ), Silencieux",
    "Weight": "<0,5",
    "Cost": 15,
    "Rarity": 2
  },
  {
    "Name": "Javelot",
    "Damage": "4 $CD$",
    "Effect": "Perforant 1",
    "DamageType": "Balistiques",
    "Quality": "Lancer ( M ), Silencieux",
    "Weight": 2,
    "Cost": 10,
    "Rarity": 1
  }
]
