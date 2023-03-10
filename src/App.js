import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllProducts from "./routes/allproducts/AllProducts";
import Category from "./routes/Category/Category";
import Create from "./routes/Create/Create";
import Login from "./routes/Login/Login";
import SingleProduct from "./routes/SingleProduct/SingleProduct";
import SearchedProducts from '../src/routes/searchedProducts/SearchedProducts'
import Basket from "./routes/basket/Basket";
import User from "./routes/user/User";
import SeePhoto from "./routes/seephoto/SeePhoto";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/category/:id" element={<Category />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/searched/:productName" element={<SearchedProducts />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/see/:id" element={<SeePhoto />}></Route>
      </Routes>
    </>
  );
}

export default App;
