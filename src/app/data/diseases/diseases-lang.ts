import {DISEASES_FR} from "./fr/diseases";
import {DISEASES_EN} from "./en/diseases";

export interface Disease {
  "Name": string,
  "Effect": string,
  "Duration": number,
  "Dice": number
}

export const DISEASES_INDEX = {
  'fr': DISEASES_FR,
  'en': DISEASES_EN
}
