import React, {useState,useEffect} from 'react'
import { ListContext } from "./Context";
import { useContext } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const { addProduct, currentId, setCurrentId, products , updateProduct } = useContext(ListContext);
    const product = currentId ? products.find((message) => message.id === currentId) : null;
  
    useEffect(() => {
        if (product) {
            setName(product.name);
            setQuantity(product.quantity);
            setPrice(product.price)
        };
      }, [product]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (currentId === 0){
            addProduct(name, quantity, price);
            setName('');
            setQuantity('');
            setPrice('');
        }
        else{
            updateProduct(currentId, name, quantity, price);
            
            setCurrentId(0);
        }
        window.location = '/';
    }
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>Add a Product</h3>
            <div className='form-control'>
                <label>Product Name</label>
                <input type='text' placeholder='Add product name..'
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                 required
                />
                
            </div>
            <div className='form-control'>
                <label>Quantity</label>
                <input type='text' placeholder='Add quantity..'
                value={quantity}
                onChange={(e)=> setQuantity(e.target.value)}
                required
               />
                
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type='text' placeholder='Add price..'
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                required
               />
                
            </div>
            <input type='submit' value='Save Product' className="btn btn-block"/>
        </form>
    )
}

export default AddProduct
