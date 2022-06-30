import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rich-text-display',
  templateUrl: './rich-text-display.component.html',
  styleUrls: ['./rich-text-display.component.scss'],
})
export class RichTextDisplayComponent implements OnInit {
  @Input() propertyText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
