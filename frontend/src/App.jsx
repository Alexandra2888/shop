import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Toaster} from "react-hot-toast";
import Home from "./pages/home/Home";

import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import ProductDetails from "./pages/product/productDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center"/>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;