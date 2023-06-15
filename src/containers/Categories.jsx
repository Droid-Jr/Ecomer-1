import '../styles/containers/categories.css'
import { getProductsXCategoryThunk } from '../store/slice/product.slice'
import { useDispatch } from 'react-redux'
const Categories = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div className="container-categories">
        <div className="categories__title">
            <h2>Categories</h2>
        </div>
        <div className="categories__body">
        <button onClick={() => dispatch( getProductsXCategoryThunk(0) ) }  className='btn-category'>All Categories</button>
            {
                data.map( item => <button onClick={() => dispatch( getProductsXCategoryThunk(item.id) ) } key={item.id} className='btn-category'>{item.name}</button> )
            }
        </div>
    </div>
  )
}

export default Categories