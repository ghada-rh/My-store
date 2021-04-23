import { FaTimes, FaEdit} from 'react-icons/fa';
import {Link} from "react-router-dom";

const Product = ({product, deleteProduct, setCurrentId}) => {
    
    return (
        <>
        <tr>
         <td>{product.name}</td>
         <td style={{ paddingLeft:'35px'}}>{product.quantity}</td>
         <td>{`${product.price} €`}</td>
         <td>
         <Link to="/add" style={{ textDecoration:'none'}}>
             <FaEdit style={{color :'gray', cursor:'pointer', margin:'0px 7px'}}
            onClick={() => {setCurrentId(product.id)}}/>
            </Link>    
          |
         <FaTimes style={{color :'rgb(153, 51, 255)', cursor:'pointer', marginLeft:'7px'}}
            onClick={() => {deleteProduct(product.id)}}
            />     
        </td>
        </tr> 
        </>
    )
}

export default Product
