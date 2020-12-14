import { Component, OnInit, Input } from '@angular/core';
import { Side } from '../qango';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() index : number;

  app : AppComponent;

  constructor(app : AppComponent) {
    this.app = app;
  }

  ngOnInit() {
  }

  getSide() : Side {
    return this.app.game.board.field[this.index]
  }

  getClasses() : String {
    var cls = "";
    
    if (this.getSide() == Side.White) {
      cls += "sphere bwhite";
    }
    if (this.getSide() == Side.Black) {
      cls += "sphere bblack";
    }

    return cls;
  }

  getBackClasses() : String {
    var cls = "full";
    
    if (this.isWinningField()) {
      cls += " winning";
    }

    return cls;
  }

  isWinningField() : Boolean {
    return this.app.game.board.winning_fields.find(i => i == this.index) != undefined;
  }

  public activate() {
    this.app.click(this.index);
  }
}
