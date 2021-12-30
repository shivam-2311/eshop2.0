import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethod";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux"

function SingleProduct() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(

            addProduct({ ...product, quantity, color, size })
        )

    }

    useEffect(() => {

        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch { }

        }
        getProduct();

    }, [id])
    // console.log(product.color)

    return (
        <div className="h-screen w-screen overflow-y-scroll">
            <Navbar />
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className=' p-3'>
                        <img src={product.img} className="object-cover rounded-md" alt="" />
                    </div>
                    <div className='mt-3 ml-3 pl-3 flex flex-col items-start'>
                        <div className='w-full '>
                            <h1 className='text-3xl tmd:text-4xl lg:text-6xl font-serif capitalize text-gray-500'> {product?.title}</h1>
                            <p className='w-full  text-justify  text-gray-700 text-xl font-serif mt-6 py-4 pr-3'>{product?.desc}</p>
                            <h1 className="text-6xl font-semibold text-gray-500 mt-3 pt-5">${product?.price}</h1>
                        </div>
                        <div className="flex flex-col md:flex-row pt-8 items-center">
                            <div className="flex items-center">
                                <h2 className="text-2xl font-serif text-gray-400">Color : </h2>
                                {product.color?.map((c) => (
                                    <div key={c} onClick={() => { setColor(c) }} className={`w-[20px] h-[20px] rounded-full bg-${c}-400  mx-2 cursor-pointer border-red-400 border-2`}></div>
                                ))}

                            </div>
                            <div className='flex pt-3 md:pt-0 lg:ml-3 lg:pl-3 items-center'>
                                <h2 className='text-2xl font-serif text-gray-400'>size :</h2>
                                <select className='w-[70px] h-[40px] border-2 text-2xl textgrey-400 pl-2 ml-2 rounded-md ' onChange={(e) => setSize(e.target.value)} name="" id="">
                                    {product.size?.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="pt-8 lg:flex items-center ">
                            <div className='flex space-x-3 text-center  '>
                                <button className=' w-[50px] h-[40px] border-2 border-gray-500 text-2xl font-serif hover:bg-gray-300 rounded-md' onClick={() => handleQuantity('dec')}>-</button>
                                <p className='w-[70px] h-[40px] border-2 text-2xl textgrey-400 font-serif text-center'>{quantity}</p>
                                <button className='w-[50px] h-[40px] border-2 border-gray-500 text-2xl font-serif hover:bg-gray-300 rounded-md' onClick={() => handleQuantity('inc')}>+</button>
                            </div>
                            <button onClick={handleClick} className="my-3 md:my-1 ml-8 text-center w-[150px] h-[50px] border-2 border-gray-500 text-xl font-serif hover:bg-gray-300 rounded-md" >Add To Cart</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default SingleProduct
