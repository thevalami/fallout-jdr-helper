import {DataTableDefinition} from "../generic-data";
import {MOD_LIGHT_WEAPON_DATA} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA} from "./mod-heavy-weapon";
import {MOD_ENERGY_WEAPON_DATA} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA} from "./mod-melee-weapon";
import {MOD_ROBOT_ARMOR_DATA} from "./mod-robot-armor";

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
    column: 'PhysicalRes',
    label: 'Résistance ballistique'
  },
  {
    column: 'EnergyRes',
    label: 'Résistance energétique'
  },
  {
    column: 'BodyParts',
    label: 'Parties couvertes'
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
    column: 'MaxCarry',
    label: 'Charge maximale'
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
  },
  {
    column: 'Special',
    label: 'Spécial'
  },
]

export const MODS_TABLE_DATA = {
  'light-weapons': MOD_LIGHT_WEAPON_DATA,
  'heavy-weapons': MOD_HEAVY_WEAPON_DATA,
  'energy-weapons': MOD_ENERGY_WEAPON_DATA,
  'melee-weapons': MOD_MELEE_WEAPON_DATA,
  'robot-armor': MOD_ROBOT_ARMOR_DATA
}
