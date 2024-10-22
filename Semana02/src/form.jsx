import { useForm } from 'react-hook-form'; 
import { useState } from 'react';

import './form.css'

const Form = ()=> {

  const {register, handleSubmit, reset, formState:{errors} } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) =>{
      console.log(data)
      setIsSubmitted(true)
      reset()
    }

  return (
    <>
      <h2>Registrar</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id='name'
            {...register('name', { required: "Nome é obrigatório!"})} 
          />
        {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id='email'
            {...register('email', { required: "E-mail é obrigatório!"})}  

          />
        {errors.email && <p>{errors.email.message}</p>}
        
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id='password'
            {...register('password', { required: "Senha é obrigatória!"})}  
             
          />
       
        </div>

        <button type='submit'>Registrar</button>
      </form>
      {errors.password && <p>{errors.password.message}</p>}

      {isSubmitted && <p>Registro realizado com sucesso!</p>}
    </>
  );

}
 
  

 


export default Form;
