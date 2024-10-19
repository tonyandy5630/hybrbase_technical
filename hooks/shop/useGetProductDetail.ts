import { getProductDetailApi } from "@/apis/shop.api";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductDetails(id: string) {
  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/get-product-detail", id],
    queryFn: () => getProductDetailApi(id),
    refetchOnWindowFocus: false,
  });

  return {
    productData,
    isLoading,
    isError,
  };
}
