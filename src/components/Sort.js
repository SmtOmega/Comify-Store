import {useFilterContext} from '../context/filter_context'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useProductContext } from '../context/product_context'


const Sort = () => {
    const {products} = useProductContext()
    const {setGridView, setListView, sort, updateSort} = useFilterContext()
    return <section>
        <div className="sort-btn-container">
            <button onClick={setGridView}><BsFillGridFill /></button>
            <button onClick={setListView}><BsList /></button>
        </div>
        <p>{products.length} products found</p>
        <hr />
        <form>
            <label htmlFor="sort"> sort by</label>
            <select name="sort" id="sort" value={sort} onChange={updateSort}>
                <option value='price-lowest'>price (lowest)</option>
                <option value='price-highest'>price (highest)</option>
                <option value='name-a'>name (a-z)</option>
                <option value='name-z'>name (z-a)</option>
            </select>
        </form>
    </section>
}
export default Sort