import bank from "../assets/playground/bank.gif";
import coffee from "../assets/playground/coffee.gif";
import zara from "../assets/playground/zara.gif";
import porsche from "../assets/playground/Porsche.gif";
import letter from "../assets/playground/letter.webp";

export interface PlaygroundImage {
  id: number;
  actualImgPath: string;
  altText: string;
}

// Playground GIFs — scattered on the interactive board in Playground.tsx.
export const playgroundImages: PlaygroundImage[] = [
  { id: 1, actualImgPath: porsche, altText: "Porsche Design" },
  { id: 2, actualImgPath: bank, altText: "Bank App Design" },
  { id: 3, actualImgPath: zara, altText: "Zara Design" },
  { id: 4, actualImgPath: coffee, altText: "Coffee App Design" },
  { id: 5, actualImgPath: letter, altText: "Letter Design" },
];
