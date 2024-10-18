import { SbBlokData } from "@storyblok/react/rsc";

export type Storyblok = {
  name: string;
  id: number;
  content: unknown;
};

export type ContentBlock = {
  [key as string]: Array<>;
};

export interface Block {
  _uid: string;
  component: string;
}

export interface Blok {
  blok: SbBlokData | any;
}
