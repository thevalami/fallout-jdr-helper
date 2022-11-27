import {GLOBAL_ARMOR_MODS_FR, MOD_TISSU_BALISTIQUE_FR} from "./mods-armor-global";

export const MOD_OUTFITS_FR = {
  "Harnais": [...GLOBAL_ARMOR_MODS_FR],
  "Uniforme de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_FR],
  "Vêtements décontractés": [...MOD_TISSU_BALISTIQUE_FR, ...GLOBAL_ARMOR_MODS_FR],
  "Vêtements de cuir": [...GLOBAL_ARMOR_MODS_FR],
  "Vêtements résistants": [...GLOBAL_ARMOR_MODS_FR],
  "Treillis militaire": [...MOD_TISSU_BALISTIQUE_FR, ...GLOBAL_ARMOR_MODS_FR],
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
    }, ...GLOBAL_ARMOR_MODS_FR
  ],
  "Tenue de nomade": [...GLOBAL_ARMOR_MODS_FR],
  "Peaux": [...GLOBAL_ARMOR_MODS_FR],
  "Armure cage": [...GLOBAL_ARMOR_MODS_FR],
  "Armure d'ingénieur": [...GLOBAL_ARMOR_MODS_FR],
  "Manteau lourd": [...MOD_TISSU_BALISTIQUE_FR, ...GLOBAL_ARMOR_MODS_FR],
  "Blouse": [...MOD_TISSU_BALISTIQUE_FR, ...GLOBAL_ARMOR_MODS_FR],
  "Bleu de travail": [...GLOBAL_ARMOR_MODS_FR],
  "Vêtements élégants": [...MOD_TISSU_BALISTIQUE_FR, ...GLOBAL_ARMOR_MODS_FR],
  "Armure de scribe de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_FR],
  "Treillis de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_FR],
  "Combinaison étanche": [...GLOBAL_ARMOR_MODS_FR],
  "Armure à pointes": [...GLOBAL_ARMOR_MODS_FR],
};
