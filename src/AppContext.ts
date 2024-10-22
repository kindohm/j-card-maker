import { atom } from "jotai";

export const initialContext = {
  spine: "artist - album",
  front: "artist - album",
  inside: "credit line 1<br/>credit line 2",
  back: "side A:",
};

export const AppContext = atom(initialContext);
