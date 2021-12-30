import { HeartIcon } from "@heroicons/react/solid"
import { FaFacebookSquare, FaInstagram, FaTwitter, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
function Footer() {
    return (
        <div className="pt-3 bottom-0 px-3   bg-yellow-200 border-t-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div>
                    <div className="flex flex-col justify-start ">
                        <h1 className="pl-3 font-serif text-4xl text-gray-600 font-bold">Shiva</h1>
                        <div className='py-2 px-2 '>
                            <p className='font-serif text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nemo ratione eveniet animi eos totam, minima vero, maiores saepe rerum nobis temporibus
                                fugiat modi. Commodi, illum. Nesciunt alias illo cum non modi at molestiae amet, ex itaque. Laborum, porro eum.</p>
                        </div>
                        <div className="flex  justify-start space-x-3 pl-3 pb-2">
                            <FaFacebookSquare className="text-3xl " />
                            <FaInstagram className="text-3xl " />
                            <FaTwitter className="text-3xl " />
                            <FaGithub className="text-3xl " />
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:grid mx-5  ">

                    <h2 className=" text-3xl font-semibold font-serif text-gray-600">Useful Links</h2>
                    <div className="grid grid-cols-2 space-x-4 pt-3">
                        <div className="">
                            <h3 className="text-2xl font-normal font-serif text-justify">Home</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Cart</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Fashion</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Whislist</h3>
                        </div>
                        <div>
                            <h3 className="text-2xl font-normal font-serif text-justify">My Account</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Terms</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Orders</h3>
                            <h3 className="text-2xl font-normal font-serif text-justify">Category</h3>
                        </div>

                    </div>
                </div>
                <div >
                    <h2 className='text-3xl font-semibold font-serif text-gray-600'>Contact</h2>
                    <div className='pt-4 '>
                        <p className="flex font-serif text-lg items-center"> <FaMapMarkerAlt className='text-lg mr-3 '/>New Delhi, India</p>
                        <p className="flex font-serif text-lg items-center"><FaPhoneAlt className='text-lg mr-3 ' /> +123 56 9487</p>
                        <p className="flex font-serif text-lg items-center"><MdLocalPostOffice className='text-lg mr-3' /> shivfake123@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
