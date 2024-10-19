import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getStoryblokApi } from "@storyblok/react/rsc";

const getStoryblok = async () => {
  const storyblokApi = getStoryblokApi();

  const data = await storyblokApi.get(
    `cdn/stories/layout`,
    { version: "draft" },
    {
      cache: "no-store",
    }
  );

  const body = await data.data.story.content.body;

  return {
    header: body[0],
    footer: body[1],
  };
};

export default async function Layout({ children }: PropsWithChildren) {
  const { header, footer } = await getStoryblok();

  return (
    <>
      <Header title={header.title_txt} navItems={header.nav_section} />
      <main className='min-h-lvh min-w-screen'>{children}</main>
      <Footer content={footer} />
    </>
  );
}
