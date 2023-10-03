import { z } from "zod";

export const Keys = z.enum(["ArrowRight", "ArrowLeft", "ArrowUp", "ArrayDown"]);
export type Keys = z.infer<typeof Keys>;

export const ArrowKeys = new Set([
  Keys.Enum.ArrowRight,
  Keys.Enum.ArrowLeft,
  Keys.Enum.ArrowUp,
  Keys.Enum.ArrayDown,
]);
