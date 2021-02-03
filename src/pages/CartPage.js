import { CartContent, PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
import {Link} from 'react-router-dom'
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products"> Fill it</Link>
        </div>
      </main>
    );
  }
  return <main>
      <PageHero title='Cart' />
      <div className="page">
        <CartContent />
      </div>
  </main>;
};

export default CartPage;
