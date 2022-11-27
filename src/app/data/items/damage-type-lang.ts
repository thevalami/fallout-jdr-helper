import {TARGET_TYPE_DATA_EN} from "./en/target-type-damage";
import {TARGET_TYPE_DATA_FR} from "./fr/target-type-damage";

export type EnemyType = 'HUMAN' | 'QUADRUPEDE' | 'FLYINGINSECT' | 'ROBOT';

export const TARGET_TYPE_DATA = {
  'fr': TARGET_TYPE_DATA_FR,
  'en': TARGET_TYPE_DATA_EN
}
