import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Comentary from "./components/Comentary/Comentary";
import ComboSec from "./components/Combo";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <div className="bg-dark-gray">
      <CartProvider>
        <Header />
        <div className="mt-[134px]"></div>
        <Cards />
        <Slider />
        <Categories />
        <Comentary />
        <Productos />
        <ComboSec />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
