import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent implements OnInit {
  dssv: any = [
    { ten: 'Long', tuoi: 20 },
    { ten: 'Ga', tuoi: 5 },
    { ten: 'Vit', tuoi: 9 },
    { ten: 'Heo', tuoi: 17 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
