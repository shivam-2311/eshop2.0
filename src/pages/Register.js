import { useState } from "react"
import { FaRegEnvelope, FaUserAlt } from "react-icons/fa"
import { MdLockOutline, MdTextSnippet } from "react-icons/md";
import { register } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    console.log({ name, lastname, username, email, password, cpassword })
    register(dispatch, { name, lastname, username, email, password, cpassword })
    // navigate('/')

  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-20 text-center font-serif">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 ">

          <div className='py-10 text-center'>
            <h2 className='text-3xl font-bold text-blue-500 mb-2 font-serif'>Register your Account</h2>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2 "></div>
            <div className="flex flex-col items-center mt-4">
              <div className='bg-gray-100 w-64 p-2 flex items-center  mb-3'>
                <FaUserAlt className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaUserAlt className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="text" placeholder="Lastname" onChange={(e) => { setLastname(e.target.value) }} />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdTextSnippet className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
              </div>

              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="Email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
              </div>

              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-gray-400 m-2' />
                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="password" placeholder="Confirm Password" onChange={(e) => { setCPassword(e.target.value) }} />
              </div>
              <button onClick={handleClick} className="border-2 border-blue-500 mt-4 rounded-full bg-blue-500 text-white px-16 py-5 inline-block font-bold text-xl hover:bg-white hover:text-blue-400">Sign Up</button>

            </div>
          </div>
        </div>
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-32 px-12">
          <h2 className="text-3xl font-bold mb-8">Eshop 2.0 </h2>
          <div className="border-2 w-10 border-white inline-block mb-2 "></div>
          <p className="mb-10"> One stop solution for Fashion World. Become Fashionable</p>
          <button href="" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400 ">Sign In</button>
          <img className="object-contain mt-4 animate-pulse" src="images/bag2.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Register
