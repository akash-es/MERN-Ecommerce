import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductListScreen from "./screens/Admin/ProductListScreen";
import ProductAddScreen from "./screens/Admin/ProductAddScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PrivateRoutes from "./Components/PrivateRoutes";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import ProfileScreen from './Screens/ProfileScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderListScreen from "./Screens/Admin/OrderListScreen";
import UserListScreen from './Screens/Admin/UserListScreen'
import UserEditScreen from "./Screens/Admin/UserEditScreen";
import AdminRoutes from "./Components/AdminRoutes";
import ProductEditScreen from "./Screens/Admin/ProductEditScreen";  


function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />

            {/* Private Routes */}
            <Route path="" element={<PrivateRoutes />}>
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/order/:id" element={<OrderListScreen />} />
               


            </Route>


            {/* Admin Routes */}

            <Route path="" element={<AdminRoutes />}>
              <Route path="/admin/userlist" element={<UserListScreen />} />

              <Route path="/admin/productlist" element={<ProductListScreen/>}/>
              <Route path="/admin/addproduct" element={<ProductAddScreen />} />

              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
            </Route>
          </Routes>
        </Container>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
