import {MOD_TISSU_BALISTIQUE_FR} from "./mods-armor-global";

export const MOD_OUTFITS_FR = {
  "Harnais": [],
  "Uniforme de la Confrérie de l'Acier": [],
  "Vêtements décontractés": [...MOD_TISSU_BALISTIQUE_FR,],
  "Vêtements de cuir": [],
  "Vêtements résistants": [],
  "Treillis militaire": [...MOD_TISSU_BALISTIQUE_FR],
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
    },
  ],
  "Tenue de nomade": [],
  "Peaux": [],
  "Armure cage": [],
  "Armure d'ingénieur": [],
  "Manteau lourd": [...MOD_TISSU_BALISTIQUE_FR,],
  "Blouse": [...MOD_TISSU_BALISTIQUE_FR,],
  "Bleu de travail": [],
  "Vêtements élégants": [...MOD_TISSU_BALISTIQUE_FR,],
  "Armure de scribe de la Confrérie de l'Acier": [],
  "Treillis de la Confrérie de l'Acier": [],
  "Combinaison étanche": [],
  "Armure à pointes": [],
};
