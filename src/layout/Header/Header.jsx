import {Link} from 'react-router-dom'
import { useContext } from 'react';
import store from '../../store/store';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const ctx = useContext(store);
    const navigate = useNavigate();
    return (
        <header className='bg-[black] text-white fixed w-[100%] h-[80px] px-[20px]'>
            <nav className='flex justify-end h-[100%]'>
                <ul className='flex gap-[40px] items-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    {ctx.token && <li>
                        <button onClick={() => {
                            ctx.setToken(false)
                            navigate('/login')
                        }}>Logout</button>
                    </li>}
                    {!ctx.token && <li>
                        <Link to="/login">LogIn</Link>
                    </li>}
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header;