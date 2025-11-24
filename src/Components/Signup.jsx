import React from 'react'

const Signup = ({form , login , setLogin ,setForm}) => {
    return (
        <div className='hero h-[700px] flex justify-center items-center  '>
            <div className="login  w-[340px] h-[450px] p-4 bg-white flex flex-col gap-4 justify-center rounded shadow-2xl ">
                <h1 className='text-4xl font-semibold mb-6'>SignUp</h1>
                <div className="inputs flex flex-col gap-4">
                    <input type="text" placeholder='Enter you name...' value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} className='inp' />
                    <input type="text" placeholder='Email address' value={form.email} onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))} className='inp' />
                    <input type="password" name="password" placeholder='password' id="" value={form.password} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))} className='inp' />
                </div>
                <button className='btn w-full bg-[#F53E3F] text-white p-3 rounded cursor-pointer  ' >Continue</button>

                <p>Already have an Account ? <span className='text-[#F53E3F] cursor-pointer font-medium' onClick={() => setLogin(!login)}> Login here  </span></p>
                <div className='flex gap-4'>
                    <input type="checkbox" />
                    <p className='text-sm'>By clicking on continue i agree on terms of use & privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Signup
