import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const navigate=useNavigate()

  const handleMyAccountClick = () => {
    navigate("/myaccount");
  };

  const navigateToLogin = () => {
    navigate("/login");
  }

  const navigateToRegister = () => {
    navigate("/register");
  }

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="bg-gradient">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              Starter
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {
          props.user !== null ? 
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle color="transparent">
                <img
                  src={user1}
                  alt="profile"
                  className="rounded-circle"
                  width="30"
                ></img>
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem header>Info</DropdownItem>
                  <DropdownItem onClick={handleMyAccountClick}>My Account</DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>My Balance</DropdownItem>
                  <DropdownItem>Inbox</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            :
            <div className="button-group">
              <Button className="btn" color="success" size="sm" onClick={navigateToLogin}>Login</Button>  
              <Button className="btn" color="info" size="sm" onClick={navigateToRegister}>Register</Button>  
            </div>
        }
      </Collapse>
    </Navbar>
  );
};

export default Header;
