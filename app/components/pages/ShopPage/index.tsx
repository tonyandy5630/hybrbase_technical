import { Blok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Hero from "./Hero";
import ProductSection from "./ProductSection";

const ShopPage = ({ blok }: Blok) => {
  const { hero_section, filter_section, more_button_text, product_section } =
    blok;

  return (
    <div {...storyblokEditable(blok)} className='min-h-full'>
      <Hero content={hero_section[0]} />
      <ProductSection
        filters={filter_section[0].filter_options}
        loadBtnTxt={more_button_text}
        sortOptions={product_section[0].sort_options}
      />
    </div>
  );
};

export default ShopPage;
