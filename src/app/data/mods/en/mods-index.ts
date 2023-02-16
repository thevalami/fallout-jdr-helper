import {MOD_LIGHT_WEAPON_DATA_EN} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA_EN} from "./mod-heavy-weapon";
import {MOD_ENERGY_WEAPON_DATA_EN} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA_EN} from "./mod-melee-weapon";
import {MOD_ROBOT_ARMOR_DATA_EN} from "./mod-robot-armor";
import {MOD_OUTFITS_EN} from "./mod-outfit";
import {MOD_RAIDER_ARMOR_EN} from "./mod-raider-armor";
import {MOD_LEATHER_ARMOR_EN} from "./mod-leather-armor";
import {MOD_METAL_ARMOR_EN} from "./mod-metal-armor";
import {MOD_COMBAT_ARMOR_EN} from "./mod-combat-armor";
import {MOD_SYNTH_ARMOR_EN} from "./mod-synth-armor";
import {DataTableDefinition} from "../../generic-data-lang";
import {MOD_POWER_ARMOR_EN} from "./mod-power-armor";

export const MOD_DEF_EN: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Name'
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
    label: 'Phys. Resistance'
  },
  {
    column: 'EnergyRes',
    label: 'Energy Resistance'
  },
  {
    column: 'BodyParts',
    label: 'Body parts'
  },
  {
    column: 'Effect1',
    label: 'Effect 1'
  },
  {
    column: 'Effect2',
    label: 'Effect 2'
  },
  {
    column: 'Effect3',
    label: 'Effect 3'
  },
  {
    column: 'Effect4',
    label: 'Effect 4'
  },
  {
    column: 'Effect5',
    label: 'Effect 5'
  },
  {
    column: 'MaxCarry',
    label: 'Max Carry'
  },
  {
    column: 'Weight',
    label: 'Weight'
  },
  {
    column: 'Cost',
    label: 'Cost'
  },
  {
    column: 'Skills',
    label: 'Skills'
  },
  {
    column: 'Special',
    label: 'Special'
  },
]

export const MODS_TABLE_DATA_EN = {
  'light-weapons': {
    label: "Light weapon mods",
    mods: MOD_LIGHT_WEAPON_DATA_EN
  },
  'heavy-weapons': {
    label: "Heavy weapon mods",
    mods: MOD_HEAVY_WEAPON_DATA_EN
  },
  'energy-weapons': {
    label: "Energy weapon mods",
    mods: MOD_ENERGY_WEAPON_DATA_EN
  },
  'melee-weapons': {
    label: "Melee weapon mods",
    mods: MOD_MELEE_WEAPON_DATA_EN
  },
  'robot-armor': {
    label: "Robot armor mods",
    mods: MOD_ROBOT_ARMOR_DATA_EN
  },
  'outfits': {
    label: "Clothe and outfit mods",
    mods: MOD_OUTFITS_EN
  },
  'raider-armor': {
    label: "Raider armor mods",
    mods: MOD_RAIDER_ARMOR_EN
  },
  'leather-armor': {
    label: "Leather armor mods",
    mods: MOD_LEATHER_ARMOR_EN
  },
  'metal-armor': {
    label: "Metal armor mods",
    mods: MOD_METAL_ARMOR_EN
  },
  'combat-armor': {
    label: "Combat armor mods",
    mods: MOD_COMBAT_ARMOR_EN
  },
  'synth-armor': {
    label: "Synth armor mods",
    mods: MOD_SYNTH_ARMOR_EN
  },
  'power-armor': {
    label: "Power armor mods",
    mods: MOD_POWER_ARMOR_EN
  }
}
