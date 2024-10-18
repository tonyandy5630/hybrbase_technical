import { Blok } from "@/types/storyblok";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useMemo } from "react";

const Page = ({ blok }: Blok) => {
  const blokBody = useMemo(() => {
    if (!blok.body) return [];

    return (blok.body as Array<any>).map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ));
  }, [blok]);

  return (
    <main {...storyblokEditable(blok)} className='text-center mt-4'>
      {blokBody}
    </main>
  );
};

export default Page;
