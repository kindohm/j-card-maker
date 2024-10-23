import { atom } from "jotai";

export const initialContext = {
  backgroundColor: "#cccccc",
  foregroundColor: "#333333",
  spine: "artist - album",
  front: "artist - album",
  inside: "credit line 1<br/>credit line 2",
  back: "side A:",
  fontSizeFront: 0.5,
  fontSizeSpine: 0.3,
  fontSizeInside: 0.1,
  fontSizeBack: 0.1,
  showBounds: true,
};

export const AppContext = atom(initialContext);
