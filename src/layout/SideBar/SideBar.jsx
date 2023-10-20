import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
const SideBar = (props) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => { 
        const fetchCategories = async () => {
            
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const resData = await res.json();
            console.log(resData)
            setCategories(resData)
        }
        fetchCategories();
    }, [])
    return (
        <div className="pt-[40px] fixed left-0 top-[81px] bg-[white] w-[320px] h-[calc(100vh-48px)]">
           <form>
            <div className="px-[20px]">
            <input onChange={props.onSearch} id="search" value={props.search} type='text' placeholder='Search' className='w-[100%] px-[15px] py-[10px] shadow-[rgba(0,0,0,0.1)_0px_0px_5px_0px,_rgba(0,0,0,0.1)_0px_0px_1px_0px]'></input>
            </div>
                
           </form>
                <ul>
                    {categories.map((element) => {
                        return <li key={element} className="p-[20px] border-b-[1px] border-[#d3d3d3]">
                            <Link to={`/products?category=${element}`}>
                                {element}
                            </Link>
                        </li>
                    })}
                </ul>
        </div>
        
    )
}
export default SideBar