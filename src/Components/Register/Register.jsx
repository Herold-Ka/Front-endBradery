
import {useForm} from 'react-hook-form'
import './Register.css'

const Register = (setRegisterData) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    setRegisterData(...data);
    console.log(data)
  };
  return (
    <div>
      <form className='signInFormRegister' onSubmit={handleSubmit(onSubmit)}>
        <div className="signInEmailPassword">
          <input type="email" placeholder='Email' {...register("email")}/>
          <input type="password" placeholder='Password' {...register("password")}/>
        </div>
        <div className="signInRegisterIdentification">
          <input type="text" placeholder='Nom' {...register("name")}/>
          <input type="text" placeholder='Prénom' {...register("firstName")}/>
        </div>
        <div className="signInRegisterPseudo">
          <input type="text" placeholder='Pseudo' {...register("username")}/>
          <input type="text" placeholder='Nom Société' {...register("company")}/>
        </div>
        <button type="submit"> Register </button>
      </form>
    </div>
  )
}

export default Register