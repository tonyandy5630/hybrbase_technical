import PageContainer from "@/components/PageContainer";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingProduct() {
  return (
    <PageContainer>
      <div className='page-inset flex justify-start gap-24 items-start'>
        <Skeleton className='w-[40rem] h-[40rem]' />
        <div className='flex flex-col items-start justify-start w-80 gap-10'>
          <div className='w-full h-full flex flex-col items-start gap-2 '>
            <Skeleton className='w-full h-10' />
            <Skeleton className='w-7/12 h-10' />
          </div>
          <Skeleton className='w-full h-36 ' />
          <Skeleton className='w-full h-20' />
          <Skeleton className='w-full h-20' />
        </div>
      </div>
    </PageContainer>
  );
}
