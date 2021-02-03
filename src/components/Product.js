import { FaSearch } from "react-icons/fa"
import {Link} from 'react-router-dom'
import {formatPrice} from '../utils/helpers'

const Product = ({image, name, price, id}) => {
    return <article>
        <div className="product-container">
            <img src={image} alt={name} />
            <Link to={`products/${id}`} >
                <FaSearch />
            </Link>
        </div>
        <footer>
            <h5>{name}</h5>
            <p>{formatPrice(price)}</p>
        </footer>
    </article>
}

export default Product