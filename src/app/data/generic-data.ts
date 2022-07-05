import {AMMUNITION_LOOT_DATA, AMMUNITION_LOOT_DEF} from "./munition-loot";
import {SYRINGE_TYPE_DATA, SYRINGE_TYPE_DEF} from "./syringe-type";
import {DRINK_LOOT_DATA, DRINK_LOOT_DEF} from "./drink-loot";
import {TOOLS_LOOT_DATA, TOOLS_LOOT_DEF} from "./tools-loot";
import {FOOD_LOOT_DATA, FOOD_LOOT_DEF} from "./food-loot";
import {CHEMS_LOOT_DATA, CHEMS_LOOT_DEF} from "./chems-loot";
import {LIGHTWEAPONS_LOOT_DATA, LIGHTWEAPONS_LOOT_DEF} from "./lightweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA, ENERGYWEAPONS_LOOT_DEF} from "./energyweapons-loot";
import {MELEEWEAPONS_LOOT_DATA, MELEEWEAPONS_LOOT_DEF} from "./meleeweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA, HEAVYWEAPONS_LOOT_DEF} from "./heavyweapons-loot";
import {EXPLOSIVES_LOOT_DATA, EXPLOSIVES_LOOT_DEF} from "./explosives-loot";
import {PROJECTILES_LOOT_DATA, PROJECTILES_LOOT_DEF} from "./projectiles-loot";
import {OUTFITS_LOOT_DATA, OUTFITS_LOOT_DEF} from "./outfits-loot";
import {HATS_LOOT_DATA, HATS_LOOT_DEF} from "./hats-loot";
import {LEATHERARMOR_LOOT_DATA, LEATHERARMOR_LOOT_DEF} from "./leatherarmor-loot";
import {SYNTHARMOR_LOOT_DATA, SYNTHARMOR_LOOT_DEF} from "./syntharmor-loot";
import {VAULTSEC_LOOT_DEF, VAULTSECARMOR_LOOT_DATA} from "./vaultsecurity-armor-loot";
import {LOOTERARMOR_LOOT_DATA, LOOTERARMOR_LOOT_DEF} from "./looterarmor-loot";
import {METALARMOR_LOOT_DATA, METALARMOR_LOOT_DEF} from "./metal-armor-loot";
import {COMBATARMOR_LOOT_DATA, COMBATARMOR_LOOT_DEF} from "./combat-armor-loot";
import {DOGARMOR_LOOT_DATA, DOGARMOR_LOOT_DEF} from "./dogarmor-loot";
import {POWERARMOR_LOOT_DATA, POWERRMOR_LOOT_DEF} from "./power-armor-loot";

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

export const REGISTERED_DATA_SECTIONS: Section[] = [
  {
    label: "Munitions",
    data: [
      {
        type: 'ammunitions',
        label: 'Munitions',
        img: 'radioactive.png',
        definition: AMMUNITION_LOOT_DEF,
        data: AMMUNITION_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'syringes',
        label: 'Seringues',
        img: 'chems.png',
        definition: SYRINGE_TYPE_DEF,
        data: SYRINGE_TYPE_DATA,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Consommables",
    data: [
      {
        type: 'drinks',
        label: 'Boissons',
        img: 'drink.png',
        definition: DRINK_LOOT_DEF,
        data: DRINK_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'foods',
        label: 'Nourritures',
        img: 'food.png',
        definition: FOOD_LOOT_DEF,
        data: FOOD_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'chems',
        label: 'Drogues',
        img: 'chems2.png',
        definition: CHEMS_LOOT_DEF,
        data: CHEMS_LOOT_DATA,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Autres",
    data: [
      {
        type: 'tools',
        label: 'Outils & divers',
        img: 'tools.png',
        definition: TOOLS_LOOT_DEF,
        data: TOOLS_LOOT_DATA,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Armes",
    data: [
      {
        type: 'light-weapons',
        label: 'Armes légères',
        img: 'smallgun.png',
        definition: LIGHTWEAPONS_LOOT_DEF,
        data: LIGHTWEAPONS_LOOT_DATA,
        generic: true,
        moddable: true
      },
      {
        type: 'energy-weapons',
        label: 'Armes à energie',
        img: 'energyweapon.png',
        definition: ENERGYWEAPONS_LOOT_DEF,
        data: ENERGYWEAPONS_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'melee-weapons',
        label: 'Armes de mêlée',
        img: 'melee.png',
        definition: MELEEWEAPONS_LOOT_DEF,
        data: MELEEWEAPONS_LOOT_DATA,
        generic: true,
        moddable: true
      },
      {
        type: 'heavy-weapons',
        label: 'Armes lourdes',
        img: 'heavyguns.png',
        definition: HEAVYWEAPONS_LOOT_DEF,
        data: HEAVYWEAPONS_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'explosives',
        label: 'Explosifs',
        img: 'explosives.png',
        definition: EXPLOSIVES_LOOT_DEF,
        data: EXPLOSIVES_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'projectiles',
        label: 'Projectiles',
        img: 'projectile.png',
        definition: PROJECTILES_LOOT_DEF,
        data: PROJECTILES_LOOT_DATA,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Armures",
    data: [
      {
        type: 'outfits',
        label: 'Tenues et vêtements',
        img: 'outfits.png',
        definition: OUTFITS_LOOT_DEF,
        data: OUTFITS_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'hats',
        label: 'Couvre-chefs',
        img: 'hats.png',
        definition: HATS_LOOT_DEF,
        data: HATS_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'leather-armor',
        label: 'Armures de cuir',
        img: 'leather.png',
        definition: LEATHERARMOR_LOOT_DEF,
        data: LEATHERARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'synth-armor',
        label: 'Armures de synthétique',
        img: 'synth.png',
        definition: SYNTHARMOR_LOOT_DEF,
        data: SYNTHARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'vaultsec-armor',
        label: 'Armures de securité Vault-Tec',
        img: 'security.png',
        definition: VAULTSEC_LOOT_DEF,
        data: VAULTSECARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'lootersec-armor',
        label: 'Armures de pillard',
        img: 'raider.png',
        definition: LOOTERARMOR_LOOT_DEF,
        data: LOOTERARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'metal-armor',
        label: 'Armures de métal',
        img: 'metal.png',
        definition: METALARMOR_LOOT_DEF,
        data: METALARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'combat-armor',
        label: 'Armures de combat',
        img: 'combat.png',
        definition: COMBATARMOR_LOOT_DEF,
        data: COMBATARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'dog-armor',
        label: 'Armures de chien',
        img: 'dog.png',
        definition: DOGARMOR_LOOT_DEF,
        data: DOGARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      },
      {
        type: 'power-armor',
        label: 'Armures assistées',
        img: 'powerarmor.png',
        definition: POWERRMOR_LOOT_DEF,
        data: POWERARMOR_LOOT_DATA,
        generic: true,
        moddable: false
      }
    ]
  }
];
