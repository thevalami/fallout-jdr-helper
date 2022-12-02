//TODO: Translate me !
import {DataTableDefinition} from "../../generic-data-lang";

export const PROJECTILES_LOOT_DEF_EN: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Name'
}, {
  column: 'Damage',
  label: 'Damage'
}, {
  column: 'Effect',
  label: 'Effect'
}, {
  column: 'DamageType',
  label: 'Damage Type'
}, {
  column: 'Quality',
  label: 'Quality'
}, {
  column: 'Weight',
  label: 'Weight'
}, {
  column: 'Cost',
  label: 'Cost'
}, {
  column: 'Rarity',
  label: 'Rarity'
}]

export const PROJECTILES_LOOT_DATA_EN = [
  {
    "Name": "Throwing Knives",
    "Damage": "3 $CD$",
    "Effect": "Piercing 1",
    "DamageType": "Physical",
    "Quality": "Concealed, Suppressed, Thrown ( C )",
    "Weight": "<1",
    "Cost": 10,
    "Rarity": 1
  },
  {
    "Name": "Tomahawk",
    "Damage": "4 $CD$",
    "Effect": "Piercing 1",
    "DamageType": "Physical",
    "Quality": "Suppressed, Thrown ( C )",
    "Weight": "<1",
    "Cost": 15,
    "Rarity": 2
  },
  {
    "Name": "Javelin",
    "Damage": "4 $CD$",
    "Effect": "Piercing 1",
    "DamageType": "Physical",
    "Quality": "Suppressed, Thrown ( M )",
    "Weight": 4,
    "Cost": 10,
    "Rarity": 1
  }
]
