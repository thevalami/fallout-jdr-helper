//TODO: Translate me !
import {DataTableDefinition} from "../../generic-data-lang";

export const CHEMS_LOOT_DEF_EN: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Name'
}, {
  column: 'Effect',
  label: 'Effect'
}, {
  column: 'Duration',
  label: 'Duration'
}, {
  column: 'Addictive',
  label: 'Addictive?'
}, {
  column: 'Weight',
  label: 'Weight'
}, {
  column: 'Cost',
  label: 'Cost'
}, {
  column: 'Rarity',
  label: 'Rarity'
}]

export const CHEMS_LOOT_DATA_EN = [
  {
    "Name": "Addictol",
    "Effect": "Removes all addictions",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 125,
    "Rarity": 3
  },
  {
    "Name": "Antibiotics",
    "Effect": "Cures all illnesses",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 75,
    "Rarity": 3
  },
  {
    "Name": "Berry Mentats",
    "Effect": "Reduce the difficulty of INT tests by 2 (minimum 0)",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 60,
    "Rarity": 3
  },
  {
    "Name": "Buffjet",
    "Effect": "Reduce the difficulty of all STR and END tests by 1 (minimum 0). +4 Max HP, Gain 3 AP immediately (lost if not spent), Extra actions cost 1 less AP",
    "Duration": "Brief",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 75,
    "Rarity": 4
  },
  {
    "Name": "Buffout",
    "Effect": "Re-roll 1d20 on all STR and END tests, +3 Max HP",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 45,
    "Rarity": 2
  },
  {
    "Name": "Bufftats",
    "Effect": "Reduce the difficulty of all STR, PER, and END tests by 1 (minimum 0), +4 Max HP",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 75,
    "Rarity": 4
  },
  {
    "Name": "Calmex",
    "Effect": "Re-roll 1d20 on all PER and AGI tests, +2 $CD$ to sneak attack damage",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 100,
    "Rarity": 4
  },
  {
    "Name": "Daddy-O",
    "Effect": "Reduce the difficulty of all PER and INT tests by 1 (minimum 0), +1 difficulty to CHA tests",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Daytripper",
    "Effect": "Reduce the difficulty of CHA and LCK tests by 1 (minimum 0), +1 difficulty to STR tests",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 40,
    "Rarity": 3
  },
  {
    "Name": "Fury",
    "Effect": "+3 Physical damage resistance. +3 $CD$ to melee damage, +2 difficulty to all PER tests",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 30,
    "Rarity": 4
  },
  {
    "Name": "Grape Mentats",
    "Effect": "Reduce the difficulty of CHA tests by 2, to a minimum of 0, Re-roll 1d20 on Barter tests.",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 60,
    "Rarity": 3
  },
  {
    "Name": "Baume de soin",
    "Effect": "Heals 2 HP (Take Chem minor action) or 4 HP (First Aid action)",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 20,
    "Rarity": 1
  },
  {
    "Name": "Jet",
    "Effect": "Extra actions cost 1 less AP",
    "Duration": "Brief",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Jet Fuel",
    "Effect": "Gain 1 free AP at the start of each turn",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 60,
    "Rarity": 3
  },
  {
    "Name": "Med-X",
    "Effect": "+3 Physical damage resistance",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Mentats",
    "Effect": "Re-roll 1d20 on PER and INT tests",
    "Duration": "Lasting",
    "Addictive": "Yes 3",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Orange Mentats",
    "Effect": "Reduce the difficulty of PER tests by 2 (min. 0), Aim minor action lets you re-roll one additional d20.",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 60,
    "Rarity": 3
  },
  {
    "Name": "Overdrive",
    "Effect": "+3 $CD$ damage to all attacks, May re-roll up to 3 $CD$ per damage roll",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 55,
    "Rarity": 3
  },
  {
    "Name": "Psycho",
    "Effect": "+2 $CD$ damage to all attacks, +3 Physical damage resistance",
    "Duration": "Lasting",
    "Addictive": "Yes 2",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Psycho Jet",
    "Effect": "+2 $CD$ damage to all attacks, +4 Physical damage resistance. Gain 4 AP immediately (lost if not spent)",
    "Duration": "Brief",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 70,
    "Rarity": 4
  },
  {
    "Name": "Psychobuff",
    "Effect": "+2 $CD$ damage to all attacks, +4 Max HP.Reduce difficulty of all STR and END tests by 1 (minimum 0).",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 70,
    "Rarity": 4
  },
  {
    "Name": "Psychotats",
    "Effect": "+2 $CD$ damage to all attacks, +2 Physical damage resistance, Reduce difficulty of PER tests by 1 (min. 0)",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 70,
    "Rarity": 4
  },
  {
    "Name": "Rad-X",
    "Effect": "+6 Radiation damage resistance",
    "Duration": "Lasting",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 40,
    "Rarity": 2
  },
  {
    "Name": "Rad-X (Diluted)",
    "Effect": "+3 Radiation damage resistance",
    "Duration": "Lasting",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 25,
    "Rarity": 1
  },
  {
    "Name": "RadAway",
    "Effect": "Heals 4 Radiation damage (Tech Chem minor action mineure or First Aid action)",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 80,
    "Rarity": 2
  },
  {
    "Name": "RadAway (Diluted)",
    "Effect": "Heals 2 Radiation damage (Tech Chem minor action mineure or First Aid action)",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 1
  },
  {
    "Name": "Skeeto Spit",
    "Effect": "+2 Max HP",
    "Duration": "Lasting",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 40,
    "Rarity": 2
  },
  {
    "Name": "Stimpak",
    "Effect": "Heals 4 HP or an injury on Tech Chem minor action or First Aid action",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 50,
    "Rarity": 2
  },
  {
    "Name": "Stimpak (Diluted)",
    "Effect": "Heals 2 HP or an injury on Tech Chem minor action or First Aid action",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 30,
    "Rarity": 1
  },
  {
    "Name": "Super Stimpak",
    "Effect": "Heals 8 HP or an injury on Tech Chem minor action or First Aid action",
    "Duration": "Instant",
    "Addictive": "No",
    "Weight": "<1",
    "Cost": 90,
    "Rarity": 4
  },
  {
    "Name": "Ultra Jet",
    "Effect": "Gain 6 AP immediately (lost if not spent), Extra actions cost 1 less AP",
    "Duration": "Brief",
    "Addictive": "Yes 3",
    "Weight": "<1",
    "Cost": 67,
    "Rarity": 2
  },
  {
    "Name": "X-Cell",
    "Effect": "First d20 bought on all tests is free",
    "Duration": "Lasting",
    "Addictive": "Yes 1",
    "Weight": "<1",
    "Cost": 60,
    "Rarity": 4
  }
]
