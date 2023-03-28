var iterator = 1; // this is going to be your identifier

function addIdentifier(target) {
  target.id = iterator;
  iterator++;
}

function loop(obj) {

  for (var i in obj) {

    var c = obj[i];

    if (typeof c === 'object') {

      if (c.length === undefined) {

        //c is not an array
        addIdentifier(c);

      }

      loop(c);

    }

  }

}

let json = [
  {
    "Name": "Casque de sécurité Vault-Tec",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "RadiationRes": 0,
    "BodyParts": "Tête",
    "Weight": 1,
    "Cost": 20,
    "Rarity": 1
  },
  {
    "Name": "Armure de sécurité Vault-Tec",
    "PhysicalRes": 2,
    "EnergyRes": 0,
    "RadiationRes": 2,
    "BodyParts": "Buste, Jambes, Bras",
    "Weight": 4,
    "Cost": 16,
    "Rarity": 1
  }
];
loop(json); // json is your input object
console.log(json);
