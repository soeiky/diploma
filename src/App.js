import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import New from "./pages/New";
import Layout from "./Components/Layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/products/:productsId" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;