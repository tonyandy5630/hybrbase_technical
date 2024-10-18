import { baseStoryblokApi, token, version } from "@/constants/storyblok";
import React, { PropsWithChildren, useMemo } from "react";

interface Props extends PropsWithChildren {
  navItems: Array<any>;
  title: string;
}

export default async function Header({ children, navItems, title }: Props) {
  const navs = useMemo(() => {
    return navItems.map((item) => (
      <li>
        <a href={"/" + item.url_text} key={item._uid}>
          {item.text}
        </a>
      </li>
    ));
  }, [navItems]);
  return (
    <header className='sticky p-3 top-0 w-full h-20 flex justify-start items-center gap-3 bg-black text-white'>
      <h1 className='capitalize font-bold text-2xl'>{title}</h1>
      <ul className='flex justify-between items-center gap-3'>{navs}</ul>
    </header>
  );
}
