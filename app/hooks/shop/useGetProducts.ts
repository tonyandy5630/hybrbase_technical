import { getProductsApi } from "@/apis/shop.api";
import { PaginationType } from "@/types/pagination";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function useGetProducts(pagination: PaginationType) {
  const {
    data: productData,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["/get-products"],
    queryFn: ({ pageParam = 1 }) => getProductsApi(pageParam),
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.length > 0 ? pages.length + 1 : undefined;
    },
  });

  return {
    productData,
    isLoading: isFetchingNextPage || isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  };
}
