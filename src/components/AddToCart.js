import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import AmountButton from "./AmountButton";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const {addToCart} = useCartContext()
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
      setAmount((oldAmount) => {
          let tempAmount = oldAmount + 1
          if(tempAmount > stock){
              tempAmount = stock
          }
          return tempAmount
      })
  };
  const decrease = () => {
      setAmount(oldAmount => {
          let tempAmount = oldAmount - 1
          if(tempAmount < 1){
              tempAmount = 1
          }
          return tempAmount
      })
  };
  return (
    <section>
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="amount-btn">
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
        <Link to="/cart" onClick={()=> addToCart(id, mainColor, amount, product)}>Add to Cart</Link>
      </div>
    </section>
  );
};

export default AddToCart;
