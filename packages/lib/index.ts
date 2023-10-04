import { z } from "zod";

export const Keys = z.enum(["ArrowRight", "ArrowLeft", "ArrowUp", "ArrayDown"]);
export type Keys = z.infer<typeof Keys>;

export const ArrowKeys: Set<string> = new Set([
  Keys.Enum.ArrowRight,
  Keys.Enum.ArrowLeft,
  Keys.Enum.ArrowUp,
  Keys.Enum.ArrayDown,
]);

export const ImageItem = z.object({
  url: z.string(),
  display: z.boolean().default(false), // display item
  candidate: z.boolean().default(true),
  idx: z.number(), // just a id
  // Animatin control
  swipeUp: z.boolean().default(false),
  swipeDown: z.boolean().default(false),
  swipeLeft: z.boolean().default(false),
  swipeRight: z.boolean().default(false),
  label: z.string().default(""),
});

export type ImageItem = z.infer<typeof ImageItem>;
