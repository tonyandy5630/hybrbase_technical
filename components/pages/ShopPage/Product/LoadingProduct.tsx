import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface Props {
  isDisplayGrid: boolean;
}
export default function LoadingProduct({ isDisplayGrid }: Props) {
  if (isDisplayGrid) {
    return (
      <div className='flex flex-col justify-center items-start p-3'>
        <Skeleton className='w-full h-40 mb-1' />
        <div className='flex flex-col w-full gap-1'>
          <Skeleton className='w-full h-4' />
          <Skeleton className='w-full h-4' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex justify-start items-start gap-2 flex-1 w-full'>
        <Skeleton className='w-40 h-40' />
        <div className='flex justify-between items-start w-full flex-col flex-1 gap-2'>
          <Skeleton className='w-full h-8' />
          <Skeleton className='w-full h-8' />
        </div>
      </div>
    );
  }
}
