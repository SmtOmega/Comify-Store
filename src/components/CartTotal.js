import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const CartTotal = () => {
  const { totalAmount, shippingFees } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <section>
      <div>
        <article>
          <h5>
            Subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            Shipping Fees : <span>{formatPrice(shippingFees)}</span>
          </p>
          <hr />
          <h4>
            Order Total : <span>{formatPrice(totalAmount + shippingFees)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout">proceed to checkout</Link>
        ) : (
          <button onClick={loginWithRedirect}>Login</button>
        )}
      </div>
    </section>
  );
};

export default CartTotal;
