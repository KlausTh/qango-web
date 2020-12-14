// qango.ts

export enum Side {
  None = "none",
  Black = "black",
  White = "white",
}

export interface Board {
  id : number;
  won : Side;
  winning_fields : number[];
  next : Side;
  field : Side[];
}

export enum Player {
  Human = "human",
  Computer = "computer",
}

export interface Game {
  board : Board;
  ailevel : number;
  players : Player[];
}
