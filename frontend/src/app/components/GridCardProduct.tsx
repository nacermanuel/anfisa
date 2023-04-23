import CardProduct from "@/components/CardProduct";
import { ModelProduct } from "@/models/ModelProduct";
import { fetchProducts } from "@/services/fetchProducts";

const GridCardProduct = async () => {
  
    const productos = await fetchProducts()
  
  return (
    <div className="my-3 w-full grid grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] max-[600px]:grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] justify-center gap-3">
      {productos.map((product: ModelProduct) => (
        <CardProduct key={product.id} data={product} />
      ))}
    </div>
  );
};

export default GridCardProduct;
