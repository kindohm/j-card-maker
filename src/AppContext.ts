import { atom } from "jotai";
import { read } from "./util/storage";

export enum JCardType {
  JP0,
  JP1,
}

export type AppContextType = {
  backgroundColor: string;
  foregroundColor: string;
  spine: string;
  front: string;
  inside: string;
  back: string;
  fontSizeFront: number;
  fontSizeSpine: number;
  fontSizeInside: number;
  fontSizeBack: number;
  showBounds: boolean;
  insideAlignBottom: boolean;
  frontAlignBottom: boolean;
  frontAlignRight: boolean;
  type: JCardType;
};

export const initialContext: AppContextType = {
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
  insideAlignBottom: false,
  frontAlignRight: false,
  frontAlignBottom: false,
  type: JCardType.JP0,
};

const local = read();
export const AppContext = atom(local);
