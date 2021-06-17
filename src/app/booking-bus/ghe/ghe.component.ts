import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  constructor() {}
  @Output() eventBook = new EventEmitter();
  gheColor: boolean = false;

  ngOnInit(): void {}

  chonGhe() {
    // console.log(this.ghe.TenGhe, this.ghe.Gia);
    this.gheColor = !this.gheColor;
    this.eventBook.emit(this.gheColor);
  }
}
