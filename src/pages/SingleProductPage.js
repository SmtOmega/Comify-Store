import { useProductContext } from "../context/product_context";
import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constants";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  PageHero,
  ProductImages,
  Stars,
  Loading,
  Error,
  AddToCart,
} from "../components";
import { useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct,
    fetchSingleProduct,
  } = useProductContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
     // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
     // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    stars,
    description,
    stock,
    images,
    reviews,
    company,
    id: sku,
  } = singleProduct;
  return (
    <main>
      <PageHero title={name} product={singleProduct} />
      <div className="page singProd-container">
        <Link to="/products">Back to products</Link>
        <div className="products-container">
          <ProductImages images={images}/>
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            <h5>{formatPrice(price)}</h5>
            <p>{description}</p>
            <p>
              <span>Available: </span>
              {stock > 0 ? "In stock" : "Out of Stock"}
            </p>
            <p>
              <span>SKU: </span>
              {sku}
            </p>
            <p>
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct}/>}
          </section>
        </div>
      </div>
    </main>
  );
};
export default SingleProductPage;
