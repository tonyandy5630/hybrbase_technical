import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product as ProductType } from "@/types/product";
import { vndFormatter } from "@/utils/currency";
import Image from "next/image";

interface Props {
  product: ProductType;
  isDisplayGrid: boolean;
}

export default function Product({ product, isDisplayGrid }: Props) {
  if (isDisplayGrid) {
    return (
      <div className='p-3'>
        <Card className='flex flex-col justify-center items-center'>
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
