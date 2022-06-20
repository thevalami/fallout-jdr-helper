import {AMMUNITION_LOOT_DATA, AMMUNITION_LOOT_DEF} from "./munition-loot";
import {SYRINGE_TYPE_DATA, SYRINGE_TYPE_DEF} from "./syringe-type";
import {DRINK_LOOT_DATA, DRINK_LOOT_DEF} from "./drink-loot";
import {TOOLS_LOOT_DATA, TOOLS_LOOT_DEF} from "./tools-loot";
import {FOOD_LOOT_DATA, FOOD_LOOT_DEF} from "./food-loot";
import {CHEMS_LOOT_DATA, CHEMS_LOOT_DEF} from "./chems-loot";
import {LIGHTWEAPONS_LOOT_DATA, LIGHTWEAPONS_LOOT_DEF} from "./lightweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA, ENERGYWEAPONS_LOOT_DEF} from "./energyweapons-loot";

export interface DataTableDefinition {
  column: string,
  label: string,
}

export interface DataId {
  type: string,
  label: string,
  img: string,
  definition: DataTableDefinition[],
  data: any[];
}

export const REGISTERED_DATA: DataId[] = [
  {
    type: 'ammunitions',
    label: 'Munitions',
    img: 'item_22rounds_gr.ico',
    definition: AMMUNITION_LOOT_DEF,
    data: AMMUNITION_LOOT_DATA
  },
  {
    type: 'syringes',
    label: 'Seringues',
    img: 'item_stimpack_gr.ico',
    definition: SYRINGE_TYPE_DEF,
    data: SYRINGE_TYPE_DATA
  },
  {
    type: 'drinks',
    label: 'Boissons',
    img: 'item_drink_gr.ico',
    definition: DRINK_LOOT_DEF,
    data: DRINK_LOOT_DATA
  },
  {
    type: 'foods',
    label: 'Nourritures',
    img: 'item_iguana_bits_gr.ico',
    definition: FOOD_LOOT_DEF,
    data: FOOD_LOOT_DATA
  },
  {
    type: 'tools',
    label: 'Outils & divers',
    img: 'item_passkey_gr.ico',
    definition: TOOLS_LOOT_DEF,
    data: TOOLS_LOOT_DATA
  },
  {
    type: 'chems',
    label: 'Drogues',
    img: 'item_psycho_gr.ico',
    definition: CHEMS_LOOT_DEF,
    data: CHEMS_LOOT_DATA
  },
  {
    type: 'light-weapons',
    label: 'Armes légères',
    img: 'item_44_rounds_gr.ico',
    definition: LIGHTWEAPONS_LOOT_DEF,
    data: LIGHTWEAPONS_LOOT_DATA
  },
  {
    type: 'energy-weapons',
    label: 'Armes à energie',
    img: 'item_flamerfuel_gr.ico',
    definition: ENERGYWEAPONS_LOOT_DEF,
    data: ENERGYWEAPONS_LOOT_DATA
  }
];
