import {DataTableDefinition} from "../../generic-data-lang";

export const RAIDERARMOR_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'PhysicalRes',
  label: 'Résistance ballistique'
}, {
  column: 'EnergyRes',
  label: 'Résistance energétique'
}, {
  column: 'RadiationRes',
  label: 'Résistance radiation'
}, {
  column: 'BodyParts',
  label: 'Parties couvertes'
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

export const RAIDERARMOR_LOOT_DATA_FR = [
  {
    Name: 'Plastron de pillard',
    PhysicalRes: 1,
    EnergyRes: 1,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: '3,5',
    Cost: 18,
    Rarity: '0',
    id: 1
  },
  {
    Name: 'Jambière de pillard',
    PhysicalRes: 1,
    EnergyRes: 1,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: '1,5',
    Cost: 8,
    Rarity: '0',
    id: 2
  },
  {
    Name: 'Brassard de pillard',
    PhysicalRes: 1,
    EnergyRes: 1,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: '1,5',
    Cost: 6,
    Rarity: '0',
    id: 3
  },
  {
    Name: 'Plastron de pillard solide',
    PhysicalRes: 2,
    EnergyRes: 2,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: 6,
    Cost: 33,
    Rarity: 1,
    id: 4
  },
  {
    Name: 'Jambière de pillard solide',
    PhysicalRes: 2,
    EnergyRes: 2,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: '3,5',
    Cost: 13,
    Rarity: 1,
    id: 5
  },
  {
    Name: 'Brassard de pillard solide',
    PhysicalRes: 2,
    EnergyRes: 2,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: '3,5',
    Cost: 8,
    Rarity: 1,
    id: 6
  },
  {
    Name: 'Plastron de pillard lourd',
    PhysicalRes: 3,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: '8,5',
    Cost: 48,
    Rarity: 2,
    id: 7
  },
  {
    Name: 'Jambière de pillard lourde',
    PhysicalRes: 3,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: 5,
    Cost: 18,
    Rarity: 2,
    id: 8
  },
  {
    Name: 'Brassard de pillard lourd',
    PhysicalRes: 3,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: 5,
    Cost: 15,
    Rarity: 2,
    id: 9
  }
]

