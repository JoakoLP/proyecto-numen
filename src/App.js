import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import ComboSec from "./components/Combo";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";
import About from "./components/Banner/about";

function App() {
  return (
    <div className="select-none bg-dark-gray">
      <CartProvider>
        <Header />
        <div className="mt-[104px] md:mt-[134px]">
          <About />
          <Slider />
          <ComboSec />
          <Productos />
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
