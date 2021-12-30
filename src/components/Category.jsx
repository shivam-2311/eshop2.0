import { categories } from '../data';
import CategoryItem from './CategoryItem';

function Category() {
   
    return (
        <section className="my-5  mx-3">
            <div className="flex justify-center ">
                <h1 className="font-serif text-center text-gray-500 lg:text-5xl capitalize pb-4">Category on Sale</h1>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 space-y-3 lg:space-y-0 lg:space-x-3 ">
                {
                    categories.map((item) => (
                        <CategoryItem key={item.id} img={item.img}  title={item.title} color={item.color} cat={item.cat}/>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default Category
