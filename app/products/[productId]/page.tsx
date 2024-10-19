import ProductDetailPage from "@/components/pages/ProductDetailPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Product Page",
};

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return <ProductDetailPage productId={params.productId} />;
}
