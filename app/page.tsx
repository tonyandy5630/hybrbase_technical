import { Metadata } from "next";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Bui Thanh Tu's Shop",
};

export default async function Home() {
  const { data } = await fetchData();
  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(
    `cdn/stories/shop-page`,
    { version: "draft" },
    { cache: "no-store" }
  );
}
