import React, { useState } from 'react'

const LoginRegister = () => {
    const [isSignIn,setSetIn] = useState(true)
    const handleToggle = ()=>{
       setSetIn(!isSignIn)
    }
  return (
    <div className="relative w-full h-screen bg-black">
    <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        className="hidden lg:block"
    />

    <div className="absolute inset-0 flex justify-center items-center">
        <div className="container lg:w-3/12  bg-black/80 p-6  rounded-lg flex flex-col gap-4">
        <h1 className='text-white font-bold text-2xl'>{isSignIn ? "Sign-In":"Sign-Up"}</h1>
           { !isSignIn && <input type="text" className="text-white p-2 bg-gray-800 rounded" placeholder="Enter your name" />}
            <input type="email" className="text-white p-2 bg-gray-800 rounded outline-none" placeholder="Enter your Email Address" />
            <input type="password" className="text-white outline-none p-2 bg-gray-800 rounded" placeholder="Enter your Password" />
            <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700">{isSignIn ? "Sign-In":"Sign-Up"}</button>
            <p onClick={handleToggle} className='text-white'>{isSignIn ?"New to Netflix?Sign up now.😊":"Already a member?Sign in now.🎊"}</p>
        </div>
    </div>
</div>

  )
}

export default LoginRegister