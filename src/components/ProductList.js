import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from './ListView'
const ProductList = () => {
  const { filterProduct: products, gridView } = useFilterContext();

  if(products.length < 1){
      return <h5>The Item you are looking for is not available...</h5>
  }

  if(gridView === false){
      return <ListView products={products}/>
  }
  return <GridView products={products} />;
};
export default ProductList;
