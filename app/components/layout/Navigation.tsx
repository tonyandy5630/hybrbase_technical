import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

export default function Navigation(blok: SbBlokData) {
  return <div {...storyblokEditable(blok)}>Navigation</div>;
}
