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
        <div className="fixed left-0 top-[48px] bg-[white] w-[320px] h-[calc(100vh-48px)] shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]">
           <form>
                <input onChange={props.onSearch} id="search" value={props.search} type='text' placeholder='Search' className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-[100%] p-[20px]'></input>
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