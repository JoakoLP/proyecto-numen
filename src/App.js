import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import ComboSec from "./components/Combo";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ScrollToTop from "./components/About/ScrollToTop";

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
              {/* <Slider />
              <ComboSec />
              <Productos /> */}
            </Routes>
          </div>
          <Footer />
        </CartProvider>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
