import CardProduct from "@/components/CardProduct";
import { ModelProduct } from "@/models/ModelProduct";
import { fetchProducts } from "@/services/fetchProducts";

interface Props {
  category?: string;
}

const GridCardProductCategory: any = async ({ category }: Props) => {
  let productos;

  if (category !== undefined) {
    const resp = await fetchProducts();
    let query = category.replace(/%20/g,' ')

    productos = resp.filter((item: any) => item.category.includes(`${query}`));
  } 

  return (
    <div>
      <div className="my-3 w-full grid grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] max-[600px]:grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] justify-center gap-3">
        {productos.map((product: ModelProduct) => (
          <CardProduct key={product.id} data={product} />
        ))}
      </div>
      <div className="my-[6rem]">
        {productos.length < 1 && (
          <div className="flex flex-col items-center">
            <div>
              <h4 className="mb-[1.5rem] text-6xl font-semibold text-pink-400">
                OOP!
              </h4>
              <p className="font-bold">
                No hemos encontrado ningún resultado para "${category}"
              </p>
              <ul className="list-disc mt-3 ml-5">
                <li>Compruebe los términos introducidos.</li>
                <li>Intenta utilizar una sola palabra.</li>
                <li>Utilice términos genéricos en la búsqueda.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCardProductCategory;
