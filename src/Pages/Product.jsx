import "./Product.css"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"; 


const Product = () => {
  const [product, setProduct] = useState(); 
  const location = useLocation();

  const request = async () => {
    try {
      console.log(location.state.key);
      const response = await fetch(`http://localhost:3000/product/showProduct/${location.state.key}`);
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  }
  useEffect(() => {
    request(),
    console.log(product);
  }, []);
  

  return (
    <div className="divSingleProduct">
      {product ? (
        <>
        <img src={`./img/${product.image}`} alt={`image: ${product.name}`} />
        <p className="productName">{product.name}</p>
        <ul className="productInfo">
          <li className="productPrice">{product.price} €</li>
          <li>{product.inventory != 0 ? (<p className="productDisponiblity">Disponible</p>) : (<p className="productDisponiblity">Indisponible</p>)}</li>
          <li className="productAdd">Ajouter</li>
        </ul>
        </>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  )
}

export default Product