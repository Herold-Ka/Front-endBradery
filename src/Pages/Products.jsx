import {useState, useEffect} from 'react'
import './Products.css'
import { useSearchContext } from '../Context/ProductContext'; 
import { useNavigate } from 'react-router-dom';

const Products = () => {
const [productCard, setProductCard] = useState([]);
const { addNewPost } = useSearchContext();
let navigate = useNavigate();
const onClickProduct = (id) =>
    addNewPost({ id });

    const routeChange = (id) => {
      let path = `/product`;
      navigate(path, {state:{key: id}})
    }
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
              <li className='productName' onClick={() => {routeChange(item.id)}}>{item.name}</li>
            </ul>
            <ul className='productInfo'>
                  <li>{item.price} €</li>                 
                  <li>{item.inventory != 0 ? (<p className="productDisponiblity">Disponible</p>) : (<p className="productDisponiblity">Indisponible</p>)}</li>
                  {item.inventory != 0 ? (<li className='productAdd' onClick={() => onClickProduct(item.id)}>Ajouter</li>) : (<li className='productAdd'>Indisponible</li>)}
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