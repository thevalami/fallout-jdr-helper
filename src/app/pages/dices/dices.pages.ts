import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  templateUrl: 'dices.page.html',
  styleUrls: ['dices.page.scss'],
})
export class DicesPages {

  sections = [
    {
      label: "Dès de combats",
      opened: true,
      type: 'COMBATDICE'
    },
    {
      'label': "D20",
      'opened': false,
      type: 'D20DICE'
    },
    {
      'label': "Localisation dégâts",
      'opened': false,
      type: 'TARGETDICE'
    }
  ];

  constructor(
    public navCtrl: NavController) {
  }

  toggleGroup(section: any) {
    section.opened = !section.opened;
  }


}
