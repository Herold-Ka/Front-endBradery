import './ProductPayement.css'
import { useState, useEffect } from 'react';
import { useSearchContext } from '../Context/ProductContext';

const ProductPayment = () => {
  const { searchPosts } = useSearchContext();
  const [productPaymentId, setProductPaymentId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState([]);

  const handleProductQuantityChange = (index, value) => {
    const updateValues = [...productQuantity];

    updateValues[index] = value;

    setProductQuantity(updateValues)
  }

  const onClickPayment = () => {
    productPaymentId.map( (item, index) =>{
      console.log(productQuantity[index])
      fetch(`http://localhost:3000/product/buyProduct/${item.id}/${productQuantity[index]}`,{
        method: 'PUT',
      })
      
    } )
  }

  useEffect(() => {
    const request = async () => {
      try {
        let productIdPayment = [];

        // Utiliser Promise.all pour effectuer plusieurs requêtes en parallèle
        const requests = searchPosts.map(async (post) => {
          const response = await fetch(`http://localhost:3000/product/showProduct/${post.id}`, {
            method: 'GET',
          });
          const data = await response.json();
          productIdPayment.push(data.product);
        });

        await Promise.all(requests);

        setProductPaymentId(productIdPayment);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(true);
      }
    };

    

    request();
  }, [searchPosts]);

  if (loading) {
    // Consider using a loading spinner or animation here
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='divProductPayment'>
        {productPaymentId?.map((data, index) => (
          <div key={index} className='productPayment'>
            <div className="productPaymentImg">
              <img src={`./img/${data.image}`} alt="" />
            </div>
            <p>
               {data.name}
            </p>
            <div className="numberProduct"><p>Quantité: </p><input type="number" 
                                                                   value={productQuantity[index] || ''} 
                                                                   onChange={(e) => handleProductQuantityChange(index, e.target.value)} 
                                                                   name="numberProduct" id="numberProduct" 
                                                                   min="1" max="10" defaultValue="1"/></div>
          </div>
        ))}

        <div className="paymentButton">
          <button onClick={onClickPayment}>Validé la commande</button>
        </div>
    </div>
    </>
  );
};

export default ProductPayment;