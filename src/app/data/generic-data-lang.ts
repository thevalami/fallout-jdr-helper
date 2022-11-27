import {REGISTERED_DATA_SECTIONS_FR} from "./items/fr/generic-data";
import {REGISTERED_DATA_SECTIONS_EN} from "./items/en/generic-data";
import {AMMUNITION_LOOT_DATA_FR} from "./items/fr/munition-loot";
import {AMMUNITION_LOOT_DATA_EN} from "./items/en/munition-loot";
import {SYRINGE_TYPE_DATA_FR} from "./items/fr/syringe-type";
import {SYRINGE_TYPE_DATA_EN} from "./items/en/syringe-type";
import {DRINK_LOOT_DATA_FR} from "./items/fr/drink-loot";
import {DRINK_LOOT_DATA_EN} from "./items/en/drink-loot";
import {TOOLS_LOOT_DATA_FR} from "./items/fr/tools-loot";
import {TOOLS_LOOT_DATA_EN} from "./items/en/tools-loot";
import {FOOD_LOOT_DATA_FR} from "./items/fr/food-loot";
import {FOOD_LOOT_DATA_EN} from "./items/en/food-loot";
import {CHEMS_LOOT_DATA_FR} from "./items/fr/chems-loot";
import {CHEMS_LOOT_DATA_EN} from "./items/en/chems-loot";
import {LIGHTWEAPONS_LOOT_DATA_FR} from "./items/fr/lightweapons-loot";
import {LIGHTWEAPONS_LOOT_DATA_EN} from "./items/en/lightweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA_FR} from "./items/fr/energyweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA_EN} from "./items/en/energyweapons-loot";
import {MELEEWEAPONS_LOOT_DATA_FR} from "./items/fr/meleeweapons-loot";
import {MELEEWEAPONS_LOOT_DATA_EN} from "./items/en/meleeweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA_FR} from "./items/fr/heavyweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA_EN} from "./items/en/heavyweapons-loot";
import {EXPLOSIVES_LOOT_DATA_FR} from "./items/fr/explosives-loot";
import {EXPLOSIVES_LOOT_DATA_EN} from "./items/en/explosives-loot";
import {PROJECTILES_LOOT_DATA_FR} from "./items/fr/projectiles-loot";
import {PROJECTILES_LOOT_DATA_EN} from "./items/en/projectiles-loot";
import {OUTFITS_LOOT_DATA_FR} from "./items/fr/outfits-loot";
import {OUTFITS_LOOT_DATA_EN} from "./items/en/outfits-loot";
import {HATS_LOOT_DATA_FR} from "./items/fr/hats-loot";
import {HATS_LOOT_DATA_EN} from "./items/en/hats-loot";
import {LEATHERARMOR_LOOT_DATA_FR} from "./items/fr/leatherarmor-loot";
import {LEATHERARMOR_LOOT_DATA_EN} from "./items/en/leatherarmor-loot";
import {SYNTHARMOR_LOOT_DATA_FR} from "./items/fr/syntharmor-loot";
import {SYNTHARMOR_LOOT_DATA_EN} from "./items/en/syntharmor-loot";
import {RAIDERARMOR_LOOT_DATA_FR} from "./items/fr/looterarmor-loot";
import {RAIDERARMOR_LOOT_DATA_EN} from "./items/en/looterarmor-loot";
import {METALARMOR_LOOT_DATA_FR} from "./items/fr/metal-armor-loot";
import {METALARMOR_LOOT_DATA_EN} from "./items/en/metal-armor-loot";
import {COMBATARMOR_LOOT_DATA_FR} from "./items/fr/combat-armor-loot";
import {COMBATARMOR_LOOT_DATA_EN} from "./items/en/combat-armor-loot";
import {DOGARMOR_LOOT_DATA_FR} from "./items/fr/dogarmor-loot";
import {DOGARMOR_LOOT_DATA_EN} from "./items/en/dogarmor-loot";
import {ROBOTARMOR_LOOT_DATA_FR} from "./items/fr/robot-armor-loot";
import {ROBOTARMOR_LOOT_DATA_EN} from "./items/en/robot-armor-loot";

export interface DataTableDefinition {
  column: string,
  label: string,
}

export interface DataId {
  type: string,
  label: string,
  definition: DataTableDefinition[],
  data: any[],
  img?: string,
  icon?: string,
  generic: boolean
  moddable: boolean
}

export interface Section {
  label: string,
  data: DataId[];
}

export const REGISTERED_DATA_SECTIONS = {
  "fr": REGISTERED_DATA_SECTIONS_FR,
  "en": REGISTERED_DATA_SECTIONS_EN
}

export const AMMUNITION_LOOT_DATA = {
  'fr': AMMUNITION_LOOT_DATA_FR,
  'en': AMMUNITION_LOOT_DATA_EN
}

export const SYRINGE_TYPE_DATA = {
  'fr': SYRINGE_TYPE_DATA_FR,
  'en': SYRINGE_TYPE_DATA_EN
}

export const DRINK_LOOT_DATA = {
  'fr': DRINK_LOOT_DATA_FR,
  'en': DRINK_LOOT_DATA_EN
}

export const TOOLS_LOOT_DATA = {
  'fr': TOOLS_LOOT_DATA_FR,
  'en': TOOLS_LOOT_DATA_EN
}

export const FOOD_LOOT_DATA = {
  'fr': FOOD_LOOT_DATA_FR,
  'en': FOOD_LOOT_DATA_EN
}

export const CHEMS_LOOT_DATA = {
  'fr': CHEMS_LOOT_DATA_FR,
  'en': CHEMS_LOOT_DATA_EN
}

export const LIGHTWEAPONS_LOOT_DATA = {
  'fr': LIGHTWEAPONS_LOOT_DATA_FR,
  'en': LIGHTWEAPONS_LOOT_DATA_EN
}

export const ENERGYWEAPONS_LOOT_DATA = {
  'fr': ENERGYWEAPONS_LOOT_DATA_FR,
  'en': ENERGYWEAPONS_LOOT_DATA_EN
}

export const MELEEWEAPONS_LOOT_DATA = {
  'fr': MELEEWEAPONS_LOOT_DATA_FR,
  'en': MELEEWEAPONS_LOOT_DATA_EN
}

export const HEAVYWEAPONS_LOOT_DATA = {
  'fr': HEAVYWEAPONS_LOOT_DATA_FR,
  'en': HEAVYWEAPONS_LOOT_DATA_EN
}

export const EXPLOSIVES_LOOT_DATA = {
  'fr': EXPLOSIVES_LOOT_DATA_FR,
  'en': EXPLOSIVES_LOOT_DATA_EN
}

export const PROJECTILES_LOOT_DATA = {
  'fr': PROJECTILES_LOOT_DATA_FR,
  'en': PROJECTILES_LOOT_DATA_EN
}

export const OUTFITS_LOOT_DATA = {
  'fr': OUTFITS_LOOT_DATA_FR,
  'en': OUTFITS_LOOT_DATA_EN
}

export const HATS_LOOT_DATA = {
  'fr': HATS_LOOT_DATA_FR,
  'en': HATS_LOOT_DATA_EN
}

export const LEATHERARMOR_LOOT_DATA = {
  'fr': LEATHERARMOR_LOOT_DATA_FR,
  'en': LEATHERARMOR_LOOT_DATA_EN
}

export const SYNTHARMOR_LOOT_DATA = {
  'fr': SYNTHARMOR_LOOT_DATA_FR,
  'en': SYNTHARMOR_LOOT_DATA_EN
}

export const RAIDERARMOR_LOOT_DATA = {
  'fr': RAIDERARMOR_LOOT_DATA_FR,
  'en': RAIDERARMOR_LOOT_DATA_EN
}

export const METALARMOR_LOOT_DATA = {
  'fr': METALARMOR_LOOT_DATA_FR,
  'en': METALARMOR_LOOT_DATA_EN
}

export const COMBATARMOR_LOOT_DATA = {
  'fr': COMBATARMOR_LOOT_DATA_FR,
  'en': COMBATARMOR_LOOT_DATA_EN
}

export const DOGARMOR_LOOT_DATA = {
  'fr': DOGARMOR_LOOT_DATA_FR,
  'en': DOGARMOR_LOOT_DATA_EN
}

export const ROBOTARMOR_LOOT_DATA = {
  'fr': ROBOTARMOR_LOOT_DATA_FR,
  'en': ROBOTARMOR_LOOT_DATA_EN
}



