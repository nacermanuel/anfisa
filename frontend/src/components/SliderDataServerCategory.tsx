import { fetchCategories } from "@/services/fetchCategories";
import SliderCategory from "./SliderCategory";

const SliderDataServerCategory: any = async () => {
  const category = await fetchCategories();

  return (
    <div>
      <SliderCategory data={category} />
    </div>
  );
};

export default SliderDataServerCategory;
