import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/home";
import Navbar from "./components/navbar/navbar";
import Category from "./components/category/category";
import ProductScreen from "./components/productScreen/productScreen";
import WishlistOrCart from "./components/wishlistOrCart/wishlistOrCart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          exact
          path="/men"
          element={<Category category="men's clothing" />}
        />
        <Route
          exact
          path="/women"
          element={<Category category="women's clothing" />}
        />
        <Route
          exact
          path="/electronics"
          element={<Category category="electronics" />}
        />
        <Route
          exact
          path="/jewelery"
          element={<Category category="jewelery" />}
        />
        <Route exact path="/products/:id" element={<ProductScreen />} />
        <Route exact path="/wishlist" element={<WishlistOrCart />} />
        <Route exact path="/cart" element={<WishlistOrCart cart />} />
      </Routes>
    </Router>
  );
}

export default App;
