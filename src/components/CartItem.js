import { FaTrash } from "react-icons/fa"
import { useCartContext } from "../context/cart_context"
import {formatPrice} from '../utils/helpers'
import AmountButton from './AmountButton'


const CartItem = ({name, id, image, price, amount, color}) => {
    const {removeItem, toggleAmount} = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    return <article>
        <div>
            <img src={image} alt={name} />
            <div>
                <h5>{name}</h5>
                <p> color : <span style={{background: color}}></span></p>
                <h5>{formatPrice(price)}</h5>
            </div>
        </div>
        <h5>{formatPrice(price)}</h5>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
        <h5>{formatPrice(price * amount)}</h5>
        <button onClick={() => removeItem(id)}><FaTrash /></button>
    </article>
}

export default CartItem