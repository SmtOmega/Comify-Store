import {
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useProductContext } from "../context/product_context";
import { useUserContext } from "../context/userContext";

const CartButton = () => {
  const { closeSideBar } = useProductContext();
  const { totalItems } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <div className="cart-btn-container">
      <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
        Cart
        <span>
          <FaShoppingCart />
        </span>
        <span>{totalItems}</span>
      </Link>
      {myUser ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout <FaUserMinus />
        </button>
      ) : (
        <button onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButton;
