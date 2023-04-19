import {AMMUNITION_LOOT_DATA_FR, AMMUNITION_LOOT_DEF_FR} from "./munition-loot";
import {SYRINGE_LOOT_DATA_FR, SYRINGE_TYPE_DEF_FR} from "./syringe-type";
import {DRINK_LOOT_DATA_FR, DRINK_LOOT_DEF_FR} from "./drink-loot";
import {TOOLS_LOOT_DATA_FR, TOOLS_LOOT_DEF_FR} from "./tools-loot";
import {FOOD_LOOT_DATA_FR, FOOD_LOOT_DEF_FR} from "./food-loot";
import {CHEMS_LOOT_DATA_FR, CHEMS_LOOT_DEF_FR} from "./chems-loot";
import {LIGHTWEAPONS_LOOT_DATA_FR, LIGHTWEAPONS_LOOT_DEF_FR} from "./lightweapons-loot";
import {ENERGYWEAPONS_LOOT_DATA_FR, ENERGYWEAPONS_LOOT_DEF_FR} from "./energyweapons-loot";
import {MELEEWEAPONS_LOOT_DATA_FR, MELEEWEAPONS_LOOT_DEF_FR} from "./meleeweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA_FR, HEAVYWEAPONS_LOOT_DEF_FR} from "./heavyweapons-loot";
import {EXPLOSIVES_LOOT_DATA_FR, EXPLOSIVES_LOOT_DEF_FR} from "./explosives-loot";
import {PROJECTILES_LOOT_DATA_FR, PROJECTILES_LOOT_DEF_FR} from "./projectiles-loot";
import {OUTFITS_LOOT_DATA_FR, OUTFITS_LOOT_DEF_FR} from "./outfits-loot";
import {HATS_LOOT_DATA_FR, HATS_LOOT_DEF_FR} from "./hats-loot";
import {LEATHERARMOR_LOOT_DATA_FR, LEATHERARMOR_LOOT_DEF_FR} from "./leatherarmor-loot";
import {SYNTHARMOR_LOOT_DATA_FR, SYNTHARMOR_LOOT_DEF_FR} from "./syntharmor-loot";
import {VAULTSEC_ARMOR_LOOT_DATA_FR, VAULTSEC_LOOT_DEF_FR} from "./vaultsecurity-armor-loot";
import {RAIDERARMOR_LOOT_DATA_FR, RAIDERARMOR_LOOT_DEF_FR} from "./looterarmor-loot";
import {METALARMOR_LOOT_DATA_FR, METALARMOR_LOOT_DEF_FR} from "./metal-armor-loot";
import {COMBATARMOR_LOOT_DATA_FR, COMBATARMOR_LOOT_DEF_FR} from "./combat-armor-loot";
import {DOGARMOR_LOOT_DATA_FR, DOGARMOR_LOOT_DEF_FR} from "./dogarmor-loot";
import {POWERARMOR_LOOT_DATA_FR, POWERRMOR_LOOT_DEF_FR} from "./power-armor-loot";
import {ROBOTARMOR_LOOT_DATA_FR, ROBOTARMOR_LOOT_DEF_FR} from "./robot-armor-loot";

import {Section} from "../../generic-data-lang";
import {RECIPE_DEF_FR} from "../../recipes/fr/recipes";
import {RECIPE_FOOD_STATION_FR} from "../../recipes/fr/recipe-food";
import {RECIPE_ARMOR_STATION_FR} from "../../recipes/fr/recipe-armors";
import {RECIPE_CHEMISTRY_STATION_FR} from "../../recipes/fr/recipe-chemistry";
import {RECIPE_ROBOT_STATION_FR} from "../../recipes/fr/recipe-robot";
import {RECIPE_POWERARMOR_STATION_FR} from "../../recipes/fr/recipe-powerarmor";
import {RECIPE_LIGHTWEAPONS_STATION_FR} from "../../recipes/fr/recipe-lightweapons";
import {RECIPE_ENERGYWEAPONS_STATION_FR} from "../../recipes/fr/recipe-energyweapons";
import {RECIPE_HEAVYWEAPONS_STATION_FR} from "../../recipes/fr/recipe-heavyweapons";
import {RECIPE_MELEEWEAPONS_STATION_FR} from "../../recipes/fr/recipe-meleeweapons";
import {EFFECT_TYPE_FR, EFFECTS_FR} from "../../rules/fr/effects";
import {MODIFIERS_FR, MODIFIERS_TYPE_FR} from "../../rules/fr/modifiers";

export const REGISTERED_DATA_SECTIONS_FR: Section[] = [
  {
    label: "Munitions",
    data: [
      {
        type: 'ammunitions',
        label: 'Munitions',
        img: 'radioactive.png',
        definition: AMMUNITION_LOOT_DEF_FR,
        data: AMMUNITION_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'syringes',
        label: 'Seringues',
        img: 'chems.png',
        definition: SYRINGE_TYPE_DEF_FR,
        data: SYRINGE_LOOT_DATA_FR,
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
        definition: DRINK_LOOT_DEF_FR,
        data: DRINK_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'foods',
        label: 'Nourriture',
        img: 'food.png',
        definition: FOOD_LOOT_DEF_FR,
        data: FOOD_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'chems',
        label: 'Drogues',
        img: 'chems2.png',
        definition: CHEMS_LOOT_DEF_FR,
        data: CHEMS_LOOT_DATA_FR,
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
        definition: TOOLS_LOOT_DEF_FR,
        data: TOOLS_LOOT_DATA_FR,
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
        definition: LIGHTWEAPONS_LOOT_DEF_FR,
        data: LIGHTWEAPONS_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'energy-weapons',
        label: 'Armes à energie',
        img: 'energyweapon.png',
        definition: ENERGYWEAPONS_LOOT_DEF_FR,
        data: ENERGYWEAPONS_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'melee-weapons',
        label: 'Armes de mêlée',
        img: 'melee.png',
        definition: MELEEWEAPONS_LOOT_DEF_FR,
        data: MELEEWEAPONS_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'heavy-weapons',
        label: 'Armes lourdes',
        img: 'heavyguns.png',
        definition: HEAVYWEAPONS_LOOT_DEF_FR,
        data: HEAVYWEAPONS_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'explosives',
        label: 'Explosifs',
        img: 'explosives.png',
        definition: EXPLOSIVES_LOOT_DEF_FR,
        data: EXPLOSIVES_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'projectiles',
        label: 'Projectiles',
        img: 'projectile.png',
        definition: PROJECTILES_LOOT_DEF_FR,
        data: PROJECTILES_LOOT_DATA_FR,
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
        definition: OUTFITS_LOOT_DEF_FR,
        data: OUTFITS_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'hats',
        label: 'Couvre-chefs',
        img: 'hats.png',
        definition: HATS_LOOT_DEF_FR,
        data: HATS_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'leather-armor',
        label: 'Armures de cuir',
        img: 'leather.png',
        definition: LEATHERARMOR_LOOT_DEF_FR,
        data: LEATHERARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'synth-armor',
        label: 'Armures de synthétique',
        img: 'synth.png',
        definition: SYNTHARMOR_LOOT_DEF_FR,
        data: SYNTHARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'vaultsec-armor',
        label: 'Armures de securité Vault-Tec',
        img: 'security.png',
        definition: VAULTSEC_LOOT_DEF_FR,
        data: VAULTSEC_ARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'raider-armor',
        label: 'Armures de pillard',
        img: 'raider.png',
        definition: RAIDERARMOR_LOOT_DEF_FR,
        data: RAIDERARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'metal-armor',
        label: 'Armures de métal',
        img: 'metal.png',
        definition: METALARMOR_LOOT_DEF_FR,
        data: METALARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'combat-armor',
        label: 'Armures de combat',
        img: 'combat.png',
        definition: COMBATARMOR_LOOT_DEF_FR,
        data: COMBATARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'dog-armor',
        label: 'Armures de chien',
        img: 'dog.png',
        definition: DOGARMOR_LOOT_DEF_FR,
        data: DOGARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'power-armor',
        label: 'Armures assistées',
        img: 'powerarmor.png',
        definition: POWERRMOR_LOOT_DEF_FR,
        data: POWERARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      },
      {
        type: 'robot-armor',
        label: 'Armures robot',
        img: 'robot.png',
        definition: ROBOTARMOR_LOOT_DEF_FR,
        data: ROBOTARMOR_LOOT_DATA_FR,
        generic: true,
        moddable: true
      }
    ]
  },
  {
    label: "Recettes",
    data: [
      {
        type: 'recipe-food-station',
        label: 'Atelier de cuisine',
        img: 'food.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_FOOD_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-armor-station',
        label: 'Etabli d\'armures',
        img: 'metal.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_ARMOR_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-chemistry-station',
        label: 'Etabli de chimie',
        img: 'chems.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_CHEMISTRY_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-robot-station',
        label: 'Etabli de robots',
        img: 'robot.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_ROBOT_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-powerarmor-station',
        label: 'Poste d\'armures assistées',
        img: 'powerarmor.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_POWERARMOR_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-lightweapons-station',
        label: 'Poste d\'armes : légères',
        img: 'smallgun.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_LIGHTWEAPONS_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-energyweapons-station',
        label: 'Poste d\'armes : énergies',
        img: 'energyweapon.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_ENERGYWEAPONS_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-heavyweapons-station',
        label: 'Poste d\'armes : lourdes',
        img: 'heavyguns.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_HEAVYWEAPONS_STATION_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'recipe-meleeweapons-station',
        label: 'Poste d\'armes : mêlée',
        img: 'melee.png',
        definition: RECIPE_DEF_FR,
        data: RECIPE_MELEEWEAPONS_STATION_FR,
        generic: true,
        moddable: false
      }
    ]
  },
  {
    label: "Règles",
    data: [
      {
        type: 'effects',
        label: 'Effets',
        icon: 'sparkles',
        definition: EFFECT_TYPE_FR,
        data: EFFECTS_FR,
        generic: true,
        moddable: false
      },
      {
        type: 'modifiers',
        label: 'Qualités',
        icon: 'star',
        definition: MODIFIERS_TYPE_FR,
        data: MODIFIERS_FR,
        generic: true,
        moddable: false
      }
    ]
  },

];
