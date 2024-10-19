import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product as ProductType } from "@/types/product";
import { vndFormatter } from "@/utils/currency";
import Image from "next/image";

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  return (
    <div className='p-3'>
      <Card className='flex flex-col justify-center items-center '>
        <CardHeader className='w-full'>
          <Image
            width={200}
            className='w-full h-full object-cover'
            loading='lazy'
            height={10}
            alt={`${product.name}'s Image`}
            src='https://product.hstatic.net/200000642007/product/50bks_3amth0234_2_58e81f5a00244d90b84699588a356a71_cd799d66adfe4cd1a90348483bca3a73_master.jpg'
          />
        </CardHeader>
        <CardContent className='w-full'>
          <div className='flex justify-between w-full items-center'>
            <p className='font-bold capitalize'>
              {product.name}{" "}
              <span className='font-normal lowercase'>{`(in stock: ${product.quantity})`}</span>
            </p>
            <p className='uppercase'>{product.size}</p>
          </div>
          <p className='font-bold'>{vndFormatter.format(product.price)}</p>
        </CardContent>
      </Card>
    </div>
  );
}
