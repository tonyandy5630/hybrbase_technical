import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductFallback() {
  return (
    <Card className='flex flex-col justify-center items-center '>
      <CardHeader className='w-full'>
        <Skeleton className='w-8 h-36' />
      </CardHeader>
      <CardContent className='w-full'>
        <div className='flex justify-between w-full items-center'>
          <Skeleton className='w-full h-full' />
        </div>
        <Skeleton className='w-full h-full' />
      </CardContent>
    </Card>
  );
}
