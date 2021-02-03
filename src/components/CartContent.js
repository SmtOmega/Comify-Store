import { Link } from "react-router-dom"
import { useCartContext } from "../context/cart_context"
import CartColumns from "./CartColumns"
import CartItem from "./CartItem"
import CartTotal from "./CartTotal"


const CartContent = () => {
    const {cart, clearCart} = useCartContext()
    return <section>
        <CartColumns />
        {
            cart.map(item => {
                return <CartItem key={item.id} {...item}/>
            })
        }
        <hr />
        <Link to='/products'>
            continue shopping
        </Link>
        <button onClick={clearCart}>Clear Shopping Cart</button>
        <CartTotal />
    </section>
}

export default CartContent