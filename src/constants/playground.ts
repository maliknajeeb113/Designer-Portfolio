import bank from "../assets/playground/bank.gif";
import coffee from "../assets/playground/coffee.gif";
import zara from "../assets/playground/zara.gif";
import ezy from "../assets/playground/ezy.gif";
import porsche from "../assets/playground/Porsche.gif";

import bankSmall from "../assets/playground/bank-small.jpg";
import coffeeSmall from "../assets/playground/coffee-small.jpg";
import zaraSmall from "../assets/playground/zara-small.jpg";
import ezySmall from "../assets/playground/ezy-small.jpg";
import porscheSmall from "../assets/playground/porsche-small.jpg";

export interface PlaygroundImage {
  id: number;
  actualImgPath: string;
  placeholderImgPath: string;
  altText: string;
  containerClassName: string;
  row: number;
}

// Playground images data - Just add new images here!
export const playgroundImages: PlaygroundImage[] = [
  {
    id: 1,
    actualImgPath: porsche,
    placeholderImgPath: porscheSmall,
    altText: "Porsche Design",
    containerClassName: "shadow-neu rounded-2xl md:rounded-3xl w-9/12 h-max",
    row: 1,
  },
  {
    id: 2,
    actualImgPath: bank,
    placeholderImgPath: bankSmall,
    altText: "Bank App Design",
    containerClassName: "shadow-neu rounded-2xl md:rounded-3xl flex h-max w-4/12",
    row: 1,
  },
  {
    id: 3,
    actualImgPath: zara,
    placeholderImgPath: zaraSmall,
    altText: "Zara Design",
    containerClassName: "shadow-neu rounded-2xl md:rounded-3xl flex justify-center w-full",
    row: 2,
  },
  {
    id: 4,
    actualImgPath: coffee,
    placeholderImgPath: coffeeSmall,
    altText: "Coffee App Design",
    containerClassName: "shadow-neu rounded-2xl md:rounded-3xl flex h-max w-4/12",
    row: 3,
  },
  {
    id: 5,
    actualImgPath: ezy,
    placeholderImgPath: ezySmall,
    altText: "Ezy App Design",
    containerClassName: "shadow-neu rounded-2xl md:rounded-3xl w-9/12 h-max",
    row: 3,
  },
];
