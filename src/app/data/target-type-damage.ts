export type EnemyType = 'HUMAN' | 'QUADRUPEDE' | 'FLYINGINSECT' | 'ROBOT';

export const TARGET_TYPE_DATA = {
  'HUMAN': {
    '1-2': 'Tête',
    '3-8': 'Torse',
    '9-11': 'Bras gauche',
    '12-14': 'Bras droit',
    '15-17': 'Jambe gauche',
    '18-20': 'Jambe droite'
  },
  'QUADRUPEDE': {
    '1-2': 'Tête',
    '3-8': 'Torse',
    '9-11': 'Patte avant gauche',
    '12-14': 'Patte avant droit',
    '15-17': 'Patte arrière gauche',
    '18-20': 'Patte arrière droite'
  },
  'FLYINGINSECT': {
    "1-2": 'Tête',
    "3-8": 'Torse',
    '9-11': 'Aîle gauche',
    '12-14': 'Aîle droite',
    '15-20': 'Pattes',
  },
  'ROBOT': {
    "1-2": 'Optique',
    "3-8": 'Corps',
    '9-11': 'Bras 1',
    '12-14': 'Bras 2',
    '15-17': 'Bras 3',
    '18-20': 'Bras 4',
  }
}
