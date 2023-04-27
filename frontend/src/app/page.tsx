import SliderDataServerCategory from "@/components/SliderDataServerCategory";
import { Banner } from "./components/Banner";
import GridCardProduct from "./components/GridCardProduct";
import SliderBrand from "@/components/SliderBrand";
import SliderCategory from "@/components/SliderCategory";
import SliderDataServerBrand from "@/components/SliderDataServerBrand";

export default function Home(): React.ReactNode {
  return (
    <>
      <div className="h-8"></div>
      <Banner />
      {/* <SliderCategory/> */}
      {/* <SliderBrand /> */}
      <SliderDataServerCategory />
      <SliderDataServerBrand />
      <GridCardProduct />
    </>
  );
}
