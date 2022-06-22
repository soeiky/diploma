import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import New from "./pages/New";
import Layout from "./Components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;