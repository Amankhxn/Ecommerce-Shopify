import React, { useState } from 'react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const LoginSignup = () => {


  const [form, setForm] = useState({
    name: "",
    password: "",
    email: ""
  })

  const [login, setLogin] = useState(false);

  return (
    <>
      {
        login === true ? <Login form={form} login={login} setLogin={setLogin} /> : <Signup form={form} login={login} setLogin={setLogin} />
      }



    </>
  )
}

export default LoginSignup
