import { Blok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Hero from "./Hero";
import ProductSection from "./ProductSection";

const ShopPage = ({ blok }: Blok) => {
  const { hero_section, filter_section, more_button_text } = blok;
  return (
    <div {...storyblokEditable(blok)} className='min-h-full'>
      <Hero content={hero_section[0]} />
      <ProductSection
        filters={filter_section[0].filter_options}
        loadBtnTxt={more_button_text}
      />
    </div>
  );
};

export default ShopPage;
