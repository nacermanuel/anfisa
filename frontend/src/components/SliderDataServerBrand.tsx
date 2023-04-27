import { fetchBrands } from "@/services/fetchBrand";
import SliderBrand from "./SliderBrand";

const SliderDataServerBrand: any = async () => {
  const brands = await fetchBrands();

  return (
    <div>
      <div>
        <SliderBrand data={brands} />
      </div>
    </div>
  );
};

export default SliderDataServerBrand;
