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
  Human = -1,
  Easy = 0,
  Normal = 1,
  Hard = 2,
}

export interface Game {
  board : Board;
  ailevel : number;
  players : Player[];
}
