import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem({ img, title, color, cat }) {
    console.log(color)
    return (
        <div className={` cursor-pointer  bg-${color}-300 text-center flex flex-col items-center justify-center `}>
            <Link to={`/products/${cat}`}>
                <img className=" object-contain " src={img} alt="" />
                <button className="py-3 w-2/3 border-2 border-gray-300 my-2 text-2xl font-serif text-white font-semibold bg-pink-400 hover:animate-bounce" >{title}</button>
            </Link>
        </div>
    )
}

export default CategoryItem
        