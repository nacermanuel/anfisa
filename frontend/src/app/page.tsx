import SliderDataServerCategory from "@/components/SliderDataServerCategory";
import { Banner } from "./components/Banner";
import GridCardProduct from "./components/GridCardProduct";
import SliderDataServerBrand from "@/components/SliderDataServerBrand";

export default function Home(): React.ReactNode {
  return (
    <>
      <div className="h-8"></div>
      <Banner />
      <SliderDataServerCategory />
      <SliderDataServerBrand />
      <GridCardProduct />
    </>
  );
}
