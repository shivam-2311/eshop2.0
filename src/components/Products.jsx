import { useEffect, useState } from 'react';
import { productData } from '../data';
import Product from './Product';
import axios from "axios";

function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);
  // console.log("category", cat);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // console.log("filter", filteredProducts);

  return (
    <div className="py-4">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4 w-full ">
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Products
