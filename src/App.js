import "./App.css";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./components/product/AllProducts";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className="App">
      <>
        <Navbar />
        {showCart && <Cart />}
        <AllProducts />
      </>
    </div>
  );
}

export default App;
