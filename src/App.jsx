import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Products from './Pages/Products'
import ProductPayment from './Pages/ProductPayment'
import SignIn from './Pages/SignIn'
import { SearchProvider } from './Context/ProductContext'
import Purchase from './Pages/Purchase'
import Product from './Pages/Products'


function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      <SearchProvider>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/productepayment' element={<ProductPayment/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/purchase' element={<Purchase/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>
      </SearchProvider>
      </BrowserRouter> 
    </div>
  )
}

export default App
