import {Filters, ProductList, Sort, PageHero} from '../components'



const ProductsPage = () => {
    return <main>
        <PageHero title="Products" />
        <div className="page">
        <div>
            <Filters />
            <div>
                <Sort />
                <ProductList />
            </div>
        </div>
        </div>
    </main>
}
export default ProductsPage