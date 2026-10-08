"use client"
import { Product } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{product.price.toLocaleString("ru-RU")} ₽</p>
          </CardContent>
          <CardFooter>
            {}
            <button 
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => alert(`Товар "${product.name}" добавлен в корзину!`)}
            >
              В корзину
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}