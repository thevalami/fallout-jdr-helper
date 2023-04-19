import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-leveling',
  templateUrl: './character-leveling.component.html',
  styleUrls: ['./character-leveling.component.scss'],
})
export class CharacterLevelingComponent implements OnInit {
  mobModifier: 'NORMAL' | 'NOTABLE' | 'MAJOR' = 'NORMAL';

  baseLevel: number = null;
  strength: number = null;
  perception: number = null;
  endurance: number = null;
  charisma: number = null;
  intelligence: number = null;
  agility: number = null;
  luck: number = null;
  bonusLevel: number = null;

  upgradedHP: number = 0;
  upgradedStrength: number = null;
  upgradedPerception: number = null;
  upgradedEndurance: number = null;
  upgradedCharisma: number = null;
  upgradedIntelligence: number = null;
  upgradedAgility: number = null;
  upgradedLuck: number = null;
  initiative = 0;
  wealthBonus = 0;
  weaponModifiers = 0;
  armorModifiers = 0;
  skillPointsBonus = 0;
  tagSkillsBonus = 0;

  constructor() {
  }

  ngOnInit() {
  }

  upgradeCreature() {
    this.weaponModifiers = 0;
    this.armorModifiers = 0;
    this.tagSkillsBonus = 0;
    this.skillPointsBonus = 0;

    const specials = [this.strength, this.perception, this.endurance, this.charisma, this.intelligence, this.agility, this.luck];
    for (let i = 1; i <= this.bonusLevel; i = i + 2) {
      const randomIdx = Math.floor(Math.random() * specials.length);
      specials[randomIdx]++;
    }
    this.upgradedStrength = specials[0];
    this.upgradedPerception = specials[1];
    this.upgradedEndurance = specials[2];
    this.upgradedCharisma = specials[3];
    this.upgradedIntelligence = specials[4];
    this.upgradedAgility = specials[5];
    this.upgradedLuck = specials[6];
    this.initiative = this.upgradedPerception + this.upgradedAgility;

    if (this.mobModifier == "NOTABLE") {
      this.initiative += 2;
      this.tagSkillsBonus = 1;
    } else if (this.mobModifier == "MAJOR") {
      this.initiative += 4;
      this.tagSkillsBonus = 2;
    }
    this.skillPointsBonus += this.bonusLevel;
    const modifier = this.mobModifier == "NOTABLE" ? 1 : this.mobModifier == "MAJOR" ? 2 : 0;
    this.upgradedHP = this.endurance + this.baseLevel + this.bonusLevel + (modifier * this.luck);
    for (let i = 2; i <= this.bonusLevel; i = i + 2) {
      this.weaponModifiers++;
      this.armorModifiers++;
    }

    for (let i = 3; i <= this.bonusLevel; i = i + 3) {
      this.wealthBonus++;
    }
  }
}
