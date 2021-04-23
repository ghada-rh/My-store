import React from 'react';
import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [products, setProducts] = useState([])
    const [currentId, setCurrentId] = useState(0);
    
    useEffect(() => {
      axios.get('http://localhost:5000/products')
      .then(res=>{

        setProducts(res.data);
        console.log(res.data);
      })
      .catch( err =>
         console.log(err)
      )
     }, [])
     
    const deleteProduct = (id)=>{  
      axios.delete(`http://localhost:5000/products/${id}`)
      .then(res => {
        setProducts(products.filter(product => product.id !== id)
         );
      })
      .catch(err => {
        console.log(err);
      }) }

    
    
    const addProduct =  (name, quantity, price)=>{
      axios.post('http://localhost:5000/products',
        {
          name,
          quantity,
          price,
      }
      )
      .then(res=>{
        setProducts([...products, res.data]);
      })
      .catch(err=>console.log(err))
    }

    const updateProduct = (id, n,q,p) => {
      const product= {
        name: n,
        quantity: q,
        price: p,
      }
        axios.patch(`http://localhost:5000/products/${id}`, product)
        .then(res=>{
          console.log(res.data)
          setProducts(products.map((item) => (item.id === id ? res.data : item)))
        })
        .catch(err=>console.log(err))
        
      
    };
    return (
    <ListContext.Provider
      value={{
        products,
        deleteProduct,
        addProduct,
        currentId, 
        setCurrentId,
        updateProduct
      }}
    >
      {props.children}
    </ListContext.Provider>
    )
}

export default ListContextProvider;
