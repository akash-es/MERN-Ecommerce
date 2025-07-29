import { Navbar,Nav,Container,NavDropdown,Badge, Form } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate,Link} from "react-router-dom";
import {useSelector,useDispatch} from"react-redux"


const   Header =() =>{
    const {userData} =useSelector((state)=> state.auth);
    

    let cartIteams =[]
    const logoutHandler = async() =>{}

    return(
        <header>
            <Navbar  bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Ecommers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/cart"}>
                <FaShoppingCart /> Cart
                {cartIteams.length > 0 && (
                  <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                    {cartIteams.reduce((acc, item) => acc + Number(item.qty), 0)}
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
  );
};

export default Header;

            