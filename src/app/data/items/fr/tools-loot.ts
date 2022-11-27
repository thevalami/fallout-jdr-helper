import {DataTableDefinition} from "../../generic-data-lang";

export const TOOLS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Effect',
  label: 'Effet'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}]

export const TOOLS_LOOT_DATA_FR = [
  {
    "Name": "Boîte à outils de luxe",
    "Effect": "Réduit de 1 la difficulté des tests de Réparation (0 minimum), vous pouvez tenter des tests de Réparation qui nécessitent normalement un établi ou quelque chose de similaire avec +1 à la difficulté",
    "Weight": 10,
    "Cost": 150,
    "Rarity": 3
  },
  {
    "Name": "Brahmine de bât",
    "Effect": "Une vache mutante qui transporte de lourdes charges et produit du lait et de l'engrais",
    "Weight": "–",
    "Cost": 200,
    "Rarity": 3
  },
  {
    "Name": "Compteur Geiger",
    "Effect": "Permet d'effectuer un test de PER +  survie, difficulté 1, pour déterminer si une zone est irradiée et à quel point",
    "Weight": 4,
    "Cost": 325,
    "Rarity": 3
  },
  {
    "Name": "Épingle à cheveux",
    "Effect": "Réduit de 1 la difficulté des tests de Crochetage (1 minimum), 1 épingle à cheveux se brise par complication obtenue",
    "Weight": "<0,5",
    "Cost": 1,
    "Rarity": "0"
  },
  {
    "Name": "Fusée de détresse",
    "Effect": "Génère une lumière vive à portée courte jusqu'à la fin de la scène actuelle. À usage unique.",
    "Weight": "<0,5",
    "Cost": 10,
    "Rarity": 1
  },
  {
    "Name": "Holoplaques",
    "Effect": "Identifient le défunt",
    "Weight": "<0,5",
    "Cost": 5,
    "Rarity": 2
  },
  {
    "Name": "Kit de serrurier",
    "Effect": "Réduit de 1 la difficulté des tests de Crochetage (0 minimum), après 3 complications, le kit se brise",
    "Weight": 1,
    "Cost": 150,
    "Rarity": 2
  },
  {
    "Name": "Lampe de poche",
    "Effect": "Génère une lumière vive dans une seule zone à portée moyenne, l'utilisateur peut choisir quelle zone est éclairée",
    "Weight": 1,
    "Cost": 100,
    "Rarity": 3
  },
  {
    "Name": "Lanterne",
    "Effect": "Génère une lumière vive à portée courte et une lumière faible à portée moyenne",
    "Weight": "1,5",
    "Cost": 15,
    "Rarity": 2
  },
  {
    "Name": "Lecteur d'holobande",
    "Effect": "Permet de lire les holobandes audio",
    "Weight": "1,5",
    "Cost": 250,
    "Rarity": 2
  },
  {
    "Name": "Multioutil",
    "Effect": "Réduit de 1 la difficulté des tests de Réparation (0 minimum)",
    "Weight": "0,5",
    "Cost": 100,
    "Rarity": 2
  },
  {
    "Name": "Outil de crochetage électronique",
    "Effect": "Réduit de 2 la difficulté des tests de Crochetage (0 minimum), ignorez la première complication obtenue, le crochet électronique se brise si vous obtenez deux complications ou plus sur le même jet",
    "Weight": 2,
    "Cost": 375,
    "Rarity": 4
  },
  {
    "Name": "Pip-Boy",
    "Effect": "Journal personnel, Boussole, Radio, Compteur Geiger, Lampe de poche. Le système V.A.T.S. permet d'ignorer l'augmentation de difficulté normale si on cible une localisation spécifique pendant une attaque",
    "Weight": "–",
    "Cost": "–",
    "Rarity": "–"
  },
  {
    "Name": "Radio",
    "Effect": "Capte et diffuse les transmissions radio",
    "Weight": 1,
    "Cost": 75,
    "Rarity": 2
  },
  {
    "Name": "Sac à dos, grand",
    "Effect": "Le porteur ajoute +5 fois sa FOR à sa charge maximale",
    "Weight": "–",
    "Cost": 60,
    "Rarity": 2
  },
  {
    "Name": "Sac à dos, petit",
    "Effect": "Le porteur ajoute +2,5 fois sa FOR à sa charge maximale",
    "Weight": "–",
    "Cost": 30,
    "Rarity": 1
  },
  {
    "Name": "Torche",
    "Effect": "Génère une lumière vive à portée courte jusqu'à la fin de la scène actuelle, l'allumer nécessite un test d'INT + Survie difficulté 1, +1 pour chaque utilisation antérieure",
    "Weight": "0,5",
    "Cost": 10,
    "Rarity": 1
  },
  {
    "Name": "Trousse de médecin",
    "Effect": "Réduit de 1 la difficulté des tests de Médecine (0 minimum), quand vous prodiguez des soins sur le long terme, vous pouvez prendre en charge jusqu'à 2 patients supplémentaires",
    "Weight": 5,
    "Cost": 300,
    "Rarity": 3
  },
  {
    "Name": "Trousse de premiers secours",
    "Effect": "Guérit +2 PV quand vous réussissez l'action porter secours",
    "Weight": 2,
    "Cost": 200,
    "Rarity": 2
  },
  {
    "Name": "Stealth Boy",
    "Effect": "Action mineure : invisibilité pendant 3 tours (+2 difficulté pour être repéré, défense +2)",
    "Weight": "0.5",
    "Cost": 100,
    "Rarity": 3
  },
  {
    "Name": "Kit de réparation de robots",
    "Effect": "Rends 4PV à un robot ou une armure assistée, ou soigne une blessure. Peut aussi être utiliser pour porter secours, en plus des soins de base.",
    "Weight": "<0.5>",
    "Cost": 48,
    "Rarity": 2
  },
  {
    "Name": "Diffuseur de stimpak",
    "Effect": "Action mineure : consomme un Super Stimpak pour rendre 4PV à tous les non-robots à portée courte",
    "Weight": "0.5",
    "Cost": 100,
    "Rarity": 5
  },
  {
    "Name": "Livres et magazines",
    "Effect": "Varie selon le tome/édition",
    "Weight": "<0.5",
    "Cost": 100,
    "Rarity": 3
  }
]
