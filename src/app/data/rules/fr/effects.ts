import {DataTableDefinition} from "../../generic-data-lang";

export const EFFECT_TYPE_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Effect',
  label: 'Effet'
}]

export const EFFECTS_FR = [
  {
    "Name": "Brutal",
    "Effect": "Pour chaque Effet obtenu, l’attaque inflige +1 point de dégâts",
  },
  {
    "Name": "Destructeur",
    "Effect": "pour chaque Effet obtenu, réduisez de 1 le nombre de $CD$ que l’abri de la cible confère à cette dernière, et ce, de manière permanente. Si la cible ne\n" +
      "bénéficie d’aucun abri, réduisez de 1 la RD (du type de dégâts de l’arme) de la localisation touchée. Par exemple, des dégâts balistiques ne réduisent que la RD balistiques.",
  },
  {
    "Name": "De zone",
    "Effect": "Pour chaque Effet obtenu, votre attaque touche une fois de plus votre cible. Chaque coup supplémentaire inflige la moitié des dégâts initiaux\n" +
      "(arrondis à l’inférieur) et touche une localisation aléatoire, même si vous visiez une localisation précise",
  },
  {
    "Name": "En rafale",
    "Effect": "Pour chaque Effet obtenu, l’attaque touche une cible supplémentaire, située à portée courte ou inférieure de la cible initiale. Pour chaque cible supplémentaire, vous devez dépenser une munition de\n" +
      "votre arme.",
  },
  {
    "Name": "Etourdissant",
    "Effect": "Si vous obtenez au moins un Effet, la cible perd ses actions à son prochain tour. Une créature ou un personnage étourdi peut toujours dépenser des PA pour obtenir des actions supplémentaires,\n" +
      "comme d’habitude.",
  },
  {
    "Name": "Perforant X",
    "Effect": "Pour chaque Effet obtenu, ignorez X points de RD, X étant la valeur de cet effet de dégâts.",
  },
  {
    "Name": "Persistant",
    "Effect": "Si vous obtenez au moins un Effet, la cible subit à nouveau les dégâts de l’arme à la fin de son prochain tour et des suivants. L’effet persiste un nombre\n" +
      "de rounds égal au nombre d’Effets obtenus. La cible peut consacrer une action capitale à un test destiné à arrêter prématurément ces dégâts persistants. La difficulté de ce test est égale au nombre d’Effets obtenus et\n" +
      "le MJ choisit la combinaison d’attribut + compétence. Certaines armes à effet persistant peuvent infliger des dégâts initiaux et persistants différents. Dans ce cas, le\n" +
      "type de dégâts persistants est indiqué en parenthèses, par exemple Persistant (Poison).",
  },
  {
    "Name": "Radioactif",
    "Effect": "Pour chaque Effet obtenu, la cible subit 1 point de dégâts de radiation en plus des autres dégâts infligés. Ces dégâts de radiation sont additionnés et\n" +
      "appliqués après que la cible a subi les dégâts normaux de l’attaque.",
  },
];
