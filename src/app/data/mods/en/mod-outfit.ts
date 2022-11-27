//TODO: Translate me !

import {GLOBAL_ARMOR_MODS_EN, MOD_BALLISTIC_WEAVE_EN} from "./mods-armor-global";

export const MOD_OUTFITS_EN = {
  "Harnais": [...GLOBAL_ARMOR_MODS_EN],
  "Uniforme de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_EN],
  "Vêtements décontractés": [...MOD_BALLISTIC_WEAVE_EN, ...GLOBAL_ARMOR_MODS_EN],
  "Vêtements de cuir": [...GLOBAL_ARMOR_MODS_EN],
  "Vêtements résistants": [...GLOBAL_ARMOR_MODS_EN],
  "Treillis militaire": [...MOD_BALLISTIC_WEAVE_EN, ...GLOBAL_ARMOR_MODS_EN],
  "Combinaison d'abri": [
    {
      "Name": "Revêtement isolant",
      "Type": "Revêtement de protection",
      "Effect1": "+1 résistance aux dégâts énergétiques",
      "Effect2": "",
      "Weight": "",
      "Cost": "+ 10 Caps",
      "Skills": ""
    },
    {
      "Name": "Revêtement traité",
      "Type": "Revêtement de protection",
      "Effect1": "+1 résistance aux dégâts énergétiques",
      "Effect2": "+1 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 20 Caps",
      "Skills": "Armurier 2"
    },
    {
      "Name": "Revêtement résistant",
      "Type": "Revêtement de protection",
      "Effect1": "+2 résistance aux dégâts énergétiques",
      "Effect2": "+1 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 30 Caps",
      "Skills": "Armurier 3"
    },
    {
      "Name": "Revêtement protecteur",
      "Type": "Revêtement de protection",
      "Effect1": "+2 résistance aux dégâts énergétiques",
      "Effect2": "+2 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 40 Caps",
      "Skills": "Armurier 4, Scientifique 2"
    },
    {
      "Name": "Revêtement blindé",
      "Type": "Revêtement de protection",
      "Effect1": "+3 résistance aux dégâts énergétiques",
      "Effect2": "+3 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 50 Caps",
      "Skills": "Armurier 4, Scientifique 4"
    }, ...GLOBAL_ARMOR_MODS_EN
  ],
  "Tenue de nomade": [...GLOBAL_ARMOR_MODS_EN],
  "Peaux": [...GLOBAL_ARMOR_MODS_EN],
  "Armure cage": [...GLOBAL_ARMOR_MODS_EN],
  "Armure d'ingénieur": [...GLOBAL_ARMOR_MODS_EN],
  "Manteau lourd": [...MOD_BALLISTIC_WEAVE_EN, ...GLOBAL_ARMOR_MODS_EN],
  "Blouse": [...MOD_BALLISTIC_WEAVE_EN, ...GLOBAL_ARMOR_MODS_EN],
  "Bleu de travail": [...GLOBAL_ARMOR_MODS_EN],
  "Vêtements élégants": [...MOD_BALLISTIC_WEAVE_EN, ...GLOBAL_ARMOR_MODS_EN],
  "Armure de scribe de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_EN],
  "Treillis de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_EN],
  "Combinaison étanche": [...GLOBAL_ARMOR_MODS_EN],
  "Armure à pointes": [...GLOBAL_ARMOR_MODS_EN],
};
