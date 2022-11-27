import {LOOT_AMMO_FR} from "./loot-ammo";
import {LOOT_RANGE_WEAPONS_FR} from "./loot-range-weapons";
import {LOOT_NUKACOLA_FR} from "./loot-nukacoka";
import {LOOT_JUNK_FR} from "./loot-junk";
import {LOOT_FOODS_FR} from "./loot-foods";
import {LOOT_DRINKS_FR} from "./loot-drinks";
import {LOOT_CURIOSITIES_VALUABLES_FR} from "./loot-curiositiesvaluables";
import {LOOT_THROWEXPLOSIVES_FR} from "./loot-throwexplosives-weapons";
import {LOOT_MELEE_WEAPONS_FR} from "./loot-melee-weapons";
import {LOOT_CHEMS_FR} from "./loot-chems";
import {LOOT_ARMORS_FR} from "./loot-armors";
import {LOOT_CLOTHES_FR} from "./loot-clothes";
import {LOOT_CUEILLETTE_FR} from "./loot-cueillette";

export const LOOT_TABLE_INDEX_FR = [
  {
    "label": "Munitions",
    "data": LOOT_AMMO_FR,
    "dices": "2d20"
  },
  {
    "label": "Armures",
    "data": LOOT_ARMORS_FR,
    "dices": "2d20"
  },
  {
    "label": "Drogues",
    "data": LOOT_CHEMS_FR,
    "dices": "2d20"
  },
  {
    "label": "Vêtements",
    "data": LOOT_CLOTHES_FR,
    "dices": "2d20"
  },
  {
    "label": "Cueillette",
    "data": LOOT_CUEILLETTE_FR,
    "dices": "1d20"
  },
  {
    "label": "Curiosités / Objets de valeur",
    "data": LOOT_CURIOSITIES_VALUABLES_FR,
    "dices": "3d20"
  },
  {
    "label": "Boissons",
    "data": LOOT_DRINKS_FR,
    "dices": "2d20"
  },
  {
    "label": "Nourritures",
    "data": LOOT_FOODS_FR,
    "dices": "2d20"
  },
  {
    "label": "Bric-à-brac",
    "data": LOOT_JUNK_FR,
    "dices": "2d20"
  },
  {
    "label": "Armes de mêlée",
    "data": LOOT_MELEE_WEAPONS_FR,
    "dices": "2d20"
  },
  {
    "label": "Distributeur Nuka-Cola",
    "data": LOOT_NUKACOLA_FR,
    "dices": "1d20"
  },
  {
    "label": "Armes à distance",
    "data": LOOT_RANGE_WEAPONS_FR,
    "dices": "2d20"
  },
  {
    "label": "Armes de jet et explosifs",
    "data": LOOT_THROWEXPLOSIVES_FR,
    "dices": "2d20"
  }
];
