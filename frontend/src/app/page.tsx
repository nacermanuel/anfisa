
import { FilterBarBrand } from "./components/FilterBarBrand";
import { FilterBarCategory } from "./components/FilterBarCategory";

export default function Home(): React.ReactNode {
  return (
    <>
    <div className="h-8"></div>
      <FilterBarCategory/>
      <FilterBarBrand/>
    </>
  );
}
