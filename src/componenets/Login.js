import React from 'react'
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/login.css'


const Login = () => {
    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(email === " " || password === "" ){  
            swal("Los campos no pueden estar vacios");
            return
        }

        if(email !== " " && !regexEmail.test(email)) {
            swal("Debes escribir una direccion de email valida")          
            return  
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){ 
            swal("credenciales invalidas")
            return
        }

        console.log("ok para enviar info")

        axios.post('http://challenge-react.alkemy.org',{email , password})
        .then(res=>{
            swal(<h2>
                Ingresaste Correctamente
            </h2>)
            const tokenRecibido = res.data.token
            sessionStorage.setItem('token', tokenRecibido)
            console.log(res.data)
            navigate("/listado")

        })
    }

    let token = sessionStorage.getItem("token")

  return (
    <>
        { token && <Navigate to="/listado"/>}

        <div className='divFormLogin'>
            <h1>Formulario Login</h1>
            <form onSubmit={submitHandler} >
                <label>
                    <span>Correo Electronico</span> 
                    <input type="text" name="email" />
                </label>
                <br/>
                <label>
                    <span>Contraseña</span>
                    <input type="password" name="password"/>
                </label>
                <br/>
                <br/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    </>
  )
}

export default Login