import Product from './Product';
import { ListContext } from "./Context";
import { useContext, useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';

const Products = () => {
        const { products, deleteProduct, setCurrentId} = useContext(ListContext);
        const [searchItem, setSearchItem] = useState('')  

        const productList= products.filter(item=>{
          if(searchItem==""){
            return item
          }else if (item.name.toLowerCase().includes(searchItem.toLowerCase())){
            return item
          }
        }).map( product => (
            <Product  key={product.id} product={product} deleteProduct={deleteProduct} setCurrentId={setCurrentId}/>
         ))

       return (
        <div className="products">
        {products.length ? 
            (
        <div>
          <div className="searchContainer">
          <AiOutlineSearch/>
          <input 
              value={searchItem}
              placeholder="Enter product name"
              onChange={(e)=>{setSearchItem(e.target.value);}}
          />
          </div>

          <div>
          <h3>Product List</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { productList}
              </tbody>
            </table>
          </div>
        </div>  ):
            (<h3 style={{textAlign: 'center', marginTop: '50px'}}>No products to show</h3>)
            } 
        </div>
    )
}

export default Products;
