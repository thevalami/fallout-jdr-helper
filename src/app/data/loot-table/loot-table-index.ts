import {LOOT_AMMO} from "./loot-ammo";
import {LOOT_ARMORS} from "./loot-armors";
import {LOOT_CHEMS} from "./loot-chems";
import {LOOT_CLOTHES} from "./loot-clothes";
import {LOOT_CURIOSITIES_VALUABLES} from "./loot-curiositiesvaluables";
import {LOOT_DRINKS} from "./loot-drinks";
import {LOOT_FOODS} from "./loot-foods";
import {LOOT_JUNK} from "./loot-junk";
import {LOOT_MELEE_WEAPONS} from "./loot-melee-weapons";
import {LOOT_NUKACOLA} from "./loot-nukacoka";
import {LOOT_RANGE_WEAPONS} from "./loot-range-weapons";
import {LOOT_THROWEXPLOSIVES} from "./loot-throwexplosives-weapons";

export const LOOT_TABLE_INDEX = [
  {
    "label": "Munitions",
    "data": LOOT_AMMO,
    "dices": "2d20"
  },
  {
    "label": "Armures",
    "data": LOOT_ARMORS,
    "dices": "2d20"
  },
  {
    "label": "Drogues",
    "data": LOOT_CHEMS,
    "dices": "2d20"
  },
  {
    "label": "Vêtements",
    "data": LOOT_CLOTHES,
    "dices": "2d20"
  },
  {
    "label": "Cueillette",
    "data": LOOT_CLOTHES,
    "dices": "1d20"
  },
  {
    "label": "Curiosités / Objets de valeur",
    "data": LOOT_CURIOSITIES_VALUABLES,
    "dices": "3d20"
  },
  {
    "label": "Boissons",
    "data": LOOT_DRINKS,
    "dices": "2d20"
  },
  {
    "label": "Nourritures",
    "data": LOOT_FOODS,
    "dices": "3d20"
  },
  {
    "label": "Bric-à-brac",
    "data": LOOT_JUNK,
    "dices": "2D20"
  },
  {
    "label": "Armes de mêlée",
    "data": LOOT_MELEE_WEAPONS,
    "dices": "2d20"
  },
  {
    "label": "Distributeur Nuka-Cola",
    "data": LOOT_NUKACOLA,
    "dices": "1d20"
  },
  {
    "label": "Armes à distance",
    "data": LOOT_RANGE_WEAPONS,
    "dices": "2d20"
  },
  {
    "label": "Armes de jet et explosifs",
    "data": LOOT_THROWEXPLOSIVES,
    "dices": "2d20"
  }
];
