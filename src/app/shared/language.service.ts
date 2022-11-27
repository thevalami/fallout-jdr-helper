import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
  }

  private currentLanguage: string = this.translate.getBrowserLang();
  private subject = new BehaviorSubject<string>(this.currentLanguage);

  updateLanguage(lang: string) {
    this.currentLanguage = lang;
    this.subject.next(lang);
  }

  getLanguage(): Observable<string> {
    return this.subject.asObservable();
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
