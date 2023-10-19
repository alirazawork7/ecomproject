import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../../components/Products/ProductItem";
import Spinner from "../../components/Ui/Spinner/Spinner";
import SideBar from "../../layout/SideBar/SideBar";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [spinner, setSpinner] = useState(true);
    const location = useLocation();
    const searchHandler = (event) => {
        setSearch(event.target.value)
    }
    useEffect(() => {
        const fetchPosts = async () => {
            let url = 'https://fakestoreapi.com/products';
            const parsedUrl = new URL(window.location.href);
            const newParams = parsedUrl.search;
            const qParams = new URLSearchParams(newParams);
            if(qParams.has('category')) {
                url = `https://fakestoreapi.com/products/category/${parsedUrl.searchParams.get('category')}`
            }
            const res = await fetch(url);
            const resData = await res.json();
            setSpinner(false)
            setProducts(resData)
        }
        fetchPosts();
    }, [location])
    let uiElementsArr = null;
    const generateUi = (arr) => {
        uiElementsArr = arr.map((element) => {
            return <ProductItem key={element.id} id={element.id} title={element.title} price={element.price} image={element.image} />
        })
    }
    
    
    if(search !== ''){
        uiElementsArr = products.filter((element) => {
            return element.title.toLowerCase().includes(search.toLowerCase())
        })
        generateUi(uiElementsArr)
    }
    else {
        generateUi(products)
    }
    console.log('i am running')
    return (
        <>
            <SideBar search={search} onSearch={searchHandler}></SideBar>
            <div className="bg-[#6cb5e7] w-[calc(100%-320px)] ml-[auto] pt-[80px]">
                <div className="max-w-6xl pl-5 pr-5 mx-auto py-[60px]">
                <h2 className="text-center mb-[60px] text-4xl font-bold text-white">
                    Products
                </h2>
                {spinner && <Spinner />}
                <div className="grid grid-cols-4 gap-5">
                    {uiElementsArr}
                </div>
            </div>
            </div>
        </>
        
        
    )
}
export default Products;