import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this._row = 0;
  }
  title = 'jmdjr.github.io';
  _row:number = 0;
  get startRow() : number {
    this._row = 0;
    return this._row;
  }
  get row(): number {
    return this._row++;
  }
}
