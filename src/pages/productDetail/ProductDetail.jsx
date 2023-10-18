import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const params = useParams();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const resData = await res.json();
            setProduct(resData)
        }
        fetchPosts();
    }, [])
    return (
        <> 
        {!product && <div>Loading...</div>}
        {product && 
        <div className='grid grid-cols-2 max-w-[1140px] mx-auto my-[40px]'>
            <img className='h-[500px]' src={product.image} alt={product.title} />
            <ul className='flex flex-col justify-center'>
                <li className='mb-[30px]'>
                    <h1 className='text-4xl font-bold leading-normal'>{product.title}</h1>
                </li>
                <li className='mb-[30px]'>
                    <h2 className='text-2xl font-bold'>Price: {product.price}Rs</h2>
                </li>
                <li className='mb-[30px]'>
                    <h3 className='text-xl font-bold'>Category: {product.category}</h3>
                </li>
                <li>
                    <p className='text-lg font-semibold'>{product.description}</p>
                </li>
            </ul>
        </div>
        }
         
        </>
        
        
    )
}
export default ProductDetail