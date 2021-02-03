import { useProductContext } from "../context/product_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
  const {
    feature_products,
    productsLoading,
    productsError,
  } = useProductContext();
  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }
  return (
    <section>
      <div className="section-container">
        <div className="title">
          <h3>Feature Products</h3>
          <div className="underline"></div>
        </div>
        <div className="feature-container">
          {feature_products.map((fp) => {
            return <Product key={fp.id} {...fp} />;
          })}
        </div>
      </div>
      <Link to='/products'>all products</Link>
    </section>
  );
};
export default FeatureProducts;
