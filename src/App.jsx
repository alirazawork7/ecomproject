import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import { Outlet, useHref } from "react-router-dom";

function App() {
  
  const href = useHref();
  return (
    <>
    {
      href.includes('/signin') ? null : <Header />
    }
      
        <Outlet />
      <Footer />
    </>
  )
}

export default App
