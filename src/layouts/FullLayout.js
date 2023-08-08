import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import { useState } from "react";

const FullLayout = () => {
  
  const [user, setUser] = useState(null);
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header user={user} setUser={setUser} isLoggedIn={false} />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
