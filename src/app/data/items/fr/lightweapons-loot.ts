import {DataTableDefinition} from "../../generic-data-lang";

export const LIGHTWEAPONS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Damage',
  label: 'Degâts'
}, {
  column: 'Effect',
  label: 'Effet'
}, {
  column: 'Type',
  label: 'Type'
}, {
  column: 'Rate',
  label: 'Cadence'
}, {
  column: 'Range',
  label: 'Portée'
}, {
  column: 'Bonus',
  label: 'Bonus'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}, {
  column: 'Munitions',
  label: 'Munitions'
}]

export const LIGHTWEAPONS_LOOT_DATA_FR = [
  {
    Name: 'Pistolet .44',
    Damage: '6 $CD$',
    Effect: 'Brutal',
    Type: 'Balistiques',
    Rate: 1,
    Range: 'C',
    Bonus: 'Combat rapproché',
    Weight: 2,
    Cost: 99,
    Rarity: 2,
    Munitions: 'Cartouches .44',
    id: 'l-1'
  },
  {
    Name: 'Pistolet 10mm',
    Damage: '4 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 2,
    Range: 'C',
    Bonus: 'Combat rapproché,Fiable',
    Weight: 2,
    Cost: 50,
    Rarity: 1,
    Munitions: 'Cartouches 10mm',
    id: 'l-2'
  },
  {
    Name: 'Pistolet lance-fusées',
    Damage: '3 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 0,
    Range: 'M',
    Bonus: 'Fiable',
    Weight: 1,
    Cost: 50,
    Rarity: 1,
    Munitions: 'Fusées éclairantes',
    id: 'l-3'
  },
  {
    Name: "Fusil d'assaut",
    Damage: '5 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 2,
    Range: 'M',
    Bonus: 'Deux mains',
    Weight: '6,5',
    Cost: 144,
    Rarity: 2,
    Munitions: 'Cartouches 5,56mm',
    id: 'l-4'
  },
  {
    Name: 'Carabine de combat',
    Damage: '5 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 2,
    Range: 'M',
    Bonus: 'Deux mains',
    Weight: '5,5',
    Cost: 117,
    Rarity: 2,
    Munitions: 'Cartouches .45',
    id: 'l-5'
  },
  {
    Name: 'Fusil de Gauss',
    Damage: '10 $CD$',
    Effect: 'Perforant 1',
    Type: 'Balistiques',
    Rate: 1,
    Range: 'L',
    Bonus: 'Deux mains',
    Weight: 8,
    Cost: 228,
    Rarity: 4,
    Munitions: 'CE 2mm',
    id: 'l-6'
  },
  {
    Name: 'Fusil de chasse',
    Damage: '6 $CD$',
    Effect: 'Perforant 1',
    Type: 'Balistiques',
    Rate: 0,
    Range: 'M',
    Bonus: 'Deux mains',
    Weight: 5,
    Cost: 55,
    Rarity: 2,
    Munitions: 'Cartouches .308',
    id: 'l-7'
  },
  {
    Name: 'Mitraillette',
    Damage: '3 $CD$',
    Effect: 'En rafale',
    Type: 'Balistiques',
    Rate: 3,
    Range: 'C',
    Bonus: 'Deux mains,Imprécis',
    Weight: 6,
    Cost: 109,
    Rarity: 1,
    Munitions: 'Cartouches .45',
    id: 'l-8'
  },
  {
    Name: 'Fusil de combat',
    Damage: '5 $CD$',
    Effect: 'De zone',
    Type: 'Balistiques',
    Rate: 2,
    Range: 'C',
    Bonus: 'Deux mains, Imprécis',
    Weight: '5,5',
    Cost: 87,
    Rarity: 2,
    Munitions: 'Calibre 12',
    id: 'l-9'
  },
  {
    Name: 'Fusil à double canon',
    Damage: '5 $CD$',
    Effect: 'Brutal, De zone',
    Type: 'Balistiques',
    Rate: 1,
    Range: 'C',
    Bonus: 'Deux mains, Imprécis',
    Weight: '4,5',
    Cost: 39,
    Rarity: 1,
    Munitions: 'Calibre 12',
    id: 'l-10'
  },
  {
    Name: 'Arme à verrou de fortune',
    Damage: '5 $CD$',
    Effect: 'Perforant 1',
    Type: 'Balistiques',
    Rate: 0,
    Range: 'C',
    Bonus: 'Imprévisible',
    Weight: '1,5',
    Cost: 30,
    Rarity: '0',
    Munitions: 'Cartouches .308',
    id: 'l-11'
  },
  {
    Name: 'Arme de fortune',
    Damage: '3 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 2,
    Range: 'C',
    Bonus: 'Combat rapproché, Imprévisible',
    Weight: 1,
    Cost: 30,
    Rarity: '0',
    Munitions: 'Cartouches .38',
    id: 'l-12'
  },
  {
    Name: 'Revolver de fortune',
    Damage: '4 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 1,
    Range: 'C',
    Bonus: 'Combat rapproché, Imprévisible',
    Weight: 2,
    Cost: 25,
    Rarity: '0',
    Munitions: 'Cartouches .45',
    id: 'l-13'
  },
  {
    Name: 'Fusil à clous',
    Damage: '10 $CD$',
    Effect: 'Destructeur',
    Type: 'Balistiques',
    Rate: 0,
    Range: 'M',
    Bonus: 'Deux mains, Imprévisible,Invalidant',
    Weight: 7,
    Cost: 290,
    Rarity: 4,
    Munitions: 'Clous de rail',
    id: 'l-14'
  },
  {
    Name: 'Pistolet à seringues',
    Damage: '3 $CD$',
    Effect: '–',
    Type: 'Balistiques',
    Rate: 0,
    Range: 'M',
    Bonus: 'Deux mains',
    Weight: 3,
    Cost: 132,
    Rarity: 2,
    Munitions: 'Seringues',
    id: 'l-15'
  }
]


