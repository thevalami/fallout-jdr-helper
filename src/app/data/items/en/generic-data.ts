import {AMMUNITION_LOOT_DATA_EN, AMMUNITION_LOOT_DEF_EN} from "./munition-loot";
import {SYRINGE_TYPE_DATA_EN, SYRINGE_TYPE_DEF_EN} from "./syringe-type";
import {DRINK_LOOT_DATA_EN, DRINK_LOOT_DEF_EN} from "./drink-loot";
import {TOOLS_LOOT_DATA_EN, TOOLS_LOOT_DEF_EN} from "./tools-loot";
import {FOOD_LOOT_DATA_EN, FOOD_LOOT_DEF_EN} from "./food-loot";
import {CHEMS_LOOT_DATA_EN, CHEMS_LOOT_DEF_EN} from "./chems-loot";
import {LIGHTWEAPONS_LOOT_DATA_EN, LIGHTWEAPONS_LOOT_DEF_EN} from "./lightweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA_EN, ENERGYWEAPONS_LOOT_DEF_EN} from "./energyweapons-loot";
import {MELEEWEAPONS_LOOT_DATA_EN, MELEEWEAPONS_LOOT_DEF_EN} from "./meleeweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA_EN, HEAVYWEAPONS_LOOT_DEF_EN} from "./heavyweapons-loot";
import {EXPLOSIVES_LOOT_DATA_EN, EXPLOSIVES_LOOT_DEF_EN} from "./explosives-loot";
import {PROJECTILES_LOOT_DATA_EN, PROJECTILES_LOOT_DEF_EN} from "./projectiles-loot";
import {OUTFITS_LOOT_DATA_EN, OUTFITS_LOOT_DEF_EN} from "./outfits-loot";
import {HATS_LOOT_DATA_EN, HATS_LOOT_DEF_EN} from "./hats-loot";
import {LEATHERARMOR_LOOT_DATA_EN, LEATHERARMOR_LOOT_DEF_EN} from "./leatherarmor-loot";
import {SYNTHARMOR_LOOT_DATA_EN, SYNTHARMOR_LOOT_DEF_EN} from "./syntharmor-loot";
import {RAIDERARMOR_LOOT_DATA_EN, RAIDERARMOR_LOOT_DEF_EN} from "./looterarmor-loot";
import {METALARMOR_LOOT_DATA_EN, METALARMOR_LOOT_DEF_EN} from "./metal-armor-loot";
import {COMBATARMOR_LOOT_DATA_EN, COMBATARMOR_LOOT_DEF_EN} from "./combat-armor-loot";
import {DOGARMOR_LOOT_DATA_EN, DOGARMOR_LOOT_DEF_EN} from "./dogarmor-loot";
import {ROBOTARMOR_LOOT_DATA_EN, ROBOTARMOR_LOOT_DEF_EN} from "./robot-armor-loot";
import {RECIPE_DEF_EN} from "../../recipes/en/recipes";
import {Section} from "../../generic-data-lang";
import {RECIPE_FOOD_STATION_EN} from "../../recipes/en/recipe-food";
import {RECIPE_ARMOR_STATION_EN} from "../../recipes/en/recipe-armors";
import {RECIPE_CHEMISTRY_STATION_EN} from "../../recipes/en/recipe-chemistry";
import {RECIPE_ROBOT_STATION_EN} from "../../recipes/en/recipe-robot";
import {RECIPE_POWERARMOR_STATION_EN} from "../../recipes/en/recipe-powerarmor";
import {RECIPE_LIGHTWEAPONS_STATION_EN} from "../../recipes/en/recipe-lightweapons";
import {RECIPE_ENERGYWEAPONS_STATION_EN} from "../../recipes/en/recipe-energyweapons";
import {RECIPE_HEAVYWEAPONS_STATION_EN} from "../../recipes/en/recipe-heavyweapons";
import {RECIPE_MELEEWEAPONS_STATION_EN} from "../../recipes/en/recipe-meleeweapons";
import {VAULTSEC_ARMOR_LOOT_DATA_EN, VAULTSEC_LOOT_DEF_EN} from "./vaultsecurity-armor-loot";
import {POWERARMOR_LOOT_DATA_EN, POWERRMOR_LOOT_DEF_EN} from "./power-armor-loot";
import {EFFECT_TYPE_EN, EFFECTS_EN} from "../../rules/en/effects";
import {MODIFIERS_EN, MODIFIERS_TYPE_EN} from "../../rules/en/modifiers";

export const REGISTERED_DATA_SECTIONS_EN: Section[] = [
  {
    label: "Ammunitions",
    data: [
      {
        type: 'ammunitions',
        label: 'Ammunitions',
        img: 'radioactive.png',
        definition: AMMUNITION_LOOT_DEF_EN,
        data: AMMUNITION_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'syringes',
        label: 'Syringes',
        img: 'chems.png',
        definition: SYRINGE_TYPE_DEF_EN,
        data: SYRINGE_TYPE_DATA_EN,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Consumables",
    data: [
      {
        type: 'drinks',
        label: 'Drinks',
        img: 'drink.png',
        definition: DRINK_LOOT_DEF_EN,
        data: DRINK_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'foods',
        label: 'Food',
        img: 'food.png',
        definition: FOOD_LOOT_DEF_EN,
        data: FOOD_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'chems',
        label: 'Chems',
        img: 'chems2.png',
        definition: CHEMS_LOOT_DEF_EN,
        data: CHEMS_LOOT_DATA_EN,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Others",
    data: [
      {
        type: 'tools',
        label: 'Tools',
        img: 'tools.png',
        definition: TOOLS_LOOT_DEF_EN,
        data: TOOLS_LOOT_DATA_EN,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Weapons",
    data: [
      {
        type: 'light-weapons',
        label: 'Light weapons',
        img: 'smallgun.png',
        definition: LIGHTWEAPONS_LOOT_DEF_EN,
        data: LIGHTWEAPONS_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'energy-weapons',
        label: 'Energy Weapons',
        img: 'energyweapon.png',
        definition: ENERGYWEAPONS_LOOT_DEF_EN,
        data: ENERGYWEAPONS_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'melee-weapons',
        label: 'Melee weapons',
        img: 'melee.png',
        definition: MELEEWEAPONS_LOOT_DEF_EN,
        data: MELEEWEAPONS_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'heavy-weapons',
        label: 'Heavy weapons',
        img: 'heavyguns.png',
        definition: HEAVYWEAPONS_LOOT_DEF_EN,
        data: HEAVYWEAPONS_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'explosives',
        label: 'Explosives',
        img: 'explosives.png',
        definition: EXPLOSIVES_LOOT_DEF_EN,
        data: EXPLOSIVES_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'projectiles',
        label: 'Projectiles',
        img: 'projectile.png',
        definition: PROJECTILES_LOOT_DEF_EN,
        data: PROJECTILES_LOOT_DATA_EN,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Armors",
    data: [
      {
        type: 'outfits',
        label: 'Clothes and outfits',
        img: 'outfits.png',
        definition: OUTFITS_LOOT_DEF_EN,
        data: OUTFITS_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'hats',
        label: 'Hats',
        img: 'hats.png',
        definition: HATS_LOOT_DEF_EN,
        data: HATS_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'leather-armor',
        label: 'Leather armors',
        img: 'leather.png',
        definition: LEATHERARMOR_LOOT_DEF_EN,
        data: LEATHERARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'synth-armor',
        label: 'Synth armors',
        img: 'synth.png',
        definition: SYNTHARMOR_LOOT_DEF_EN,
        data: SYNTHARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'vaultsec-armor',
        label: 'Vault-Tec security armor',
        img: 'security.png',
        definition: VAULTSEC_LOOT_DEF_EN,
        data: VAULTSEC_ARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'raider-armor',
        label: 'Raider armors',
        img: 'raider.png',
        definition: RAIDERARMOR_LOOT_DEF_EN,
        data: RAIDERARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'metal-armor',
        label: 'Metal armors',
        img: 'metal.png',
        definition: METALARMOR_LOOT_DEF_EN,
        data: METALARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'combat-armor',
        label: 'Combat armors',
        img: 'combat.png',
        definition: COMBATARMOR_LOOT_DEF_EN,
        data: COMBATARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'dog-armor',
        label: 'Dog armors',
        img: 'dog.png',
        definition: DOGARMOR_LOOT_DEF_EN,
        data: DOGARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'power-armor',
        label: 'Power armors',
        img: 'powerarmor.png',
        definition: POWERRMOR_LOOT_DEF_EN,
        data: POWERARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      },
      {
        type: 'robot-armor',
        label: 'Robot armor',
        img: 'robot.png',
        definition: ROBOTARMOR_LOOT_DEF_EN,
        data: ROBOTARMOR_LOOT_DATA_EN,
        generic: true,
        moddable: true
      }
    ]
  },
  {
    label: "Recipes",
    data: [
      {
        type: 'recipe-food-stattion',
        label: 'Cooking workbench',
        img: 'food.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_FOOD_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-armor-station',
        label: 'Armor workbench',
        img: 'metal.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_ARMOR_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-chemistry-station',
        label: 'Chem workbench',
        img: 'chems.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_CHEMISTRY_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-robot-station',
        label: 'Robot workbench',
        img: 'robot.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_ROBOT_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-powerarmor-station',
        label: 'Power armor workbench',
        img: 'powerarmor.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_POWERARMOR_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-lightweapons-station',
        label: 'Light weapons wrokbench',
        img: 'smallgun.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_LIGHTWEAPONS_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-energyweapons-station',
        label: 'Energy weapons workbench',
        img: 'energyweapon.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_ENERGYWEAPONS_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-heavyweapons-station',
        label: 'Heavy weapons workbench',
        img: 'heavyguns.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_HEAVYWEAPONS_STATION_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-meleeweapons-station',
        label: 'Melee weapons workbench',
        img: 'melee.png',
        definition: RECIPE_DEF_EN,
        data: RECIPE_MELEEWEAPONS_STATION_EN,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Rules",
    data: [
      {
        type: 'effects',
        label: 'Effects',
        icon: 'sparkles-outline',
        definition: EFFECT_TYPE_EN,
        data: EFFECTS_EN,
        generic: true,
        moddable: false
      },
      {
        type: 'modifiers',
        label: 'Modifiers',
        icon: 'star-outline',
        definition: MODIFIERS_TYPE_EN,
        data: MODIFIERS_EN,
        generic: true,
        moddable: false
      }
    ]
  }
];
