import React, { useMemo, useState } from "react";
import Filters from "../Filters";
import Product from "../Product";
import { Button } from "@/components/ui/button";
import useGetProducts from "@/hooks/shop/useGetProducts";
import LoadingProduct from "../Product/LoadingProduct";
import { Options } from "@/types/option";
import ShadSelect from "@/components/Select";
interface Props {
  filters: Array<any>;
  loadBtnTxt: string;
  sortOptions: Array<any>;
}
export default function ProductSection({
  filters,
  loadBtnTxt,
  sortOptions,
}: Props) {
  const [sortBy, setSortBy] = useState("");
  const { productData, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetProducts({ sortBy });

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
  }, [productData?.pages]);

  const formatSortOptions: Array<Options<string>> = useMemo(() => {
    const opts: Array<Options<string>> = [];
    if (!sortOptions) return opts;
    sortOptions.map((item) => {
      opts.push({
        label: item,
        value: item,
      });
    });
    return opts;
  }, [sortOptions]);

  const loadingProducts = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => <LoadingProduct key={i} />);
  }, [isLoading]);

  const onSortChange = (e: string) => {
    setSortBy(e);
  };

  return (
    <div className='w-full h-full py-3 flex justify-center'>
      <div className='w-10/12 gap-3 grid grid-cols-[auto_1fr] max-h-full'>
        <Filters filters={filters} />
        <div>
          {isError ? (
            <div className='text-red-400 w-full text-center'>
              Something went wrong
            </div>
          ) : (
            <></>
          )}
          <div>
            <div className='w-full flex justify-end items-center pr-6'>
              <ShadSelect
                options={formatSortOptions}
                placeholder='Sort'
                onValueChange={onSortChange}
                className='w-44'
              />
            </div>
            <div>{renderProduct}</div>
          </div>
          {isLoading ? (
            <div className='w-full grid grid-cols-3'>{loadingProducts}</div>
          ) : (
            <></>
          )}
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
