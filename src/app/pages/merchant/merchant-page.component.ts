import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../shared/language.service";
import {MERCHANT_LOOT_TYPES} from "../../data/loot-table/loot-table-lang";
import {findDataMatching} from "../../shared/data/data-type-matcher";
import {AlertController, ModalController, ToastController} from "@ionic/angular";
import {CheckoutModal} from "./checkout-modal/checkout-modal.component";
import {MerchantItem} from "./merchant-item.model";
import {TranslateService} from "@ngx-translate/core";
import * as LZUTF8 from "lzutf8";
import {MerchantExport} from "./merchand-export.model";
import {isWebContext} from "../../shared/context-utils";
import {CapacitorQRScanner} from "@johnbraum/capacitor-qrscanner";

const WEALTH_QUANTITY_MULTIPLIER = 3;

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant-page.component.html',
  styleUrls: ['./merchant-page.component.scss'],
})
export class MerchantPage implements OnInit {
  wealth = 3;
  lootTypes: string[] = [];
  generatedItems: { [key: string]: MerchantItem[] } = {};
  capsules = 0;
  merchantReady = false;
  boughtItems = 0;

  qrCodeValue: string = null;
  showQRCode = false;

  constructor(private languageService: LanguageService, private modalCtrl: ModalController, private alertController: AlertController,
              private translateService: TranslateService, private toastController: ToastController) {
  }

  ngOnInit() {
    this.initScreen(this.languageService.getCurrentLanguage());
    this.languageService.getLanguage().subscribe(lang => {
      this.initScreen(lang);
    });
  }

  initScreen(lang: string): void {
    this.generatedItems = {};
    this.merchantReady = false;
    this.lootTypes = MERCHANT_LOOT_TYPES[lang].sort((a, b) => a.localeCompare(b));
  }

  generateMerchant(): void {
    this.showQRCode = false;
    this.qrCodeValue = null;
    this.merchantReady = false;
    this.capsules = this.randomIntFromInterval((this.wealth - 1) * 100, this.wealth * 100);

    this.lootTypes.forEach(lootType => {
      const data = findDataMatching(this.languageService.getCurrentLanguage(), lootType);

      const candidateData: MerchantItem[] = data.filter(value => {
        return this.getScaledRarity(lootType, value.Rarity) <= this.wealth
          && !isNaN(value.Cost)
          && value.Cost > 0 // Gratuit = pas en vente ou pas un objet
      }).map(value => {
        return {item: value, quantity: this.generateRandomQuantity(lootType, value), boughtQuantity: 0};
      });
      const subsetSize = this.randomIntFromInterval(1, Math.min(candidateData.length, this.wealth * WEALTH_QUANTITY_MULTIPLIER) - 1);
      const finalData = this.randomizeElements(candidateData, subsetSize);
      this.generatedItems[lootType] = finalData.sort((a, b) => a.Cost - b.Cost);
    });

    this.merchantReady = true;
  }

  private randomizeElements(array: any[], count = 1) {
    let m = array.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [array[m], array[i]] = [array[i], array[m]];
    }
    return array.slice(0, count);
  };

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private getScaledRarity(lootType: string, rarity: number): number {
    if (!rarity) {
      return 0;
    }
    switch (lootType) {
      case 'Vêtements':
      case 'Clothes':
      case 'Armes à distance':
      case 'Ranged weapons':
        return Math.ceil(rarity * 1.5);
      case 'Armes de mêlée':
      case 'Melee weapons':
      case 'Armures':
      case 'Armors':
        return Math.ceil(rarity * 1.5);
      default:
        return rarity;
    }
  }

  private generateRandomQuantity(lootType: string, value: any): number {
    const baseQuantity = Math.ceil(this.wealth / (value.Rarity | 1));
    let multiplicator = 1;
    switch (lootType) {
      case 'Munitions':
      case 'Ammunitions':
        multiplicator = 8;
        break;
      case 'Boissons':
      case 'Drinks':
        multiplicator = 2;
        break;
      case 'Nourriture':
      case 'Food':
        multiplicator = 2;
        break;
      case 'Armes à distance':
      case 'Ranged weapons':
      case 'Armes de mêlée':
      case 'Melee weapons':
      case 'Vêtements':
      case 'Clothes':
      case 'Armures':
      case 'Armors':
        multiplicator = 0.1;
        break;
    }
    return Math.ceil(baseQuantity * multiplicator * (Math.random() + 1));
  }

  async openCheckoutModal() {
    const modal = await this.modalCtrl.create({
      component: CheckoutModal,
      componentProps: {merchantCapsules: this.capsules, boughtItems: this.generateBoughtItems()}
    });
    await modal.present();
    await modal.onWillDismiss();
  }

  buyItem(item: MerchantItem) {
    if (item.quantity > 5) {
      this.presentAlert(item, item.quantity);
    } else if (item.quantity > 0) {
      item.quantity--;
      item.boughtQuantity++;
      this.boughtItems++;
    }
  }

  cancelBuyItem(item: MerchantItem) {
    if (item.boughtQuantity > 0) {
      item.quantity++;
      item.boughtQuantity--;
      this.boughtItems--;
    }
  }

  private generateBoughtItems() {
    const boughtItems = [];
    for (let lootType in this.generatedItems) {
      this.generatedItems[lootType].filter(value => value.boughtQuantity > 0).forEach(value => boughtItems.push(value));
    }
    return boughtItems;
  }

  async presentAlert(item: MerchantItem, maxQuantity: number): Promise<void> {
    const alert = await this.alertController.create({
      header: this.translateService.instant('LOOT-DISPLAY.QUANTITY'),
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            const batchQuantity = Number(alertData.quantity);
            item.quantity -= batchQuantity;
            item.boughtQuantity += batchQuantity;
            this.boughtItems += batchQuantity;
          }
        }
      ],
      inputs: [
        {
          name: 'quantity',
          type: 'number',
          placeholder: this.translateService.instant('LOOT-DISPLAY.QUANTITY'),
          min: 1,
          max: maxQuantity,
        }
      ],
    });

    await alert.present();
  }

  generateQRCode() {
    const dataExport: MerchantExport = {
      'wealth': this.wealth,
      'capsules': this.capsules,
      'items': {}
    };

    for (let lootType in this.generatedItems) {
      if (!dataExport.items[lootType]) {
        dataExport.items[lootType] = [];
      }
      this.generatedItems[lootType].forEach(value => {
        dataExport.items[lootType].push({
          'i': value.item.id,
          'q': value.quantity
        })
      });
    }
    this.qrCodeValue = LZUTF8.compress(JSON.stringify(dataExport), {"outputEncoding": "StorageBinaryString"});
    this.showQRCode = true;
  }

  async startScan() {
    if (!this.isWebDevice()) {
      let result = await CapacitorQRScanner.scan();

      if (result.code) {
        const plainData = LZUTF8.decompress(result.code, {"inputEncoding": "StorageBinaryString"});
        this.importMerchant(this.checkAndParse(plainData));
      }
    }

  };

  isWebDevice(): boolean {
    return isWebContext();
  }

  private checkAndParse(plainData: any): MerchantExport {
    try {
      return JSON.parse(plainData) as MerchantExport;
    } catch (e) {
      this.toastController.create({
        message: this.translateService.instant('MERCHANT.QRCODE-ERROR'),
        duration: 5000,
        position: 'bottom'
      }).then(toast => toast.present());
      return null;
    }
  }

  private importMerchant(importedData: MerchantExport): void {
    this.merchantReady = false;
    this.wealth = importedData.wealth;
    this.capsules = importedData.capsules;
    this.generatedItems = {};


    let sortedLootTypes = Object.keys(importedData.items).sort((a, b) => a.localeCompare(b));
    for (const lootType of sortedLootTypes) {
      this.generatedItems[lootType] = [];
      importedData.items[lootType].forEach(item => {
        this.generatedItems[lootType].push({
          item: this.findItemMatchingId(lootType, item.i),
          quantity: item.q,
          boughtQuantity: 0
        });
      });
    }
    this.merchantReady = true;
  }

  private findItemMatchingId(lootType: string, id: string): MerchantItem {
    const data = findDataMatching(this.languageService.getCurrentLanguage(), lootType);
    return data.filter(value => value.id === id)[0];
  }
}
