import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Comentaries from "./components/Comentary/Comentaries";

function App() {
  return (
    <div>
      <Header />
      <Cards />
      <Slider />
      <Categories />
      <Comentaries />
      <Footer />
    </div>
  );
}

export default App;
