import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import ComboSec from "./components/Combo";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";
import About from "./components/Banner/about";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="select-none bg-dark-gray">
      <Router>
        <CartProvider>
          <Header />
          <div className="mt-[104px] md:mt-[134px] min-h-[65vh]">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Slider />
                    <ComboSec />
                    <Productos />
                  </>
                }
              />
              <Route path="/about-us" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
