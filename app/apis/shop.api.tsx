import { baseStoryblokApi } from "../constants/storyblok";
import Http from "../utils/http";
import { STORYBLOK_API } from "./url";

const storyBlokHttp = new Http(baseStoryblokApi).instance;

export const getStoryblokShopPage = () =>
  storyBlokHttp.get(STORYBLOK_API("shop-page"));
