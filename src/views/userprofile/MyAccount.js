import React from 'react';

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
        <div className="user-profile">
      <div className="user-header">
        <div className="avatar"></div>
        <h2>{user.name}</h2>
        <p>{user.username}</p>
      </div>
      <div className="user-details">
        <div className="detail">
          <h3>Securities Held</h3>
          <p>{user.securitiesHeld} bonds</p>
        </div>
        <div className="detail">
          <h3>Trades Occurred</h3>
          <p>{user.tradesOccurred} trades</p>
        </div>
        <div className="detail">
          <h3>Account Created</h3>
          <p>{user.daysAgoCreated} days ago</p>
        </div>
        <div className="detail">
          <h3>Total Portfolio Value</h3>
          <p>${user.totalPortfolioValue.toLocaleString()}</p>
        </div>
      </div>
    </div>
      );
};

export default MyAccount;