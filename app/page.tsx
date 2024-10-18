import { Metadata } from "next";
import ShopPage from "./components/pages/shop";

export const metadata: Metadata = {
  title: "Bui Thanh Tu's Shop",
};

export default function Home() {
  return (
    <div>
      <ShopPage />
    </div>
  );
}
