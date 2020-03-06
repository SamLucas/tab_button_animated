import { Dimensions } from "react-native";
import * as shape from "d3-shape";

export const Width = Dimensions.get("window").width;
export const Height = 64;

export const NamesTabIcon = ["grid", "list", "refresh-cw", "box", "user"];
export const tabWidth = Width / NamesTabIcon.length;

// Preciso colocar a tipagem correta
const DefaultShape = shape
  .line()
  .x(d => d.x)
  .y(d => d.y);

const left = DefaultShape([
  { x: 0, y: 0 },
  { x: Width, y: 0 }
]);

const right = DefaultShape([
  { x: Width + tabWidth, y: 0 },
  { x: Width * 2, y: 0 },
  { x: Width * 2, y: Height },
  { x: 0, y: Height },
  { x: 0, y: 0 }
]);

// Tentando criar o circulo perfeito ainda
const tab = DefaultShape.curve(shape.curveBasis)([
  { x: Width, y: 0 },
  { x: Width + 5, y: 0 },
  { x: Width + 10, y: 0 },
  { x: Width + 15, y: Height },
  { x: Width + tabWidth - 15, y: Height - 10 },
  { x: Width + tabWidth - 10, y: 10 },
  { x: Width + tabWidth - 5, y: 0 },
  { x: Width + tabWidth, y: 0 }
]);

export const PropsShape = `${left} ${tab} ${right}`;
