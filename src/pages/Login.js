// import axios from 'axios';
import React, { useState } from 'react'
import { MdLockOutline, MdTextSnippet } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls';
// import { loginFaliure, loginStart, loginSuccess } from '../redux/userRedux';
// import { publicRequest } from '../requestMethod';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isFetching } = useSelector((state) => state.user)
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        login(dispatch, { username, password })
        // navigate('/')
        // dispatch(loginStart());
        // try {
        //     await publicRequest.post('/auth/login', { username, password }).then((res) => {
        //         console.log("response", res.data)
        //         // dispatch(loginSuccess(res.data))

        //     })
        // } catch (error) {
        //     // dispatch(loginFaliure())
        //     console.log("error", error);
        // }


    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 p-5 ">

                    <div className='py-10 text-center font-serif'>
                        <h2 className='text-3xl font-bold text-blue-500 mb-2'>Sign In to Account</h2>
                        <div className="border-2 w-10 border-blue-500 inline-block mb-2 "></div>
                        <div className="flex flex-col items-center mt-10">
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <MdTextSnippet className='text-gray-400 m-2' />
                                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input className='bg-gray-100 outline-none text-sm flex-1 ' type="password" name='password' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <button className="border-2 border-blue-500 mt-4 rounded-full bg-blue-500 text-white px-16 py-5 inline-block font-bold text-xl hover:bg-white hover:text-blue-400" disabled={isFetching} onClick={handleClick}>Sign In</button>

                        </div>
                    </div>
                </div>
                <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-16 px-12">
                    <h2 className="text-3xl font-bold mb-8">Eshop 2.0 </h2>
                    <div className="border-2 w-10 border-white inline-block mb-2 "></div>
                    <p className="mb-10"> One stop solution for Fashion World. Become Fashionable</p>
                    <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400 ">Sign Up</button>
                    <img className="object-contain mt-4 animate-pulse" src="images/bag2.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Login
