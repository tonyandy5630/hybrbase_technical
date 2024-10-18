// development version and production version
export const version =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_STORYBLOK_LOCAL
    : process.env.NEXT_PUBLIC_STORYBLOK_PROD;

// story blok token
export const token = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

// story blok api
export const baseStoryblokApi: string =
  process.env.NEXT_PUBLIC_STORYBLOK_API ?? "";
