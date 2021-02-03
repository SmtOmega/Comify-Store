import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ListView = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        const { id, image, description, price, name } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`products/${id}`}>Details</Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
