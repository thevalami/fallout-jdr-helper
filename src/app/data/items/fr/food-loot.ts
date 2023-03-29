import {DataTableDefinition} from "../../generic-data-lang";

export const FOOD_LOOT_DEF_FR: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  }, {
    column: 'Heal',
    label: 'PV soignés'
  }, {
    column: 'Effect',
    label: 'Effet'
  }, {
    column: 'Radiation',
    label: 'Irradié?'
  }, {
    column: 'Weight',
    label: 'Poids'
  }, {
    column: 'Cost',
    label: 'Coût'
  }, {
    column: 'Rarity',
    label: 'Rareté'
  }
];

export const FOOD_LOOT_DATA_FR =
  [
    {
      Name: 'Biscuits Fancy Lads',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 18,
      Rarity: '0',
      id: 'f-1'
    },
    {
      Name: 'Blé surin',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 5,
      Rarity: 1,
      id: 'f-2'
    },
    {
      Name: 'Bol de nouilles',
      Heal: 6,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 20,
      Rarity: 2,
      id: 'f-3'
    },
    {
      Name: 'Bombes sucrées',
      Heal: 4,
      Effect: 'Vous gagnez +1 PA au début de la prochaine scène',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 11,
      Rarity: '0',
      id: 'f-4'
    },
    {
      Name: "Bouchées d'écureuil",
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 4,
      Rarity: 1,
      id: 'f-5'
    },
    {
      Name: "Bouchées d'écureuil croustillantes",
      Heal: 6,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 6,
      Rarity: 2,
      id: 'f-6'
    },
    {
      Name: 'Boules de gomme',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 5,
      Rarity: '0',
      id: 'f-7'
    },
    {
      Name: "Brochette d'écureuil",
      Heal: 7,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 15,
      Rarity: 2,
      id: 'f-8'
    },
    {
      Name: "Brochette d'iguane",
      Heal: 6,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 33,
      Rarity: 2,
      id: 'f-9'
    },
    {
      Name: 'Carotte',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 3,
      Rarity: 1,
      id: 'f-10'
    },
    {
      Name: 'Chair de radcafard',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 3,
      Rarity: '0',
      id: 'f-11'
    },
    {
      Name: 'Chips',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 7,
      Rarity: '0',
      id: 'f-12'
    },
    {
      Name: 'Côtelettes de yao guai',
      Heal: 13,
      Effect: "+2 résistance aux dégâts balistiques jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 90,
      Rarity: 4,
      id: 'f-13'
    },
    {
      Name: 'Côtes de chien',
      Heal: 6,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 12,
      Rarity: 1,
      id: 'f-14'
    },
    {
      Name: 'Côtes de molosse mutant',
      Heal: 8,
      Effect: 'Guérit 2 points de dégâts de radiation',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 12,
      Rarity: 3,
      id: 'f-15'
    },
    {
      Name: 'Courge',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 6,
      Rarity: 1,
      id: 'f-16'
    },
    {
      Name: 'Cram',
      Heal: 5,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 25,
      Rarity: 1,
      id: 'f-17'
    },
    {
      Name: 'Épi de maïs',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 6,
      Rarity: 1,
      id: 'f-18'
    },
    {
      Name: 'Fausse morille',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 6,
      Rarity: 1,
      id: 'f-19'
    },
    {
      Name: 'Faux-filet',
      Heal: 10,
      Effect: '–',
      Radiation: '–',
      Weight: '0,5',
      Cost: 40,
      Rarity: 2,
      id: 'f-20'
    },
    {
      Name: 'Filet de darillon',
      Heal: 11,
      Effect: "Vous pouvez relancer 1d20 sur tous vos tests de PER jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 35,
      Rarity: 2,
      id: 'f-21'
    },
    {
      Name: 'Fruit mutant',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: '0',
      id: 'f-22'
    },
    {
      Name: 'Goudrelle',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 5,
      Rarity: 3,
      id: 'f-23'
    },
    {
      Name: 'Haricot envasé',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 6,
      Rarity: 1,
      id: 'f-24'
    },
    {
      Name: 'Macaronis Blamco',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 10,
      Rarity: 1,
      id: 'f-25'
    },
    {
      Name: 'Melon',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 6,
      Rarity: 1,
      id: 'f-26'
    },
    {
      Name: 'Mouche bouffie grillée',
      Heal: 6,
      Effect: '+2 résistance aux dégâts de radiation jusqu’à la fin de la prochaine scène',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 15,
      Rarity: 1,
      id: 'f-27'
    },
    {
      Name: "Œuf d'écorcheur",
      Heal: 7,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 69,
      Rarity: 3,
      id: 'f-28'
    },
    {
      Name: 'Œuf de fangeux',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 0,
      Rarity: 2,
      id: 'f-29'
    },
    {
      Name: 'Œuf de radscorpion',
      Heal: 6,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 48,
      Rarity: 3,
      id: 'f-30'
    },
    {
      Name: 'Œufs mimosas Miam-Miam',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 20,
      Rarity: '0',
      id: 'f-31'
    },
    {
      Name: "Omelette d'œufs d'écorcheur",
      Heal: 11,
      Effect: 'Si la prochaine scène est un combat, vous regagnez 1 PV au début de chaque tour',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 80,
      Rarity: 4,
      id: 'f-32'
    },
    {
      Name: "Omelette d'œufs de fangeux",
      Heal: 7,
      Effect: 'Ajoutez immédiatement 2 PA à la réserve du groupe',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 30,
      Rarity: 3,
      id: 'f-33'
    },
    {
      Name: "Omelette d'œufs de radscorpion",
      Heal: 9,
      Effect: 'Soigne toutes les dépendances',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 65,
      Rarity: 4,
      id: 'f-34'
    },
    {
      Name: "Pack de nourriture de l'Institut",
      Heal: 5,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 10,
      Rarity: 2,
      id: 'f-35'
    },
    {
      Name: 'Pain brioché',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 9,
      Rarity: 1,
      id: 'f-36'
    },
    {
      Name: 'Pâte comestible',
      Heal: 7,
      Effect: "Vous pouvez relancer 1d20 sur tous vos tests d'END jusqu'à la fin de la scène",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 0,
      Rarity: 2,
      id: 'f-37'
    },
    {
      Name: 'Pâté de fangeux',
      Heal: 12,
      Effect: "Vous pouvez respirer sous l'eau jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 35,
      Rarity: 3,
      id: 'f-38'
    },
    {
      Name: 'Pâtée pour chien',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 6,
      Rarity: '0',
      id: 'f-39'
    },
    {
      Name: 'Pomate',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 7,
      Rarity: 1,
      id: 'f-40'
    },
    {
      Name: 'Pommes Dandy Boy',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 7,
      Rarity: '0',
      id: 'f-41'
    },
    {
      Name: 'Porc aux haricots',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 10,
      Rarity: '0',
      id: 'f-42'
    },
    {
      Name: 'Purée-minute',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 20,
      Rarity: '0',
      id: 'f-43'
    },
    {
      Name: 'Radcafard grillé',
      Heal: 5,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 7,
      Rarity: 1,
      id: 'f-44'
    },
    {
      Name: 'Radcerf grillé',
      Heal: 11,
      Effect: "Votre charge maximale augmente de +12,5 jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 60,
      Rarity: 2,
      id: 'f-45'
    },
    {
      Name: "Ragoût d'écureuil",
      Heal: 10,
      Effect: '–',
      Radiation: '–',
      Weight: '0,5',
      Cost: 24,
      Rarity: 2,
      id: 'f-46'
    },
    {
      Name: 'Ragoût de radcerf',
      Heal: 12,
      Effect: "+3 résistance aux dégâts énergétiques jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 60,
      Rarity: 3,
      id: 'f-47'
    },
    {
      Name: "Ragoût d'iguane",
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: 1,
      id: 'f-48'
    },
    {
      Name: 'Rôti de yao guai',
      Heal: 14,
      Effect: "+2 aux attaques de corps à corps jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 110,
      Rarity: 4,
      id: 'f-49'
    },
    {
      Name: 'Soupe de légumes',
      Heal: 7,
      Effect: "+2 résistance aux dégâts de radiation jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 13,
      Rarity: 2,
      id: 'f-50'
    },
    {
      Name: "Soupe d'iguane",
      Heal: 10,
      Effect: '–',
      Radiation: '–',
      Weight: '0,5',
      Cost: 21,
      Rarity: 3,
      id: 'f-51'
    },
    {
      Name: "Steak d'écorcheur",
      Heal: 14,
      Effect: "Vous pouvez relancer 1d20 sur tous vos tests de FOR jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 130,
      Rarity: 4,
      id: 'f-52'
    },
    {
      Name: 'Steak de radscorpion',
      Heal: 12,
      Effect: "+2 résistance aux dégâts énergétiques jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 65,
      Rarity: 3,
      id: 'f-53'
    },
    {
      Name: 'Steak de rataupe',
      Heal: 7,
      Effect: "+1 PA max dans la réserve du groupe jusqu'à la fin de la scène en cours",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 8,
      Rarity: 1,
      id: 'f-54'
    },
    {
      Name: 'Steak de reine des fangeux',
      Heal: 14,
      Effect: "Réduit de 1 la difficulté de tous les tests d'END jusqu'à la fin de la prochaine scène",
      Radiation: '–',
      Weight: '0,5',
      Cost: 130,
      Rarity: 5,
      id: 'f-55'
    },
    {
      Name: 'Steak de tique',
      Heal: 10,
      Effect: "+3 PV max jusqu'à la fin de la scène suivante",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 18,
      Rarity: 2,
      id: 'f-56'
    },
    {
      Name: 'Steak Salisbury',
      Heal: 5,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 20,
      Rarity: '0',
      id: 'f-57'
    },
    {
      Name: 'Tarte parfaitement conservée',
      Heal: 5,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 20,
      Rarity: 3,
      id: 'f-58'
    },
    {
      Name: 'Viande de brahmine',
      Heal: 3,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 28,
      Rarity: 1,
      id: 'f-59'
    },
    {
      Name: 'Viande de chien errant',
      Heal: 4,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: '0',
      id: 'f-60'
    },
    {
      Name: 'Viande de darillon',
      Heal: 8,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 30,
      Rarity: 1,
      id: 'f-61'
    },
    {
      Name: "Viande d'écorcheur",
      Heal: 9,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 110,
      Rarity: 3,
      id: 'f-62'
    },
    {
      Name: 'Viande de fangeux',
      Heal: 6,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 18,
      Rarity: 1,
      id: 'f-63'
    },
    {
      Name: 'Viande de fangeux à carapace molle',
      Heal: 6,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 22,
      Rarity: 2,
      id: 'f-64'
    },
    {
      Name: 'Viande de fangeux grillée',
      Heal: 9,
      Effect: 'Vous gagnez +1 PA au début de la prochaine scène',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 40,
      Rarity: 3,
      id: 'f-65'
    },
    {
      Name: 'Viande de fangeux rôtie',
      Heal: 8,
      Effect: 'Vous gagnez +1 PA au début de la prochaine scène',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 40,
      Rarity: 2,
      id: 'f-66'
    },
    {
      Name: 'Viande de molosse mutant',
      Heal: 5,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: 2,
      id: 'f-67'
    },
    {
      Name: 'Viande de mouche bouffie',
      Heal: 2,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: '0',
      id: 'f-68'
    },
    {
      Name: 'Viande de radcerf',
      Heal: 8,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 50,
      Rarity: 1,
      id: 'f-69'
    },
    {
      Name: 'Viande de radscorpion',
      Heal: 9,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 55,
      Rarity: 2,
      id: 'f-70'
    },
    {
      Name: 'Viande de rataupe',
      Heal: 5,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 5,
      Rarity: '0',
      id: 'f-71'
    },
    {
      Name: 'Viande de reine des fangeux',
      Heal: 10,
      Effect: "Vous pouvez relancer 1d20 sur tous les tests d'END jusqu'à la fin de la prochaine scène",
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 22,
      Rarity: 4,
      id: 'f-72'
    },
    {
      Name: 'Viande de tique',
      Heal: 7,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 8,
      Rarity: 1,
      id: 'f-73'
    },
    {
      Name: 'Viande de yao guai',
      Heal: 9,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 85,
      Rarity: 3,
      id: 'f-74'
    },
    {
      Name: 'Viande en boîte',
      Heal: 6,
      Effect: 'Lancez 2 au lieu de 1 pour déterminer les dégâts de radiation quand consommé',
      Radiation: '2 $CD$',
      Weight: '0,5',
      Cost: 25,
      Rarity: '0',
      id: 'f-75'
    }
  ]

