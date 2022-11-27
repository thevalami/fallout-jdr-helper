import {LOOT_PLACES_FR} from "./fr/loot-places";
import {LOOT_PLACES_EN} from "./en/loot-places";
import {LOOT_TABLE_INDEX_FR} from "./fr/loot-table-index";
import {LOOT_TABLE_INDEX_EN} from "./en/loot-table-index";
import {LOOT_CURIOSITIES_VALUABLES_FR} from "./fr/loot-curiositiesvaluables";
import {LOOT_CURIOSITIES_VALUABLES_EN} from "./en/loot-curiositiesvaluables";

export interface LootDef {
  label: string;
  data: Loot[];
  dices: string;
}

export interface Loot {
  Dice: string | number;
  Loot: string;
  Quantity?: string;
  Special?: string;
}


export const LOOTPLACES = {
  "fr": LOOT_PLACES_FR,
  "en": LOOT_PLACES_EN
}

export const LOOT_TABLE_INDEX = {
  "fr": LOOT_TABLE_INDEX_FR,
  "en": LOOT_TABLE_INDEX_EN
}

export const LOOT_CURIOSITIES_VALUABLES = {
  "fr": LOOT_CURIOSITIES_VALUABLES_FR,
  "en": LOOT_CURIOSITIES_VALUABLES_EN
}
