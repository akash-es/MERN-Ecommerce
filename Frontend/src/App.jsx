import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductListScreen from "./screens/Admin/ProductListScreen";
import ProductAddScreen from "./screens/Admin/ProductAddScreen";
import ProductScreen  from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen/>}/>
            <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen/>}/>

            <Route path="/product/:id" element={<ProductScreen/>}/>

            <Route path="/cart" element = {<CartScreen/>}/>

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />


            <Route path ="" element = {<PrivateRoutes />} >
            <Route path="/shipping" element ={<ShippingScreen />} />
            </Route>


            <Route path="/admin/productlist" element={<ProductListScreen/>}/>
            <Route path="/admin/addProduct" element={<ProductAddScreen/>}/>
            <Route path="/cart" element = {<CartScreen/>}/>
          </Routes>
        </Container>
      </main>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;