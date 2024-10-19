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
    <header className='sticky top-0 w-full flex justify-center items-center h-20 z-50 bg-black text-white'>
      <div className='w-10/12 flex justify-start items-center gap-3'>
        <a href='/' className='capitalize font-bold text-2xl'>
          {title}
        </a>
        <ul className='flex justify-between items-center gap-3'>{navs}</ul>
      </div>
    </header>
  );
}
