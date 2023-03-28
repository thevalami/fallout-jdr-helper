import {DataTableDefinition} from "../../generic-data-lang";

export const EXPLOSIVES_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Damage',
  label: 'Degâts'
}, {
  column: 'Effect',
  label: 'Effet'
}, {
  column: 'DamageType',
  label: 'Type Degâts'
}, {
  column: 'Quality',
  label: 'Qualités'
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

export const EXPLOSIVES_LOOT_DATA_FR = [
  {
    Name: 'Cocktail Molotov',
    Damage: '4 $CD$',
    Effect: 'Persistant',
    DamageType: 'Energétiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '0,5',
    Cost: 20,
    Rarity: 1,
    id: 1
  },
  {
    Name: 'Grenade à fragmentation',
    Damage: '6 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '< 0,5',
    Cost: 50,
    Rarity: 2,
    id: 2
  },
  {
    Name: 'Grenade à impulsion',
    Damage: '6 $CD$',
    Effect: 'Etourdissant',
    DamageType: 'Energétiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '< 0,5',
    Cost: 100,
    Rarity: 3,
    id: 3
  },
  {
    Name: 'Grenade à plasma',
    Damage: '9 $CD$',
    Effect: '',
    DamageType: 'Energétiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '< 0,5',
    Cost: 135,
    Rarity: 3,
    id: 4
  },
  {
    Name: 'Grenade Nuka',
    Damage: '9 $CD$',
    Effect: 'Brutal, Destructeur, Radioactif',
    DamageType: 'Energétiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '0,5',
    Cost: 100,
    Rarity: 4,
    id: 5
  },
  {
    Name: 'Grenade ronde',
    Damage: '5 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: "Lancer ( M ), Zone d'impact",
    Weight: '0,5',
    Cost: 40,
    Rarity: 1,
    id: 6
  },
  {
    Name: 'Mine à capsules',
    Damage: '6 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: "Mine, Zone d'impact",
    Weight: '0,5',
    Cost: 75,
    Rarity: 2,
    id: 7
  },
  {
    Name: 'Mine à fragmentation',
    Damage: '6 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: "Mine, Zone d'impact",
    Weight: '0,5',
    Cost: 50,
    Rarity: 2,
    id: 8
  },
  {
    Name: 'Mine à impulsion',
    Damage: '9 $CD$',
    Effect: '',
    DamageType: 'Energétiques',
    Quality: "Lancer (M), Zone d'impact, Etourdissant",
    Weight: '< 0,5',
    Cost: 135,
    Rarity: 3,
    id: 9
  },
  {
    Name: 'Mine à plasma',
    Damage: '9 $CD$',
    Effect: '',
    DamageType: 'Energétiques',
    Quality: "Lancer (M), Zone d'impact",
    Weight: '< 0,5',
    Cost: 135,
    Rarity: 3,
    id: 10
  },
  {
    Name: 'Mine nucléaire',
    Damage: '9 $CD$',
    Effect: 'Brutal, Destructeur, Radioactif',
    DamageType: 'Energétiques',
    Quality: "Lancer (M), Zone d'impact",
    Weight: '< 0,5',
    Cost: 100,
    Rarity: 4,
    id: 11
  }
]
