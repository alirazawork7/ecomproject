import { useContext } from "react";
import store from "../../store/store";
const SignIn = () => {
    const ctx = useContext(store)
    const submitHandler = (e) => {
        e.preventDefault();
        ctx.setToken(true);
    }
    return (
        <form onSubmit={submitHandler} className="pt-[80px]">
            <ul>
                <li>
                    <label>Email</label>
                    <input type="email" placeholder="Email"></input>
                </li>
                <li>
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                </li>
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
            
            
            
        </form>
    )
}
export default SignIn;