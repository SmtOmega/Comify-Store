import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      shipping,
      maxPrice,
      minPrice,
      price,
      company,
      color,
    },
    updateFilter,
    allProducts,
    clearFilter,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");
  return (
    <section>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search"
              name="text"
              value={text}
              onChange={updateFilter}
            />
          </div>
          <div>
            <h5>Categories</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button key={index} name="category" onClick={updateFilter}>
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <select name="company" value={company} onChange={updateFilter}>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h5>Colors</h5>
            <div>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      data-color="all"
                      onClick={updateFilter}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    data-color={c}
                    onClick={updateFilter}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h5>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilter}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          <div>
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              checked={shipping}
              onChange={updateFilter}
            />
          </div>
        </form>
        <button onClick={clearFilter}>Clear Filter</button>
      </div>
    </section>
  );
};

export default Filters;
