import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {TranslateService} from "@ngx-translate/core";

@Component({
  templateUrl: 'dices.page.html',
  styleUrls: ['dices.page.scss'],
})
export class DicesPages implements OnInit {

  sections = [];

  constructor(
    public navCtrl: NavController, private translateService: TranslateService) {
  }

  toggleGroup(section: any) {
    section.opened = !section.opened;
  }

  ngOnInit(): void {
    this.translateService.get('DICES.COMBATDICES').subscribe(() => {
      this.sections = [
        {
          label: this.translateService.instant("DICES.COMBATDICES"),
          opened: true,
          type: 'COMBATDICE'
        },
        {
          'label': this.translateService.instant("DICES.D20"),
          'opened': false,
          type: 'D20DICE'
        },
        {
          'label': this.translateService.instant("DICES.HITTARGET"),
          'opened': false,
          type: 'TARGETDICE'
        }
      ]
    });
  }


}
