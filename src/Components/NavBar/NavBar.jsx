import './NavBar.css'
import {Link} from 'react-router-dom'
import { BsFillBasket3Fill } from "react-icons/bs";

const NavBar = () => {
    
  return (
    <div className='divNavBar'>
          <Link to="/"><img src="./img/Noir et Or Cercle Immobilier Logo.png" alt="logo" /></Link>
          <div className='divUserBasket'>
            <Link to="productepayment"><BsFillBasket3Fill className='basketIcon' color='white' fontSize="47px"/></Link> 
            <Link to="signin" className='signInButton'>SignIn</Link>        
          </div>
    </div>
    
    
  )
}

export default NavBar