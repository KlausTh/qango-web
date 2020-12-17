import { Component } from '@angular/core';
import { Side, Board, Game, Player } from './qango';
import { QangoService } from './qango.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public colors : Array<string> = [
    "red", "red", "yellow", "orange", "red", "red",
    "red", "yellow", "green", "blue", "orange", "red",
    "yellow", "green", "green", "blue", "blue", "orange",
    "orange", "blue", "blue", "green", "green", "yellow",
    "red", "orange", "blue", "green", "yellow", "red",
    "red", "red", "orange", "yellow", "red", "red"
  ]
  title : string = 'qango';
  status : number = 0;

  public game : Game = {
    board : null,
    ailevel : 0,
    players : [Player.Human, Player.Normal],
  };

  constructor(private service : QangoService) {
    this.newgame();
  }

  public newgame() {
    this.service.start()
      .subscribe(
        nboard => {
          this.update(nboard);
        },
        error => {
          console.debug('Fehler', error);
        }
      );
  }

  public white(level : number) {
    this.game.players[0] = level;
  }
  public getWhite() {
    let index = this.game.players[0].valueOf();

    return Player[index];
  }

  public black(level : number) {
    this.game.players[1] = level;
  }

  public getBlack() {
    let index = this.game.players[1].valueOf();

    return Player[index];
  }

  public click(index : number) {
    console.log("Mouse clicked on " + index);
    this.turn(index);
  }

  public update(nboard : Board) {
    this.game.board = nboard;

    if ((nboard.next == Side.White) && (this.game.players[0] != Player.Human)) {
      this.aiturn(this.game.players[0].valueOf());
    }
    if ((nboard.next == Side.Black) && (this.game.players[1] != Player.Human)) {
      this.aiturn(this.game.players[1].valueOf());
    }
  }

  turn(index : number) {
    this.service.turn(this.game.board.id, index).subscribe(
      nboard => {
        this.update(nboard);
      },
      error => {
        console.debug('Fehler', error);
      }
    )
  }

  aiturn(level : number) {
    this.service.aiturn(this.game.board.id, level).subscribe(
      nboard => {
        this.update(nboard);
      },
      error => {
        console.debug('Fehler', error);
      }
    )
  }
}
