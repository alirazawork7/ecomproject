import { Link } from "react-router-dom"
import store from "../../store/store";
import { useContext } from "react";
import { Button } from "@mui/material";
const ProductItem = (props) => {
    const ctx = useContext(store);
    
    return (
        <div className="grid-card bg-[white] p-[20px] rounded-[10px] shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"> 
            <Link to={`/products/${props.id}`}>
                <div className="">
                    <div className="flex justify-center my-[20px]">
                        <img className="h-[160px]" src={props.image}></img>
                    </div>
                    
                    <h5 className="text-center mb-[10px] font-semibold">{props.title}</h5>
                    <h6 className="text-center font-medium mb-[5px]">Price: {props.price}Rs</h6>
                    
                </div>
            </Link>
            <Button onClick={() => ctx.cartHandler({id: props.id, image:props.image, title: props.title, price: props.price, quantity: 1})} variant="contained">Add to Cart</Button>
        </div>
        
    )
}
export default ProductItem