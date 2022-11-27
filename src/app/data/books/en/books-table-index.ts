//TODO: Translate me !

import {BOOK_ARMES_MUNITIONS_EN} from "./book-armes-munitions";
import {BOOK_GORGES_PENES_EN} from "./book-gorges-peness";
import {BOOK_GROGNAK_EN} from "./book-grognak";
import {BOOK_SURVIE_TERRES_DESOLEE_EN} from "./book-survie-terres-desolees";
import {BOOK_DORMIR_DEBOUT_EN} from "./book-dormir-debout";
import {BOOK_HOMMES_BOIS_EN} from "./book-homme-bois";
import {BOOK_INCREVABLE_EN} from "./book-increvables";
import {BOOK_MANUEL_ARMEE_USA_EN} from "./book-manuel-armee-usa";
import {BOOK_SCIENCE_TESLA_EN} from "./book-science-tesla";
import {BOOK_VIE_AMOUR_EN} from "./book-vie-amour";
import {BookType} from "../book-lang";

export const BOOK_TABLE_INDEX_EN: BookType[] = [
  {
    "Dice": 1,
    "Loot": "A couvert !",
    "Description": "Une seule fois, quand vous êtes touché par une arme à Zone d'Impact, vous pouvez choisir de tomber au sol. Dans ce cas, vous ajoutez +3 à toutes vos résistances aux dégâts contre les dégâts causés par cette arme à Zone d'Impact. Si vous apprenez cette aptitude plus tard, vous pouvez l'utiliser chaque fois que vous êtes touché par une arme à Zone d'Impact en dépensant 1 PA."
  },
  {
    "Dice": 2,
    "Loot": "Armes et Munitions",
    "Data": BOOK_ARMES_MUNITIONS_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez.",
  },
  {
    "Dice": 3,
    "Loot": "Faire des Rencontres",
    "Description": "Une seule fois, quand vous obtenez une ou plusieurs complications sur un test de Discours, vous pouvez ignorer ces complications. Si vous apprenez cette aptitude, vous pouvez l'appliquer une fois par scène."
  },
  {
    "Dice": 4,
    "Loot": "Fantômes en tous genres",
    "Description": "Quand vous réussissez un test de Discrétion pour éviter d'être repéré, vous pouvez dépenser 1 PA pour créer une diversion quelque part à portée moyenne ; si un personnage a perdu un test en opposition pour vous repérer, il se dirige vers la diversion que vous avez créée. Si vous apprenez cette aptitude, vous pouvez l'utiliser une fois par scène."
  },
  {
    "Dice": 5,
    "Loot": "Gorges et Pênes",
    "Data": BOOK_GORGES_PENES_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 6,
    "Loot": "Grognak le Barbare",
    "Data": BOOK_GROGNAK_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 7,
    "Loot": "Guide de Survie des Terres Désolées",
    "Data": BOOK_SURVIE_TERRES_DESOLEE_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 8,
    "Loot": "Histoires à Dormir Debout",
    "Data": BOOK_DORMIR_DEBOUT_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, vous conférant des dégâts bonus ou des points de résistance aux dégâts bonus contre un seul adversaire ou un seul type d'attaque. Ce bonus ne s'applique que pour une seule attaque (portée ou reçue, respectivement) sauf si vous apprenez l'aptitude, auquel cas elle s'applique à toutes les attaques. Lancer 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 9,
    "Loot": "L'avenir des Armes est à Vous",
    "Description": "Une seule fois, quand vous portez une attaque avec une arme à énergie, vous pouvez la surcharger. Augmentez les dégâts de +2D pour cette attaque. L'arme ne peut pas être utilisée pour porter une attaque durant le tour qui suit une attaque surchargée, car elle est en train de se refroidir. Si vous apprenez cette aptitude plus tard, vous pouvez surcharger une arme à énergie une fois par scène."
  },
  {
    "Dice": 10,
    "Loot": "L'Homme des Bois",
    "Data": BOOK_HOMMES_BOIS_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 11,
    "Loot": "La Boxe pour les Passionnés",
    "Description": "Une seule fois, quand vous réussissez une attaque avec la compétence Mains Nues, si vous dépensez des PA pour augmenter les dégâts que vous infliger, vous pouvez ajouter l'effet de dégâts Etourdissant à votre attaque. Si vous apprenez cette aptitude plus tard, vous pouvez l'utiliser lors de toute attaque réussie avec la compétence Mains Nues."
  },
  {
    "Dice": 12,
    "Loot": "Le Chirurgien du Massachusetts",
    "Description": "Une seule fois, quand vous prodiguez des soins médicaux à un autre personnage et que vous fournissez une assistance à son test d'END + Survie pour guérir des blessures, vous pouvez considérer que votre dé d'assistance a donné un résultat de 1. Si vous apprenez cette aptitude, vous pouvez l'appliquer une fois par partie."
  },
  {
    "Dice": 13,
    "Loot": "Le Petit Livre du Programmateur",
    "Description": "Une seule fois, quand vous ratez un test de Sciences pour pirater un terminal d'ordinateur et que votre accès devrait être bloqué (et donc que vous ne devriez pas pouvoir réessayer), vous pouvez décider que votre accès n'est pas bloqué, ce qui vous permet de faire une autre tentative. Si vous apprenez cette aptitude, vous pouvez l'appliquer chaque fois que votre accès à un ordinateur devrait être bloqué."
  },
  {
    "Dice": 14,
    "Loot": "Les Aventures d'un Vendeur de Viande Séchée de Junktown",
    "Description": "Une seule fois, quand vous réussissez ou ratez un test de Troc pour marchander le prix d'un échange, vous pouvez dépenser 1 point de Chance pour altérer le prix de 10% en votre faveur. Si vous apprenez cette aptitude, vous pouvez l'appliquer à n'importe quel test de Troc pour marchander, mais vous devez dépenser 1 point de Chance supplémentaire pour chaque utilisation après la première au cours d'une partie (donc 1 point de Chance pour la première fois, 2 pour la deuxième, 3 pour la troisième, etc.)."
  },
  {
    "Dice": 15,
    "Loot": "Les Increvables",
    "Data": BOOK_INCREVABLE_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente. Celle-ci vous permet de dépenser des points de Chance pour éviter certains dégâts et vous ne pouvez en bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez en bénéficier tant que vous avez des points de Chance à dépenser pour cela. Lancer 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 16,
    "Loot": "Manuel d'Opérations Secrètes de l'Armée Américaine",
    "Data": BOOK_MANUEL_ARMEE_USA_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 17,
    "Loot": "Réparer tout et N'importe Quoi",
    "Description": "Une seule fois, quand vous tentez de réparer un objet, réduisez de moitié la quantité de composants nécessaires pour effectuer la réparation (arrondi au supérieur). Si vous apprenez cette aptitude plus tard, vous pouvez l'utiliser chaque fois que vous tentez des réparations."
  },
  {
    "Dice": 18,
    "Loot": "Science Tesla",
    "Data": BOOK_SCIENCE_TESLA_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier qu'une seule fois. Si vous apprenez cette aptitude plus tard, vous pouvez utiliser ce bénéfice une fois par scène. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 19,
    "Loot": "Vie et Amour",
    "Data": BOOK_VIE_AMOUR_EN,
    "Description": "Selon le numéro du magazine trouvé, vous recevez une aptitude différente, dont vous ne pouvez bénéficier que pendant une seule scène. Si vous apprenez cette aptitude plus tard, vous pouvez en bénéficier de manière permanente. Lancez 1D20 pour déterminer quel numéro vous trouvez."
  },
  {
    "Dice": 20,
    "Loot": "Vraies Histoires de Police",
    "Description": "Une seule fois, quand vous faites le jet de dégâts d'une attaque, vous pouvez dépenser 1 point de Chance pour transformer jusqu'à 3D en n'importe quel résultat au lieu de les lancer. Si vous apprenez cette aptitude, vous pouvez l'appliquer une fois par scène."
  }
];
