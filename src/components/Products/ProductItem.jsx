import { Link } from "react-router-dom"
const ProductItem = (props) => {
    return (
        <div className="grid-card"> 
            <Link to={`/products/${props.id}`}>
                <div className="bg-[white] p-[20px] rounded-[10px] shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
                    <div className="flex justify-center my-[20px]">
                        <img className="h-[160px]" src={props.image}></img>
                    </div>
                    
                    <h5 className="text-center mb-[10px] font-semibold">{props.title}</h5>
                    <h6 className="text-center font-medium mb-[5px]">Price: {props.price}Rs</h6>
                    
                </div>
            </Link>
        </div>
        
    )
}
export default ProductItem