
import Header from './Components/Header';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import ListContextProvider from './Components/Context'
import './style.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
    
  return (
    <Router>
      <ListContextProvider> 
      <div className="container">
       
        <Route exact path='/' render={(props)=>(
          <> 
            <Header/>
            <Products />
            <Footer/>
          </>
          )}
        />
        <Route path="/add" component={AddProduct}/>
        
      </div>
      </ListContextProvider>
    </Router>
  )
}

export default App
