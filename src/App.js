import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <div className="mt-170px">
          <Slider />
          <Productos />
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
