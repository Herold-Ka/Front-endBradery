import './Purchase.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Purchase = () => {
  const nav = useNavigate();

  useEffect(() => {
    
    setTimeout(() => nav('/'), 3000);
  }, [])
  return (
    <div className='divPurchase'>
      <h1>Thank you for your purchase</h1>
      <p>Your order was completed succesfully</p>
    </div>
  )
}

export default Purchase