import {
  AMMUNITION_LOOT_DATA,
  CHEMS_LOOT_DATA,
  COMBATARMOR_LOOT_DATA,
  DOGARMOR_LOOT_DATA,
  DRINK_LOOT_DATA,
  ENERGYWEAPONS_LOOT_DATA,
  EXPLOSIVES_LOOT_DATA,
  FOOD_LOOT_DATA,
  HATS_LOOT_DATA,
  HEAVYWEAPONS_LOOT_DATA,
  LEATHERARMOR_LOOT_DATA,
  LIGHTWEAPONS_LOOT_DATA,
  MELEEWEAPONS_LOOT_DATA,
  METALARMOR_LOOT_DATA,
  OUTFITS_LOOT_DATA,
  PROJECTILES_LOOT_DATA,
  RAIDERARMOR_LOOT_DATA,
  SYNTHARMOR_LOOT_DATA,
  SYRINGE_LOOT_DATA,
  TOOLS_LOOT_DATA
} from "../../data/generic-data-lang";

export const findDataMatching = (lang: string, lootType: string): any[] => {
  switch (lootType) {
    case 'Munitions':
    case 'Ammunitions':
      return [...AMMUNITION_LOOT_DATA[lang], ...SYRINGE_LOOT_DATA[lang]];
    case 'Drogues':
    case 'Chems':
      return [...CHEMS_LOOT_DATA[lang]];
    case 'Vêtements':
    case 'Clothes':
      return [...OUTFITS_LOOT_DATA[lang], ...HATS_LOOT_DATA[lang]];
    case 'Cueillette':
    case 'Gathering':
      return [...FOOD_LOOT_DATA[lang]];
    case 'Curiosités / Objets de valeur':
    case 'Curiosities / Valuables':
      return [...TOOLS_LOOT_DATA[lang], ...DOGARMOR_LOOT_DATA[lang]];
    case 'Boissons':
    case 'Drinks':
      return [...DRINK_LOOT_DATA[lang]];
    case 'Nourriture':
    case 'Food':
      return [...FOOD_LOOT_DATA[lang]];
    case 'Armes de jet et explosifs':
    case 'Projectiles and explosives':
      return [...EXPLOSIVES_LOOT_DATA[lang], ...PROJECTILES_LOOT_DATA[lang]];
    case 'Armes à distance':
    case 'Ranged weapons':
      return [...ENERGYWEAPONS_LOOT_DATA[lang], ...LIGHTWEAPONS_LOOT_DATA[lang], ...HEAVYWEAPONS_LOOT_DATA[lang]];
    case 'Armes de mêlée':
    case 'Melee weapons':
      return [...MELEEWEAPONS_LOOT_DATA[lang]];
    case 'Distributeur Nuka-Cola':
    case 'Nuka-Cola vending machine':
      return [...DRINK_LOOT_DATA[lang]];
    case 'Armures':
    case 'Armors':
      return [...COMBATARMOR_LOOT_DATA[lang], ...METALARMOR_LOOT_DATA[lang], ...LEATHERARMOR_LOOT_DATA[lang], ...RAIDERARMOR_LOOT_DATA[lang], ...SYNTHARMOR_LOOT_DATA[lang]];
    default:
      return [];
  }
}
