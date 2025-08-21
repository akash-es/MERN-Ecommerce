// import { Navbar,Nav,Container,NavDropdown,Badge, Form } from "react-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { useNavigate,Link} from "react-router-dom";
// import {useSelector,useDispatch} from"react-redux"
// import { logout } from "../Slice/authSlice";
// import { useLogoutUserMutation } from "../Slice/userApiSlice";



// const   Header =() =>{
//     const {userData} =useSelector((state)=> state.auth);
//     const [logoutApiCall]=useLogoutUserMutation()

//     let cartIteams =[]
//     const logoutHandler = async() =>{
//        await logoutApiCall().unwrap();
//     dispatch(logout());
//     toast.success("logout success");
//     navigate("/");
//     }

//     return(
//         <header>
//             <Navbar  bg="dark" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             Iconic Mart
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link as={Link} to={"/cart"}>
//                 <FaShoppingCart /> Cart
//                 {cartIteams.length > 0 && (
//                   <Badge pill bg="success" style={{ marginLeft: "5px" }}>
//                     {cartIteams.reduce((acc, item) => acc + Number(item.qty), 0)}
//                   </Badge>
//                 )}
//               </Nav.Link>

//               {userData ? (
//                 <>
//                   <NavDropdown title={userData.name} id="username">
//                     <NavDropdown.Item as={Link} to={"/profile"}>
//                       Profile
//                     </NavDropdown.Item>

//                     <NavDropdown.Item onClick={logoutHandler}>
//                       logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </>
//               ) : (
//                 <Nav.Link as={Link} to="/login">
//                   <FaUser /> Sign In
//                 </Nav.Link>
//               )}

//               {userData && userData.isAdmin && (
//                 <>
//                   <NavDropdown title={"Admin"} id="adminname">
//                     <NavDropdown.Item as={Link} to={"/admin/productlist"}>
//                       Products
//                     </NavDropdown.Item>

//                     <NavDropdown.Item as={Link} to={"/admin/orderlist"}>
//                       Orders
//                     </NavDropdown.Item>

//                     <NavDropdown.Item as={Link} to={"/admin/userlist"}>
//                       Users
//                     </NavDropdown.Item>
//                   </NavDropdown>

                  
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

            






import React from "react";
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../Slice/userApiSlice"
import { logout } from "../Slice/authSlice"
import { toast } from "react-toastify";

function Header() {
  const { userData } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [logoutApiCal] = useLogoutUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await logoutApiCal().unwrap();
    dispatch(logout());
    toast.success("logout success");
    navigate("/");
  };

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand as={Link} to="/">
             IconicMart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/cart"}>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.qty),
                        0
                      )}
                    </Badge>
                  )}
                </Nav.Link>

                {userData ? (
                  <>
                    <NavDropdown title={userData.name} id="username">
                      <NavDropdown.Item as={Link} to={"/profile"}>
                        Profile
                      </NavDropdown.Item>

                      <NavDropdown.Item onClick={logoutHandler}>
                        logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    <FaUser /> Sign In
                  </Nav.Link>
                )}

                {userData && userData.isAdmin && (
                  <>
                    <NavDropdown title={"Admin"} id="adminname">
                      <NavDropdown.Item as={Link} to={"/admin/productlist"}>
                        Products
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to={"/admin/orderlist"}>
                        Orders
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to={"/admin/userlist"}>
                        Users
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;