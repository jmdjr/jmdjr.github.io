import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './Base/header/header.component';
import { FooterComponent } from './Base/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this._row = 0;
  }
  _row:number = 0;
  get startRow() : number {
    this._row = 0;
    return this._row;
  }
  get row(): number {
    return ++this._row;
  }
}
