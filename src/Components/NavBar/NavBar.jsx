import './NavBar.css'
import {Link} from 'react-router-dom'
import { BsFillBasket3Fill } from "react-icons/bs";
import { useSearchContext } from '../../Context/ProductContext';

const NavBar = () => {
  const { searchPost } = useSearchContext();
  console.log(searchPost)

  return (
    <div className='divNavBar'>
      <Link to="/">
        <img src="./img/Noir et Or Cercle Immobilier Logo.png" alt="logo" />
      </Link>
      <div className='divUserBasket'>
        <Link to="productepayment">
          <BsFillBasket3Fill className='basketIcon' color='white' fontSize="47px"/>
        </Link> 
        {searchPost && searchPost != undefined ? (
          <div className='productsArrayLenght'>{searchPost.length}</div>
        ) : <></>}
        <Link to="signin" className='signInButton'>SignIn</Link>        
      </div>
    </div>
  );
};

export default NavBar