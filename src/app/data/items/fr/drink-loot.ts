import {DataTableDefinition} from "../../generic-data-lang";

export const DRINK_LOOT_DEF_FR: DataTableDefinition[] = [
  {
    column: "Name",
    label: "Nom"
  }, {
    column: "Heal",
    label: "PV soignés"
  }, {
    column: "Effect",
    label: "Effet"
  }, {
    column: "Radiation",
    label: "Irradié?"
  }, {
    column: "Weight",
    label: "Poids"
  }, {
    column: "Cost",
    label: "Coût"
  }, {
    column: "Rarity",
    label: "Rareté"
  }
];

export const DRINK_LOOT_DATA_FR =
  [
    {
      Name: 'Bière',
      Heal: 0,
      Effect: 'Alcoolisée',
      Radiation: '–',
      Weight: '0,5',
      Cost: 5,
      Rarity: 1,
      id: 1
    },
    {
      Name: 'Boisson rafraîchissante',
      Heal: 11,
      Effect: 'Guérit 10 points de dégâts de radiation, soigne toutes les dépendances',
      Radiation: '–',
      Weight: '0,5',
      Cost: 110,
      Rarity: 5,
      id: 2
    },
    {
      Name: 'Bourbon',
      Heal: 0,
      Effect: "Alcoolisée, vous pouvez relancer 1d20 sur vos tests d'END",
      Radiation: '–',
      Weight: '0,5',
      Cost: 7,
      Rarity: 2,
      id: 3
    },
    {
      Name: 'Eau-de-vie',
      Heal: 0,
      Effect: 'Alcoolisée, +2 PV max',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 30,
      Rarity: 3,
      id: 4
    },
    {
      Name: 'Eau purifiée',
      Heal: 3,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 20,
      Rarity: 1,
      id: 5
    },
    {
      Name: 'Eau sale',
      Heal: 2,
      Effect: '–',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 5,
      Rarity: '0',
      id: 6
    },
    {
      Name: 'Gnôle des Terres désolées',
      Heal: 0,
      Effect: "Alcoolisée, réduisez de 1 la difficulté de tous vos tests de FOR et augmentez de 2 (au total) la difficulté de tous vos tests d'INT",
      Radiation: '–',
      Weight: '0,5',
      Cost: 10,
      Rarity: 3,
      id: 7
    },
    {
      Name: 'Jus de fruit mutant',
      Heal: 3,
      Effect: "Vous pouvez relancer 1d20 sur tous vos tests d'AGI",
      Radiation: '–',
      Weight: '<0,5',
      Cost: 8,
      Rarity: 2,
      id: 8
    },
    {
      Name: 'Jus de goudrelle',
      Heal: 3,
      Effect: 'Gagnez immédiatement +6 PA',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 5,
      Rarity: 4,
      id: 9
    },
    {
      Name: 'Jus de melon',
      Heal: 3,
      Effect: 'Vous guérissez 1 PV au début de chaque tour',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 6,
      Rarity: 2,
      id: 10
    },
    {
      Name: 'Jus de pomate',
      Heal: 3,
      Effect: 'La réserve de PA du groupe peut contenir 1 PA de plus que la normale',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 7,
      Rarity: 3,
      id: 11
    },
    {
      Name: 'Lait de brahmine',
      Heal: 1,
      Effect: 'Guérit 2 points de dégâts de radiation',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 15,
      Rarity: 2,
      id: 12
    },
    {
      Name: 'Nuka Cherry',
      Heal: 3,
      Effect: 'Gagnez immédiatement +2 PA',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 40,
      Rarity: 3,
      id: 13
    },
    {
      Name: 'Nuka Cola',
      Heal: 2,
      Effect: 'Gagnez immédiatement +1 PA',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 20,
      Rarity: 2,
      id: 14
    },
    {
      Name: 'Nuka Cola Quantum',
      Heal: 10,
      Effect: 'Gagnez immédiatement +5 PA',
      Radiation: '1 $CD$',
      Weight: '0,5',
      Cost: 50,
      Rarity: 5,
      id: 15
    },
    {
      Name: 'Poche de sang',
      Heal: 3,
      Effect: '–',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 10,
      Rarity: 2,
      id: 16
    },
    {
      Name: 'Poche de sang luminescent',
      Heal: 4,
      Effect: '+5 résistance aux dégâts de radiation',
      Radiation: '–',
      Weight: '<0,5',
      Cost: 30,
      Rarity: 3,
      id: 17
    },
    {
      Name: 'Rhum',
      Heal: 0,
      Effect: "Alcoolisée, vous pouvez relancer 1d20 sur vos tests d'AGI",
      Radiation: '–',
      Weight: '0,5',
      Cost: 8,
      Rarity: 2,
      id: 18
    },
    {
      Name: 'Sang irradié',
      Heal: 3,
      Effect: 'Lancez 2 $CD$ au lieu de 1 pour déterminer les dégâts de radiation quand consommé',
      Radiation: '1 $CD$',
      Weight: '<0,5',
      Cost: 50,
      Rarity: 2,
      id: 19
    },
    {
      Name: 'Vin',
      Heal: 0,
      Effect: 'Alcoolisée, gagnez immédiatement +1 PA',
      Radiation: '–',
      Weight: '0,5',
      Cost: 5,
      Rarity: 3,
      id: 20
    },
    {
      Name: 'Vodka',
      Heal: 2,
      Effect: 'Alcoolisée',
      Radiation: '–',
      Weight: '0,5',
      Cost: 5,
      Rarity: 3,
      id: 21
    },
    {
      Name: 'Whisky',
      Heal: 0,
      Effect: "Alcoolisée, vous pouvez relancer jusqu'à 2d20 (au total) sur vos tests de FOR",
      Radiation: '–',
      Weight: '0,5',
      Cost: 5,
      Rarity: 3,
      id: 22
    }
  ];
