import {Link} from "react-router-dom";

const Header = () => {
    
    return (
        <header className='header'>
            <h1>MyStore App</h1>
            <Link to="/add" style={{ textDecoration:'none'}}>
                <button className='btn' style={{backgroundColor: 'rgb(153, 51, 255)'}}>
                  Add
                </button>
            </Link>
        
        </header>
    )
}


export default Header
