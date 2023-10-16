const ProductItem = (props) => {
    return (
        
                <div className="grid-card bg-[white] p-[20px] rounded-[10px] shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
                    <img src={props.image}></img>
                    <h3 className="text-center text-xl mb-[10px] font-semibold">{props.title}</h3>
                    <h4 className="text-center text-lg font-medium mb-[5px]">Price: {props.price}Rs</h4>
                    
                </div>
        
    )
}
export default ProductItem