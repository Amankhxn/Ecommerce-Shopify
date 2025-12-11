import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { auth } from '../Context/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ form, login, setLogin, setForm }) => {

    const { name, email, password } = form;
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in Succesfully")
            toast.success("Login Successfull")
            navigate("/");

        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    return (
        <div className='hero h-[700px] flex justify-center items-center  '>
            <div className="login  w-[340px] h-[450px] p-4 bg-white flex flex-col gap-4 justify-center rounded shadow-2xl ">
                <h1 className='text-4xl font-semibold mb-6'>Login</h1>
                <div className="inputs flex flex-col gap-4">
                    <input type="text" placeholder='Email address' value={form.email} onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))} className='inp' required />
                    <input type="password" name="password" placeholder='password' id="" value={form.password} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))} className='inp' required />
                </div>
                <button className='btn w-full bg-[#F53E3F] text-white p-3 rounded cursor-pointer  ' onClick={handleLogin} >Continue</button>

                <p>Create an Account ? <span className='text-[#F53E3F] cursor-pointer font-medium' onClick={() => {setLogin(!login) }}> Click here  </span></p>
                <div className='flex gap-4'>
                    <input type="checkbox" />
                    <p className='text-sm'>By clicking on continue i agree on terms of use & privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Login
