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
    players : [Player.Human, Player.Computer],
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

  public white_computer() {
    this.game.players[0] = Player.Computer;
  }

  public white_human() {
    this.game.players[0] = Player.Human;
  }

  public getWhite() {
    switch (this.game.players[0]) {
      case Player.Human: {
        return "Human";
      }
      case Player.Computer: {
        return "Computer";
      }
    }
  }

  public getBlack() {
    switch (this.game.players[1]) {
      case Player.Human: {
        return "Human";
      }
      case Player.Computer: {
        return "Computer";
      }
    }
  }

  public black_computer() {
    this.game.players[1] = Player.Computer;
  }

  public black_human() {
    this.game.players[1] = Player.Human;
  }

  public click(index : number) {
    console.log("Mouse clicked on " + index);
    this.turn(index);
  }

  public update(nboard : Board) {
    this.game.board = nboard;

    if ((nboard.next == Side.White) && (this.game.players[0] == Player.Computer)
      ||(nboard.next == Side.Black) && (this.game.players[1] == Player.Computer)) {
      this.aiturn();
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

  aiturn() {
    this.service.aiturn(this.game.board.id).subscribe(
      nboard => {
        this.update(nboard);
      },
      error => {
        console.debug('Fehler', error);
      }
    )
  }
}
