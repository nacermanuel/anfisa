import SliderCategory from "@/app/components/SliderCategory";
import { Banner } from "./components/Banner";
import GridCardProduct from "./components/GridCardProduct";
import SliderBrand from "@/app/components/SliderBrand";

export default function Home(): React.ReactNode {
  return (
    <>
      <div className="h-8"></div>
      <Banner />
      <SliderCategory/>
      <SliderBrand/>
      <GridCardProduct />
    </>
  );
}
