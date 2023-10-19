import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import { Outlet, useHref } from "react-router-dom";
import store from "./store/store";
import { useState } from "react";
function App() {
  const [token, setToken] = useState(false);
  const authState = {
    token,
    setToken
  }
  
  return (
    <>
    <store.Provider value={authState}>
        
          <Header />
        
          
          <Outlet />
          <Footer />
    </store.Provider>
    
    </>
  )
}

export default App
