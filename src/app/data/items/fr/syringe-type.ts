import {DataTableDefinition} from "../../generic-data-lang";

export const SYRINGE_TYPE_DEF_FR: DataTableDefinition[] = [
  {
    column: "Name",
    label: "Nom"
  }, {
    column: "Effect",
    label: "Effet"
  }, {
    column: "Cost",
    label: "Prix"
  }
];

export const SYRINGE_LOOT_DATA_FR = [
    {
      Name: 'Artibloc',
      Effect: "L'arme gagne l'effet de dégâts Étourdissant.",
      Cost: 40,
      id: 's-1'
    },
    {
      Name: 'Dangerol',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, la résistance\n" +
        'aux dégâts balistiques de la cible est réduite de 2 pour le reste de la scène. ',
      Cost: 60,
      id: 's-2'
    },
    {
      Name: 'Embrumaze',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, la cible\n" +
        'devient confuse et la difficulté de tous ses tests de PER augmente de +2 pendant\n' +
        "un nombre de rounds égal au nombre d'Effets obtenus.",
      Cost: 73,
      id: 's-3'
    },
    {
      Name: 'Escampoudréine',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, la cible doit\n" +
        "utiliser au moins une de ses actions à chaque tour pour s'éloigner de tous les\n" +
        'ennemis par la route la plus directe. Cet effet dure pendant un nombre de rounds\n' +
        "égal au nombre d'Effets obtenus.",
      Cost: 55,
      id: 's-4'
    },
    {
      Name: 'Folie furieuse',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, la cible\n" +
        'entre dans une frénésie de folie furieuse et attaque la créature vivante la plus\n' +
        'proche (amie ou ennemie) pendant le reste de la scène.',
      Cost: 50,
      id: 's-5'
    },
    {
      Name: 'Hémorragie',
      Effect: "L'arme gagne l'effet de dégâts Persistant.",
      Cost: 17,
      id: 's-6'
    },
    {
      Name: 'Larve de mouche bouffie',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, à la mort de\n" +
        'la cible, une mouche bouffie émerge de son cadavre.',
      Cost: 10,
      id: 's-7'
    },
    {
      Name: 'Pax',
      Effect: "Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l'arme, la cible ne\n" +
        "peut pas effectuer d'action hostile ou agressive pendant un nombre de rounds\n" +
        "égal au nombre d'Effets obtenus.",
      Cost: 39,
      id: 's-8'
    },
    {
      Name: 'Venin de Radscorpion',
      Effect: "L'arme ajoute +1 $CD$ à ses dégâts et gagne l'effet de dégâts Persistant (Poison).",
      Cost: 65,
      id: 's-9'
    }
  ]
;
