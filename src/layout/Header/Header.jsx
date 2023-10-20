import {Link} from 'react-router-dom'
import { useContext } from 'react';
import store from '../../store/store';
import { useNavigate } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import classes from './Header.module.css';
const Header = () => {
    const ctx = useContext(store);
    const navigate = useNavigate();
    return (
        <header className='bg-[white] text-[#6cb5e7] fixed w-[100%] h-[80px] px-[20px] shadow-md'>
            <nav className='flex justify-end h-[100%]'>
                <ul className={`flex gap-[40px] ${classes.linksContainer}`}>
                    <li className='flex items-center'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='flex items-center relative'>
                        <Cart></Cart>
                    </li>
                    {ctx.token && <li className='flex items-center'>
                        <button onClick={() => {
                            ctx.setToken(false)
                            navigate('/login')
                        }}>Logout</button>
                    </li>}
                    {!ctx.token && <li className='flex items-center'>
                        <Link className='flex items-center' to="/login">LogIn</Link>
                    </li>}
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header;