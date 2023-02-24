import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {MerchantItem} from "../merchant-item.model";


@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss'],
})
export class CheckoutModal implements OnInit {
  @Input() merchantCapsules: number;
  @Input() boughtItems: MerchantItem[];
  sellAmount = 0;
  buyAmount = 0;
  tradeModifier = 1;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.boughtItems.forEach(value => {
      this.buyAmount += (value.boughtQuantity * value.item.Cost);
    })
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getFailAmount() {
    return Math.floor(this.sellAmount / 4 * 0.9)
  }

  getSellValue(initialValue: number) {
    return Math.floor(initialValue / 4)
  }

  getSuccessAmount() {
    return Math.floor(this.sellAmount / 4 * 1.1)
  }

  getIncreasedSuccessAmount() {
    return Math.floor(this.sellAmount / 4 * 1.2)
  }
}
