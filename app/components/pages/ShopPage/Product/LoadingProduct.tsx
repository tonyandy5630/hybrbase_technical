import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingProduct() {
  return (
    <div className='flex flex-col justify-center items-start p-3'>
      <Skeleton className='w-full h-40 mb-1' />
      <div className='flex flex-col w-full gap-1'>
        <Skeleton className='w-full h-4' />
        <Skeleton className='w-full h-4' />
      </div>
    </div>
  );
}
