import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import { Outlet, useHref } from "react-router-dom";
import store from "./store/store";
import { useState } from "react";
function App() {
  const [token, setToken] = useState(false);
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const cartHandler = (data) => {
    const copyCart = {...cart};
    const copyItems = [...copyCart.items];
    copyCart.items = copyItems;
    const findedElement = copyCart.items.find((element) => {
      return element.id === data.id
    })
    
    if(findedElement){
      const copyFindedElement = {...findedElement};
      copyFindedElement.quantity = copyFindedElement.quantity + 1;
      // console.log((copyFindedElement.price + data.price).toFixed(2))
     
      copyFindedElement.price = Number((copyFindedElement.price + data.price).toFixed(2));
      
      const index = copyCart.items.findIndex((element) => {
        return element.id === data.id
      })
      copyCart.items[index] = copyFindedElement
      setCart(copyCart)
    }
    else {
      copyCart.items.push(data)
      setCart(copyCart)
    }
    
  }
  const globalState = {
    token,
    setToken,
    cart,
    cartHandler
    }
  
  
  return (
    <>
    <store.Provider value={globalState}>
        
          <Header />
        
          
          <Outlet />
          <Footer />
    </store.Provider>
    
    </>
  )
}

export default App
