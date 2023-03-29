

let json = [
  {
    Name: 'Casque de synthétique',
    PhysicalRes: 2,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '1,5',
    Cost: 33,
    Rarity: 3,
    id: 1
  },
  {
    Name: 'Plastron de synthétique',
    PhysicalRes: 2,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: '3,5',
    Cost: 75,
    Rarity: 3,
    id: 2
  },
  {
    Name: 'Jambière de synthétique',
    PhysicalRes: 2,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: '1,5',
    Cost: 30,
    Rarity: 3,
    id: 3
  },
  {
    Name: 'Brassard de synthétique',
    PhysicalRes: 2,
    EnergyRes: 3,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: '1,5',
    Cost: 30,
    Rarity: 3,
    id: 4
  },
  {
    Name: 'Casque de synthétique solide',
    PhysicalRes: 3,
    EnergyRes: 4,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '3,5',
    Cost: 70,
    Rarity: 4,
    id: 5
  },
  {
    Name: 'Plastron de synthétique solide',
    PhysicalRes: 3,
    EnergyRes: 4,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: 6,
    Cost: 125,
    Rarity: 4,
    id: 6
  },
  {
    Name: 'Jambière de synthétique solide',
    PhysicalRes: 3,
    EnergyRes: 4,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: '3,5',
    Cost: 80,
    Rarity: 4,
    id: 7
  },
  {
    Name: 'Brassard de synthétique solide',
    PhysicalRes: 3,
    EnergyRes: 4,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: '3,5',
    Cost: 70,
    Rarity: 4,
    id: 8
  },
  {
    Name: 'Casque de synthétique lourd',
    PhysicalRes: 4,
    EnergyRes: 5,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: 5,
    Cost: 110,
    Rarity: 5,
    id: 9
  },
  {
    Name: 'Plastron de synthétique lourd',
    PhysicalRes: 4,
    EnergyRes: 5,
    RadiationRes: 0,
    BodyParts: 'Buste',
    Weight: '8,5',
    Cost: 175,
    Rarity: 5,
    id: 10
  },
  {
    Name: 'Jambière de synthétique lourde',
    PhysicalRes: 4,
    EnergyRes: 5,
    RadiationRes: 0,
    BodyParts: 'Jambe',
    Weight: 5,
    Cost: 130,
    Rarity: 5,
    id: 11
  },
  {
    Name: 'Brassard de synthétique lourd',
    PhysicalRes: 4,
    EnergyRes: 5,
    RadiationRes: 0,
    BodyParts: 'Bras',
    Weight: 5,
    Cost: 110,
    Rarity: 5,
    id: 12
  }
];

appendType = (json, prefix) => {
  json.forEach(item => {
    item.id = prefix + "-" + item.id;
  })
}

appendType(json, 's')
console.log(json);
