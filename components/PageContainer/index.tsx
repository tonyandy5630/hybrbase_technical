import React, { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className='w-full min-h-full py-3 flex justify-center'>{children}</div>
  );
}
