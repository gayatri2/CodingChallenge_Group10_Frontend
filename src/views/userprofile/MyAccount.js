import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Badge} from "reactstrap"
AOS.init();
function MyAccount(props) {

    const user = {
        name: 'Jane Smith',
        username: '@bondtrader',
        securitiesHeld: 215,
        tradesOccurred: 78,
        daysAgoCreated: 120,
        totalPortfolioValue: 7500000,
        // ... add more relevant data
      };


    return (
        <div className="user-profile" data-aos="fade-up"
        data-aos-duration="1500">
      <div className="user-header" >
        <div className="avatar"></div>
        <br/>
        < h2 style={{marginLeft:"-20%"}} >{user.name}</h2>
        <p  style={{marginLeft:"-20%"}} > {user.username}</p>
      </div>
      <div className="user-details">
      <div className="detail">
        <Badge color="primary" className="mb-2 larger-badge" style={{ fontSize: '16px' }}>
          Securities Held
        </Badge>
        <p>{user.securitiesHeld} bonds</p>
      </div>
      <div className="detail">
        <Badge color="success" className="mb-2 larger-badge" style={{ fontSize: '16px' }}>
          Trades Occurred
        </Badge>
        <p>{user.tradesOccurred} trades</p>
      </div>
      <div className="detail">
        <Badge color="info" className="mb-2 larger-badge" style={{ fontSize: '16px' }}>
          Account Created
        </Badge>
        <p>{user.daysAgoCreated} days ago</p>
      </div>
      <div className="detail">
        <Badge color="warning" className="mb-2 larger-badge" style={{ fontSize: '16px' }}>
          Total Portfolio Value
        </Badge>
        <p>${user.totalPortfolioValue.toLocaleString()}</p>
      </div>
      </div>
    </div>
      );
};

export default MyAccount;