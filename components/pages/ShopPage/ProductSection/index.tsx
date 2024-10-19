import React, { useMemo, useState } from "react";
import Filters from "../Filters";
import Product from "../Product";
import { Button } from "@/components/ui/button";
import useGetProducts from "@/hooks/shop/useGetProducts";
import LoadingProduct from "../Product/LoadingProduct";
import { Options } from "@/types/option";
import ShadSelect from "@/components/Select";
import { GridIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import PageContainer from "@/components/PageContainer";

interface Props {
  filters: any;
  loadBtnTxt: string;
  sortOptions: Array<any>;
}

export default function ProductSection({
  filters,
  loadBtnTxt,
  sortOptions,
}: Props) {
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState(""); //* state for sorting
  const [productTypeFilter, setProductTypeFilter] = useState(""); //* state for product filtering
  const { productData, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetProducts({ sortBy, filter: productTypeFilter }); //* fetch product

  const renderProduct = useMemo(() => {
    const productPages = productData?.pages;
    if (!productPages) return [];
    return productPages.map((page, index) => (
      <div
        className={`${isGrid ? "product-grid" : "product-list"}`}
        key={index}
      >
        {page.data.map((product) => (
          <Product key={product.id} product={product} isDisplayGrid={isGrid} />
        ))}
      </div>
    ));
  }, [productData?.pages, isGrid]);

  const formatSortOptions: Array<Options<string>> = useMemo(() => {
    const opts: Array<Options<string>> = [];
    if (!sortOptions) return opts;
    sortOptions.map((item) => {
      opts.push({
        label: item,
        value: item,
      });
    });

    opts.push({
      label: "No sort",
      value: "|",
    });
    return opts;
  }, [sortOptions]);

  const loadingProducts = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => (
      <LoadingProduct key={i} isDisplayGrid={isGrid} />
    ));
  }, [isGrid]);

  const handleSortChange = (e: string) => {
    setSortBy(e);
  };

  const handleFilterProductType = (e: string) => {
    setProductTypeFilter(e);
  };

  const handleResetFilter = () => {
    setProductTypeFilter("");
  };

  const handleGridChange = () => {
    setIsGrid((prev) => !prev);
  };

  return (
    <PageContainer>
      <div className='page-inset gap-3 grid grid-cols-[auto_1fr] max-h-full'>
        <Filters
          onReset={handleResetFilter}
          filters={filters}
          onValueChange={handleFilterProductType}
          value={productTypeFilter}
        />
        <div>
          {isError ? (
            <div className='text-red-400 w-full text-center'>
              Something went wrong
            </div>
          ) : (
            <></>
          )}
          <div>
            <div className='w-full flex justify-end items-center pr-6 gap-1'>
              <ShadSelect
                options={formatSortOptions}
                placeholder='Sort'
                onValueChange={handleSortChange}
                className='w-44'
              />
              <Button onClick={handleGridChange} variant='outline'>
                {isGrid ? <HamburgerMenuIcon /> : <GridIcon />}
              </Button>
            </div>
            <div>{renderProduct}</div>
          </div>
          {isLoading ? (
            <div className={`${isGrid ? "product-grid" : "product-list"}`}>
              {loadingProducts}
            </div>
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
    </PageContainer>
  );
}
