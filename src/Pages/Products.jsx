import {useState, useEffect} from 'react'
import './Products.css'
import { useSearchContext } from '../Context/ProductContext'; 
//import { useNavigate } from 'react-router-dom';

const Products = () => {
const [productCard, setProductCard] = useState([]);
const { addNewPost } = useSearchContext();
//let navigate = useNavigate();
const onClickProduct = (id) =>
    addNewPost({ id });

    /*const routeChange = () => {
      let path = `/product`;
      navigate(path, )
    }*/
    const request = () => {
      fetch("http://localhost:3000/product/showProducts", {method:'Get'})
    .then(res => res.json())
    .then(data => {
      setProductCard(data.products)
    });
    }

    useEffect(() => {
      request();
    }, [])

    
  
  return (
    <div>
      <div className='productTopImg'>
        <img src="./img/shop.png" alt="imgShop" />
      </div>
      <div className='divProduct'>
        {
          productCard?.map((item, index) => (
            <>
            <div className='divCardProduct' key={index}>
            <ul className='productImgName'>
              <li><div className='productImg'><img  src={`./img/${item.image}`} alt={item.name} /></div></li>
              <li className='productName' >{item.name}</li>
            </ul>
            <ul className='productInfo'>
                  <li>{item.price} €</li>                 
                  <li>Disponible</li>
                  <li className='productAdd' onClick={() => onClickProduct(item.id)}>Ajouter</li>
                </ul>
            </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Products