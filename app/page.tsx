import Product from "@/components/Product";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Каталог товаров
        </h1>
        <p className="text-gray-500 text-lg">
          Это серверный компонент, который передает данные клиентскому списку.
        </p>
      </div>

      {}
      <Product products={products} />
    </main>
  );
}
