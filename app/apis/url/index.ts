import { baseStoryblokApi, token, version } from "@/constants/storyblok";

export const STORYBLOK_API = (page: string) =>
  `/${page}?version=${version}&token=${token}`;

export const SERVER_API = "";
