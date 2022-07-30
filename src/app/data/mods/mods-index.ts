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
  'light-weapons': {
    label: "Mods Armes légères",
    mods: MOD_LIGHT_WEAPON_DATA
  },
  'heavy-weapons': {
    label: "Mods Armes lourdes",
    mods: MOD_HEAVY_WEAPON_DATA
  },
  'energy-weapons': {
    label: "Mods Armes à énergie",
    mods: MOD_ENERGY_WEAPON_DATA
  },
  'melee-weapons': {
    label: "Mods Armes de mêlée",
    mods: MOD_MELEE_WEAPON_DATA
  },
  'robot-armor': {
    label: "Mods Armures de robots",
    mods: MOD_ROBOT_ARMOR_DATA
  },
  'outfits': {
    label: "Mods Tenues et vêtements",
    mods: MOD_OUTFITS
  },
  'raider-armor': {
    label: "Mods Armures de pillard",
    mods: MOD_RAIDER_ARMOR
  },
  'leather-armor': {
    label: "Mods Armures en cuir",
    mods: MOD_LEATHER_ARMOR
  },
  'metal-armor': {
    label: "Mods Armures en métal",
    mods: MOD_METAL_ARMOR
  },
  'combat-armor': {
    label: "Mods Armures de combat",
    mods: MOD_COMBAT_ARMOR
  },
  'synth-armor': {
    label: "Mods Armures de synthétique",
    mods: MOD_SYNTH_ARMOR
  },
  'power-armor': {
    label: "Mods Armeures assistées",
    mods: MOD_POWER_ARMOR_ARMOR
  }
}
