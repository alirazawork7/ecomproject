import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Cart = () => {
    return (
        <div>
            <ShoppingBagOutlinedIcon sx={{color: '#6cb5e7'}}></ShoppingBagOutlinedIcon>
            <ul className='absolute right-[0] w-[300px] bg-[white] top-[100%] p-[20px] shadow-[rgba(9,30,66,0.25)_0px_4px_8px_-2px,rgba(9,30,66,0.08)_0px_0px_0px_1px]'>
                <li className='flex justify-between'>
                    <img src=''></img>
                    <p>x</p>
                    <p>1</p>
                    <h6>Price: 200</h6>
                </li>
            </ul>
        </div>
    )
}
export default Cart;