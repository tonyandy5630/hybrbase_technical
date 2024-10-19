"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import { PropsWithChildren } from "react";
import { token } from "@/constants/storyblok";
import Page from "@/components/pages";
import ShopPage from "@/components/pages/ShopPage";

storyblokInit({
  accessToken: token,
  use: [apiPlugin],
  components: {
    page: Page,
    "Shop Page": ShopPage,
  },
  apiOptions: {
    region: "us",
  },
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
