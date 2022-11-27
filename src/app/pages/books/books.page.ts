import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {BOOK_TABLE_INDEX, BookType, BookVolume} from "../../data/books/book-lang";
import {LanguageService} from "../../shared/language.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  constructor(private languageService: LanguageService) {
  }

  bookType: BookType;
  bookVolume: BookVolume;
  bookTypeResult: number;
  bookVolumeResult: number;

  ngOnInit() {
  }

  generateRandomBook() {
    this.bookType = null;
    this.bookVolume = null;

    const dice = new Dice();
    this.bookTypeResult = dice.roll('1d20').total;
    this.bookType = this.findBookType(this.bookTypeResult);
    if (this.bookType.Data) { // Lancer de dès pour le volume exact
      this.bookVolumeResult = dice.roll('1d20').total;
      for (let volume of this.bookType.Data) {
        let minDice: number;
        let maxDice: number;
        if (volume.Dice.includes("-")) {
          minDice = Number(volume.Dice.split("-")[0]);
          maxDice = Number(volume.Dice.split("-")[1]);
        } else {
          minDice = Number(volume.Dice);
          maxDice = Number(volume.Dice);
        }
        if (this.bookVolumeResult >= minDice && this.bookVolumeResult <= maxDice) {
          this.bookVolume = volume;
          break;
        }
      }
    }
  }

  private findBookType(bookTypeResult: number) {
    let bookType = null;
    for (let candidateBookType of BOOK_TABLE_INDEX[this.languageService.getCurrentLanguage()]) {
      if (candidateBookType.Dice === bookTypeResult) {
        bookType = candidateBookType;
        break;
      }
    }
    return bookType;
  }
}
