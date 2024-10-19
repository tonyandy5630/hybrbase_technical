"use client";

import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import useGetProductDetails from "@/hooks/shop/useGetProductDetail";
import { Product } from "@/types/product";
import { vndFormatter } from "@/utils/currency";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoadingProduct from "./LoadingProduct";

interface Props {
  productId: string;
}
export default function ProductDetailPage({ productId }: Props) {
  const [product, setProduct] = useState<Product>();
  const { productData, isLoading, isError } = useGetProductDetails(productId);
  useEffect(() => {
    const productDetail = productData?.data;
    if (!productDetail) return;

    setProduct(productDetail);
  }, [productData?.data]);

  if (isLoading) {
    return <LoadingProduct />;
  }

  if (isError) {
    return (
      <PageContainer>
        <div className='page-inset flex justify-center items-center '>
          <h1 className='text-4xl text-red-500'>Something went wrong</h1>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className='page-inset flex justify-start gap-24 items-start'>
        {product && (
          <>
            <div className='w-[40rem] h-[40rem] border'>
              <Image
                width={900}
                height={1000}
                className='w-full object-cover'
                src={product.imageUrl}
                alt={`${product.name}'s image`}
              />
            </div>
            <div className='flex flex-col items-start justify-start min-w-56 gap-10'>
              <div>
                <h4 className='text-4xl'>{product.name}</h4>
                <p className='text-2xl'>{vndFormatter.format(product.price)}</p>
              </div>
              <p className='w-72 text-xl'>{product.description}</p>
              <div className='flex items-center gap-3'>
                Size:
                <p className='p-3 border w-10 h-10 flex justify-center items-center'>
                  {product.size}
                </p>
              </div>
              <div className='flex items-center gap-3'>
                Stock:
                <span className='font-bold'>{product.quantity}</span>
              </div>
              <div>
                <Button disabled>Add to Cart</Button>
              </div>
            </div>
          </>
        )}
      </div>
      ;
    </PageContainer>
  );
}
