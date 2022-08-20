import {Loot, LOOT_TABLE_INDEX, LootDef} from "../../data/loot-table/loot-table-index";

export const findMatchingLoot = (diceResult: number, lootDef: LootDef): Loot => {
  let loot = null;
  for (let candidateData of lootDef.data) {
    if (String(candidateData.Dice).includes("-")) {
      let minDice: number = Number(String(candidateData.Dice).split("-")[0]);
      let maxDice: number = Number(String(candidateData.Dice).split("-")[1]);
      if (diceResult >= minDice && diceResult <= maxDice) {
        loot = candidateData;
      }
    } else {
      if (diceResult === candidateData.Dice) {
        loot = candidateData;
      }
    }
  }
  return loot;
}

export const findMatchingDefinition = (lootType: string): LootDef => {
  let definition = null;
  for (let lootTypeDef of LOOT_TABLE_INDEX) {
    if (lootTypeDef.label === lootType) {
      definition = lootTypeDef;
    }
  }
  return definition;
}
