import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.scss'],
})
export class SellModalComponent implements OnInit {
  @Input() merchantCapsules: number;
  sellAmount: number = 0;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getFailAmount() {
    return Math.floor(this.sellAmount / 4 * 0.9)
  }

  getNormalAmount() {
    return Math.floor(this.sellAmount / 4)
  }

  getSuccessAmount() {
    return Math.floor(this.sellAmount / 4 * 1.1)
  }

  getIncreasedSuccessAmount() {
    return Math.floor(this.sellAmount / 4 * 1.2)
  }
}
