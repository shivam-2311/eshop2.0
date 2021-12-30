import { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Products from "../components/Products"
import { useLocation } from "react-router";

function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    // console.log(filters);
    // console.log(cat);
    return (
        <div className="relative h-screen w-screen overflow-y-scroll">
            <Navbar />
            <div className="my-4 mx-3">
                <h1 className="font-serif font-bold text-5xl px-4 pb-2 ">Clothes</h1>
                <div className="flex items-center justify-between px-4">
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-serif text-gray-600'>Filter Products: </h1>
                        <select className='w-[100px] h-[50px] border-2 text-2xl textgrey-400 pl-2 ml-2 rounded-md ' onChange={handleFilters} name="color" id="" >
                            <option value="White">white</option>
                            <option value="Black">gray</option>
                            <option value="Red">red</option>
                            <option value="Blue">blue</option>
                            <option value="Yellow">yellow</option>
                            <option value="Green">green</option>
                        </select>
                        <select className='w-[70px] h-[50px] border-2 text-2xl textgrey-400 pl-2 ml-2 rounded-md ' onChange={handleFilters} name="size" id="">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-serif text-gray-600'>Sort Products: </h1>
                        <select className='w-[120px] h-[50px] border-2 text-xl textgrey-400 pl-2 ml-2 rounded-md ' onChange={(e) => { setSort(e.target.value) }} name="price" id="">
                            <option value="Newest">Newest</option>
                            <option value="high">Price (higher)</option>
                            <option value="low">Price (lower)</option>

                        </select>
                    </div>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Footer />
        </div>
    )
}

export default ProductList
