import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";
import { toggleCart } from "./store/cart";
import { populateProduce } from "./store/produce";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  // const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button
          className="checkout-button"
          onClick={() => dispatch(toggleCart())}
        >
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: "300px" } : {}}>
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: "translateX(-100%)" } : {}}
      >
        <div className="sidebar-header">
          <button
            className="arrow-button"
            onClick={() => dispatch(toggleCart())}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
