import {BOOK_TABLE_INDEX_FR} from "./fr/books-table-index";
import {BOOK_TABLE_INDEX_EN} from "./en/books-table-index";
import {BOOK_TABLE_INDEX_IT} from "./it/books-table-index";

export interface BookType {
  "Dice": number,
  "Loot": string,
  "Description": string,
  "Data"?: BookVolume[];
}

export interface BookVolume {
  "Dice": string,
  "Loot": string,
  "Effet": string
}

export const BOOK_TABLE_INDEX = {
  'fr': BOOK_TABLE_INDEX_FR,
  'en': BOOK_TABLE_INDEX_EN
  'it': BOOK_TABLE_INDEX_IT
}
