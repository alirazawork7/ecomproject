import { useState, useEffect } from "react";
import ProductItem from "../../components/Products/ProductItem";
import Spinner from "../../components/Ui/Spinner/Spinner";
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setProducts(resData)
        }
        fetchPosts();
    }, [])
    const uiElementsArr = products.map((element) => {
        return <ProductItem key={element.id} id={element.id} title={element.title} price={element.price} image={element.image} />
    })
    return (
        <div className="bg-[#6cb5e7]">
            <div className="max-w-6xl pl-5 pr-5 mx-auto py-[60px]">
            <h2 className="text-center mb-[60px] text-4xl font-bold text-white">
                Products
            </h2>
            {uiElementsArr.length === 0 && <Spinner />}
            <div className="grid grid-cols-4 gap-5">
                {uiElementsArr}
            </div>
        </div>
        </div>
        
    )
}
export default Products;