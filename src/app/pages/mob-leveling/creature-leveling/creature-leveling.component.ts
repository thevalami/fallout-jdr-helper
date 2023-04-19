import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-creature-leveling',
  templateUrl: './creature-leveling.component.html',
  styleUrls: ['./creature-leveling.component.scss'],
})
export class CreatureLevelingComponent implements OnInit {
  mobModifier: 'NORMAL' | 'MIGHTY' | 'LEGENDARY' = 'NORMAL';

  baseLevel: number = null;
  body: number = null;
  mind: number = null;
  bonusLevel: number = null;

  upgradedHP: number = 0;
  upgradeBody: number = 0;
  upgradeMind: number = 0;
  damageBonus: number = 0;
  armorBonus: number = 0;
  statsBonus: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  upgradeCreature() {
    this.damageBonus = 0;
    this.armorBonus = 0;
    this.upgradeBody = this.body;
    this.upgradeMind = this.mind;
    if (this.mobModifier == "LEGENDARY") {
      this.upgradeMind += 2;
      this.upgradeBody += 2;
    } else if (this.mobModifier == "MIGHTY") {
      if (Math.random() < 0.5) {
        this.upgradeBody += 2;
      } else {
        this.upgradeMind += 2;
      }
    }
    const modifier = this.mobModifier == "NORMAL" ? 1 : this.mobModifier == "MIGHTY" ? 2 : 3;
    this.upgradedHP = (this.body + this.baseLevel + this.bonusLevel) * modifier;
    for (let i = 2; i <= this.bonusLevel; i = i + 2) {
      this.damageBonus++;
      this.armorBonus++;
    }
    for (let i = 1; i <= this.bonusLevel; i = i + 2) {
      if (Math.random() < 0.5) {
        this.upgradeBody++;
      } else {
        this.upgradeMind++;
      }
    }
  }
}
