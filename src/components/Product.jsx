import { HeartIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"

function Product({ item }) {
   return (
      <div className="relative mx-5 py-3 cursor-pointer">
         <img className=" shadow-md hover:shadow-lg rounded-md object-contain h-96" src={item.img} alt="" />
         <div className=" pt-2 cursor-pointer flex items-center justify-center space-x-3">
            <HeartIcon className="h-8" />
            <Link to={`/product/${item._id}`}>
               <SearchIcon className="h-8" />
            </Link>
            <ShoppingCartIcon className="h-8" />
         </div>
      </div>

   )
}

export default Product
