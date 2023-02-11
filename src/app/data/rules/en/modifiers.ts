import {DataTableDefinition} from "../../generic-data-lang";

//TODO: Translate me !
export const MODIFIERS_TYPE_EN: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Description',
  label: 'Description'
}]

export const MODIFIERS_EN = [
  {
    "Name": "Combat rapproché",
    "Description": "Une arme de combat rapproché\n" +
      "est facile à utiliser à proximité de l’ennemi et ne subit\n" +
      "pas d’augmentation de difficulté si elle est employée\n" +
      "quand un ennemi est à portée de main",
  },
  {
    "Name": "Deux mains",
    "Description": "Une arme à Deux mains doit être maniée\n" +
      "à deux mains pour être utilisée efficacement ; tenter\n" +
      "d’attaquer avec une arme à Deux mains dans une seule\n" +
      "main augmente la difficulté de +2.",
  },
  {
    "Name": "Dissimulé",
    "Description": "Une arme avec la qualité Dissimulé est\n" +
      "petite ou facile à dissimuler sur vous pour une autre\n" +
      "raison. Les ennemis ne voient l’arme que si vous êtes\n" +
      "en train de la manier, ou s’ils vous fouillent méthodi-\n" +
      "quement et réussissent un test de PER + Survie avec\n" +
      "une difficulté de 2.",
  },
  {
    "Name": "Fiable",
    "Description": "Pendant chaque rencontre de combat, une\n" +
      "arme Fiable ignore la première complication que vous\n" +
      "obtenez sur un test pour utiliser cette arme. Une arme\n" +
      "ne peut pas être à la fois Fiable et Imprévisible",
  },
  {
    "Name": "Gatling",
    "Description": "Les armes Gatling dépensent des munitions à\n" +
      "10 fois le rythme normal ; quand vous devriez dépenser\n" +
      "1 munition, une arme Gatling en dépense une rafale\n" +
      "de 10 à la place. Chaque fois que vous dépensez des\n" +
      "munitions pour augmenter les dégâts de cette arme,\n" +
      "ajoutez +2 $CD$ par rafale de 10 (jusqu’à un nombre\n" +
      "maximum de rafales égal à la cadence de tir de l’arme)\n" +
      "au lieu de +1 $CD$ par tir.",
  },
  {
    "Name": "Imprécis",
    "Description": "Quand vous portez une attaque avec une\n" +
      "arme Imprécise, vous ne pouvez pas gagner les béné-\n" +
      "fices de l’action mineure viser. Une arme ne peut pas\n" +
      "être à la fois Précise et Imprécise.",
  },
  {
    "Name": "Imprévisible",
    "Description": "Quand vous portez une attaque avec\n" +
      "une arme Imprévisible, augmentez la marge de com-\n" +
      "plication de l’attaque de 1. Une arme ne peut pas être\n" +
      "à la fois Fiable et Imprévisible.",
  },
  {
    "Name": "Invalidant",
    "Description": "La difficulté de tout test de compétence\n" +
      "pour guérir les blessures infligées par une arme\n" +
      "Invalidante augmente de +1",
  },
  {
    "Name": "Lancer",
    "Description": "Une arme de Lancer (C) peut être projetée en\n" +
      "portant une attaque à distance avec une portée opti-\n" +
      "male courte. Une arme de Lancer (M) peut être projetée\n" +
      "en portant une attaque à distance avec une portée opti-\n" +
      "male moyenne. Vous faites un test d’AGI + Projectiles\n" +
      "pour attaquer avec l’arme, selon le type d’arme",
  },
  {
    "Name": "Mine",
    "Description": "Quand une Mine est placée sur une surface et\n" +
      "armée, elle devient un objet dangereux qui inflige ses\n" +
      "dégâts à quiconque arrive à portée de main de l’engin\n" +
      "(et à des personnages supplémentaires si elle possède\n" +
      "la qualité Zone d’impact)",
  },
  {
    "Name": "Parade",
    "Description": "Quand un ennemi tente une attaque de corps à\n" +
      "corps contre vous, si vous maniez une arme de Parade,\n" +
      "vous pouvez dépenser 1 PA pour ajouter +1 à votre\n" +
      "Défense contre cette attaque.",
  },
  {
    "Name": "Précis",
    "Description": "Si vous effectuez l’action mineure viser avant\n" +
      "d’attaquer avec une arme Précise, vous pouvez dépen-\n" +
      "ser jusqu’à 3 PA pour ajouter +1 $CD$ par PA dépensé aux\n" +
      "dégâts de l’attaque. Si vous gagnez des dégâts de cette\n" +
      "manière, vous ne pouvez pas dépenser de munitions\n" +
      "pour gagner des dégâts supplémentaires. Une arme ne\n" +
      "peut pas être à la fois Précise et Imprécise.",
  },
  {
    "Name": "Reco",
    "Description": "Quand vous visez avec une arme de Reco, vous\n" +
      "pouvez marquer la cible que vous avez visée. Le pro-\n" +
      "chain allié qui attaque cette cible peut relancer un\n" +
      "d20 sur son attaque",
  },
  {
    "Name": "Silencieux",
    "Description": "Si un ennemi n’a pas conscience de\n" +
      "votre présence quand vous attaquez avec une arme\n" +
      "Silencieuse, il ne remarque l’attaque que s’il en est la\n" +
      "cible ou s’il réussit un test de PER + Survie avec une\n" +
      "difficulté de 2",
  },
  {
    "Name": "Vision nocturne",
    "Description": "Le viseur d’une arme à Vision noc-\n" +
      "turne est conçu pour vous permettre de voir plus clai-\n" +
      "rement dans l’obscurité. Quand vous visez avec une\n" +
      "arme à Vision nocturne, votre attaque ignore toute\n" +
      "augmentation de difficulté causée par l’obscurité",
  },
  {
    "Name": "Zone d'impact",
    "Description": "quand vous portez une attaque avec\n" +
      "une arme à Zone d’impact, vous ne prenez pas pour\n" +
      "cible un seul adversaire. Au lieu de cela, choisissez\n" +
      "une seule zone dans votre champ de vision et faites\n" +
      "le test de compétence approprié pour attaquer, avec\n" +
      "une difficulté de base de 2 (ajustée par la portée nor-\n" +
      "malement). Si vous réussissez, toutes les créatures (et autres cibles pouvant subir des dégâts) présentes dans\n" +
      "la zone subissent les dégâts de l’arme. Si vous échouez,\n" +
      "votre attaque mal ciblée est moins efficace : ne lancez\n" +
      "que la moitié des $CD$ de l’arme pour déterminer les\n" +
      "dégâts infligés aux créatures dans la zone ciblée et\n" +
      "ignorez les effets de dégâts normaux de l’arme.",
  }


];
