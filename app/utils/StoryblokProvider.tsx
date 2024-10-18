"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Navigation from "@/components/layout/Navigation";

import { PropsWithChildren } from "react";
import { token } from "@/constants/storyblok";
import Header from "@/components/layout/Header";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: token,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
