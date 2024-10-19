import { getProductsApi } from "@/apis/shop.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetProducts({
  sortBy,
  filter,
}: {
  sortBy?: string;
  filter?: string;
}) {
  const {
    data: productData,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["/get-products", sortBy, filter],
    queryFn: ({ pageParam }) => getProductsApi(pageParam, filter, sortBy),
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
