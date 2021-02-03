import Product from './Product'


const GridView = ({products}) => {
    return <section>
        <div>
            {products.map(product => {
                return <Product key={product.id} {...product}/>
            })}
        </div>
    </section>
}

export default GridView