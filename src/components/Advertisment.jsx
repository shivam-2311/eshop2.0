function Advertisment() {
    return (
        <div className=" mx-3 my-3 pt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-pink-100">
                <div className=" mx-3 my-3 lg:px-4 lg:py-4 ">
                    <img className=" w-70 lg:w-[750px] object-cover" src="images/image1.jpg" alt="" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-xl md:text-3xl lg:text-4xl  xl:text-4xl 2xl:text-6xl text-gray-800 font-serif lg:pt-3">Get 70% Off on Latest Brands</h1>
                        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-serif  lg:pt-2">Fastest Delivery</h2>
                        <button className=" bg-slate-600 my-3 px-3 py-3 lg:mt-3 rounded text-white  hover:bg-blue-400    ">Shop Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Advertisment
