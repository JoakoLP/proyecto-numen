import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import ComboSec from "./components/Combo";
import Productos from "./components/Productos/productos";
import CartProvider from "./contexts/CartProvider";
import Brands from "./components/Brands";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ScrollToTop from "./components/About/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchSect from "./components/Search";
import SearchProvider from "./contexts/SearchProvider";
import Comentary from "./components/Comentary/Comentary";

function App() {
  return (
    <div className="select-none bg-dark-gray">
      <Router>
        <CartProvider>
          <SearchProvider>
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
                      <Comentary />
                      <ToastContainer pauseOnFocusLoss={false} newestOnTop />
                    </>
                  }
                />
                <Route path="/about-us" element={<About />} />
                <Route
                  path="/search"
                  element={
                    <>
                      <SearchSect />
                      <ToastContainer pauseOnFocusLoss={false} newestOnTop />
                    </>
                  }
                />
              </Routes>
            </div>
            <Brands />
            <Footer />
          </SearchProvider>
        </CartProvider>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
