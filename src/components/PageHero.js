import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <section>
      <div className="pageHero-container">
        <h3>
          <Link to="/">Home</Link> 
          {product ? <Link to="/products">/ Products </Link> : null}/ {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
