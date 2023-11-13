//import React from 'react'
//import {useForm} from 'react-hook-form'
import './Connexion.css'

const Connexion = () => {
  //const {register, handleSubmit} = useForm(); 
  return (
    <div>
      <form className='signInFormConnexion'>
        <div className="signInDivConnexion">
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button type='button' className='connexionButton'> Connexion </button>
      </form>
    </div>
  )
}

export default Connexion