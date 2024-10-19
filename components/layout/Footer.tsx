import React from "react";

interface Props {
  content: any;
}

export default function Footer({ content }: Props) {
  return (
    <footer className='w-full flex h-20 justify-center items-center gap-1 bg-black text-white'>
      <p>{content.title}</p>
      <p>{content.year}</p>
    </footer>
  );
}
