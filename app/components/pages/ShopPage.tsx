import { Blok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Hero from "../Hero";

const ShopPage = ({ blok }: Blok) => {
  const { hero_section } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <Hero content={hero_section[0]} />
    </div>
  );
};

export default ShopPage;
