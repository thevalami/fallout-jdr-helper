import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mob-leveling',
  templateUrl: './mob-leveling.component.html',
  styleUrls: ['./mob-leveling.component.scss'],
})
export class MobLevelingComponent implements OnInit {
  mobType: 'CREATURE' | 'CHARACTER' = 'CREATURE';

  constructor() {
  }

  ngOnInit() {
  }

  segmentChanged($event: any) {
    this.mobType = $event.detail.value;
  }
}
