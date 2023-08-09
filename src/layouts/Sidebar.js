import { Button, Nav, NavItem } from "reactstrap";

import { Link, useLocation } from "react-router-dom";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
  },
  // {
  //   title: "Alert",
  //   href: "/alerts",
  //   icon: "bi bi-bell",
  // },
  {
    title: "Security",
    href: "/security",
    icon: "bi bi-bell",
  },
  {
    title: "Trade",
    href: "/trade",
    icon: "bi bi-bell",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
    const bondManagerStyle = {
    fontSize: '22px',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    color: '#2E86C1', // You can choose a color that you like
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
       <b style={bondManagerStyle} >$BOND MANAGER</b>
        <span className="ms-auto d-lg-none">
          
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
