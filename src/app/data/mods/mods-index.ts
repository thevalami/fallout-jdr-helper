import {DataTableDefinition} from "../generic-data";
import {MOD_LIGHT_WEAPON_DATA} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA} from "./mod-heavy-weapon";
import {MOD_ENERGY_WEAPON_DATA} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA} from "./mod-melee-weapon";
import {MOD_ROBOT_ARMOR_DATA} from "./mod-robot-armor";
import {MOD_OUTFITS} from "./mod-outfit";
import {MOD_RAIDER_ARMOR} from "./mod-raider-armor";
import {MOD_LEATHER_ARMOR} from "./mod-leather-armor";
import {MOD_METAL_ARMOR} from "./mod-metal-armor";
import {MOD_COMBAT_ARMOR} from "./mod-combat-armor";
import {MOD_SYNTH_ARMOR} from "./mod-synth-armor";
import {MOD_POWER_ARMOR_ARMOR} from "./mod-power-armor";

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
    column: 'Localisation',
    label: 'Localisation'
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
  'robot-armor': MOD_ROBOT_ARMOR_DATA,
  'outfits': MOD_OUTFITS,
  'raider-armor': MOD_RAIDER_ARMOR,
  'leather-armor': MOD_LEATHER_ARMOR,
  'metal-armor': MOD_METAL_ARMOR,
  'combat-armor': MOD_COMBAT_ARMOR,
  'synth-armor': MOD_SYNTH_ARMOR,
  'power-armor': MOD_POWER_ARMOR_ARMOR
}
