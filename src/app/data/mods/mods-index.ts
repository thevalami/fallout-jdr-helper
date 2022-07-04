import {DataTableDefinition} from "../generic-data";
import {MOD_LIGHT_WEAPON_DATA} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA} from "./mod-heavy-weapon";
import {MOD_ENERGY_WEAPON_DATA} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA} from "./mod-melee-weapon";

export const MOD_DEF: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  },
  {
    column: 'Type',
    label: 'Type'
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
    column: 'Effect4',
    label: 'Effet 4'
  },
  {
    column: 'Effect4',
    label: 'Effet 5'
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
    column: 'Skills',
    label: 'Aptitudes'
  }
]

export const MODS_TABLE_DATA = {
  'light-weapons': MOD_LIGHT_WEAPON_DATA,
  'heavy-weapons': MOD_HEAVY_WEAPON_DATA,
  'energy-weapons': MOD_ENERGY_WEAPON_DATA,
  'melee-weapons': MOD_MELEE_WEAPON_DATA
}
