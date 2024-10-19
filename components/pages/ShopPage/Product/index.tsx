import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product as ProductType } from "@/types/product";
import { vndFormatter } from "@/utils/currency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  product: ProductType;
  isDisplayGrid: boolean;
}

export default function Product({ product, isDisplayGrid }: Props) {
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();
  const handleToggleOverlay = () => {
    setShowOverlay((prev) => !prev);
  };

  const handleNavigateToDetail = (id: string) => {
    router.push("/products/" + id);
  };
  if (isDisplayGrid) {
    return (
      <div
        className='p-3'
        onMouseEnter={() => handleToggleOverlay()}
        onMouseLeave={() => handleToggleOverlay()}
        onClick={() => handleNavigateToDetail(product.id)}
      >
        <Card className='flex flex-col justify-center items-center relative cursor-pointer'>
          <CardHeader className='w-full h-80'>
            <Image
              width={1000}
              className='w-full h-full object-cover'
              loading='lazy'
              height={1100}
              alt={`${product.name}'s Image`}
              src={product.imageUrl}
            />
          </CardHeader>
          <CardContent className='w-full'>
            <div className='flex justify-between w-full items-center'>
              <div>
                <p className='font-bold capitalize'>{product.name} </p>
                <p className='font-normal text-sm'>{`In stock: ${product.quantity}`}</p>
              </div>
              <p className='uppercase'>{product.size}</p>
            </div>
            <p className='font-bold'>{vndFormatter.format(product.price)}</p>
          </CardContent>
          {showOverlay ? (
            <div className='bg-black/50 inset-0 absolute transition-all duration-150 ease-in flex justify-center items-center'>
              <Button className='bg-transparent text-white shadow-none text-2xl'>
                Details
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
    );
  } else {
    return (
      <div className='flex justify-start items-start gap-2 flex-1 w-full'>
        <div className='w-40'>
          <Image
            width={900}
            className='w-full h-full object-cover'
            loading='lazy'
            height={1000}
            alt={`${product.name}'s Image`}
            src={product.imageUrl}
          />
        </div>
        <div className='flex justify-between items-start w-full h-full'>
          <div className='flex-col flex justify-between items-start min-h-full'>
            <p className='font-bold capitalize text-2xl'>{product.name} </p>
            <p className='font-bold'>{vndFormatter.format(product.price)}</p>
          </div>
          <p className='font-normal text-sm'>{`In stock: ${product.quantity}`}</p>
        </div>
      </div>
    );
  }
}
