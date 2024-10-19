import React, { useMemo, useState } from "react";
import Filters from "../Filters";
import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "@/apis/shop.api";
import usePagination from "@/hooks/usePagination";
import Product from "../Product";
import { Button } from "@/components/ui/button";
import { Product as ProductType } from "@/types/product";
import useGetProducts from "@/hooks/shop/useGetProducts";
import { ScrollArea } from "@/components/ui/scroll-area";
interface Props {
  filters: Array<any>;
  loadBtnTxt: string;
}
export default function ProductSection({ filters, loadBtnTxt }: Props) {
  const { pagination, handlePageChange } = usePagination();
  const [currentProducts, setCurrentProducts] = useState<Array<ProductType>>(
    []
  );
  const {
    productData,
    isError,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetProducts(pagination);

  const renderProduct = useMemo(() => {
    const productPages = productData?.pages;
    if (!productPages) return [];
    return productPages.map((page, index) => (
      <div className='w-full grid grid-cols-3' key={index}>
        {page.data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    ));
  }, [productData?.pages, setCurrentProducts]);

  return (
    <div className='w-full h-full py-3 flex justify-center'>
      <div className='w-10/12 gap-3 grid grid-cols-[auto_1fr] max-h-full'>
        <Filters filters={filters} />
        <div>
          <div>{renderProduct}</div>
          <div className='w-full flex items-center justify-center p-3'>
            <Button
              variant='outline'
              disabled={!hasNextPage}
              className='uppercase text-center border-black rounded-sm'
              onClick={() => fetchNextPage()}
            >
              {hasNextPage ? loadBtnTxt : "No more item"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
