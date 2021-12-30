import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from '../requestMethod';
import { useNavigate } from "react-router-dom";


function Cart() {
    const KEY = process.env.REACT_APP_STRIPE;
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };
    console.log(stripeToken)
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                navigate("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate, cart]);


    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center m-3'>
                <div className='w-full text-center text-gray-700 py-3'>
                    <h1 className='text-4xl font-serif font-semibold'>Your Cart</h1>
                    <div className="border-2 w-52 border-yellow-300 inline-block mb-2 "></div>
                </div>
                <div className='flex justify-between w-full py-5 px-3 text-gray-600'>
                    <button className='p-3 text-center font-serif font-semibold border-2 border-yellow-500 hover:animate-pulse rounded-md  bg-yellow-300 text-2xl '>Continue shopping</button>
                    <a className='p-3 text-center font-serif font-semibold no-underline text-2xl text-gray-700 hover:text-yellow-800' href="/"> shoping bag</a>
                    <a className='p-3 text-center font-serif font-semibold no-underline text-2xl text-gray-700 hover:text-yellow-800' href="/"> Your Wishlist</a>
                    <button className='px-4 text-center font-serif font-semibold border-2 border-yellow-500 rounded-md  bg-yellow-300 text-2xl  text-gray-500 hover:animate-pulse'>Check Out</button>
                </div>
                <div className='flex items-center'>
                    <div className='flex-1' >
                        {cart &&
                            cart.products?.map((product) => (
                                <>
                                    <div className='grid grid-cols-3'>
                                        <div className='w-  rounded-lg'>
                                            <img src={product?.img} className='w-5/6 object-cover p-2' alt="" />
                                        </div>
                                        <div className='flex flex-col w-full  space-y-10 justify-center px-4'>
                                            <h2 className='font-serif font-bold text-gray-800 text-2xl'>Product: <span className='font-semibold capitalize text-gray-500'>{product?.title}</span></h2>
                                            <h2 className='font-serif font-bold text-gray-800 text-2xl'>ID: <span className='font-semibold font-sans text-gray-500'>{product?._id}</span></h2>
                                            <div className={`w-[20px] h-[20px] rounded-full bg-${product?.color}-500 mx-2 cursor-pointer border-red-400 border-2`}></div>
                                            <h2 className='font-serif font-bold text-gray-800 text-2xl'>Size: <span className='font-semibold text-gray-500'>{product?.size}</span></h2>
                                        </div>
                                        <div className='flex flex-col justify-center items-end px-3 mr-2'>
                                            <div className='flex space-x-5 text-center'>
                                                <button className=' w-[60px] h-[50px] border-2 border-gray-500 text-3xl font-serif hover:bg-gray-300 rounded-md'>-</button>
                                                <p className='w-[60px] h-[50px] border-2 text-3xl textgrey-400 font-serif '>{product?.quantity}</p>
                                                <button className='w-[60px] h-[50px] border-2 border-gray-500 text-3xl font-serif hover:bg-gray-300 rounded-md'>+</button>
                                            </div>
                                            <h1 className="text-6xl font-semibold text-gray-500 pt-4">${product?.price * product?.quantity}</h1>
                                        </div>
                                    </div>
                                    <div className="border-2 w-full border-gray-400 inline-block mb-2 "></div>
                                </>
                            ))
                        }
                    </div>

                    <div className='  border-2 border-gray-500 rounded-md p-4 mx-2'>
                        <h1 className=' p-2 text-3xl font-serif font-semibold text-gray-500'>ORDER SUMMARY</h1>
                        <div className='my-3 px-3 font-sans font-semibold text-gray-500 text-2xl'>
                            <div className='flex items-center justify-between'>
                                <h3>Subtotal:</h3>
                                <h2 className='font-semibold text-gray-700'>${cart?.total}</h2>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3>Shipping:</h3>
                                <h2 className='font-semibold text-gray-700'>$80</h2>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3>Discount:</h3>
                                <h2 className='font-semibold text-gray-700'>$80</h2>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <h3 className='text-3xl text-gray-700 font-semibold'>Total:</h3>
                                <h2 className='font-semibold text-gray-700'>${cart?.total}</h2>
                            </div>
                        </div>
                        <StripeCheckout
                            name="EShop 2.0"
                            image="https://lh3.googleusercontent.com/ogw/ADea4I5ZmusPOZYzJl-OTep8XAoB5BBnKjfeXMhWrIrN=s83-c-mo"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className='w-full py-2 text-center font-serif font-semibold bg-yellow-300 text-gray-500 border-2 hover:animate-pulse border-yellow-500 rounded-md '>Check Out</button>

                        </StripeCheckout>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
