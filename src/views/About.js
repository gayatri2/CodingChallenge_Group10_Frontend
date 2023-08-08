import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <h2>About Bonds Manager - Redemption Management Application</h2>
      <p>
        Welcome to Bonds Manager, a cutting-edge redemption management application designed to empower our members in efficiently tracking, managing, and resolving bond-related issues within their portfolios. As the financial landscape evolves, ensuring accurate and timely bond redemptions is crucial, and Bonds is here to streamline this process while providing transparency and control.
      </p>
      <h3>Mission Statement:</h3>
      <p>
        At Bonds Manager, our mission is to revolutionize how bonds are managed and redeemed, allowing our users to proactively identify and address any anomalies or challenges that may arise in the lifecycle of their securities. With a user-centric approach, we aim to enhance the visibility, efficiency, and accuracy of bond redemption processes, ultimately ensuring that investors receive their rightful returns.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>Redemption Tracking:</strong> Bonds provides a comprehensive dashboard that displays upcoming and recently matured bonds, giving users a clear view of their portfolio's maturity timeline.
        </li>
        <li>
          <strong>Issue Identification:</strong> Our tooling is specifically designed to identify and flag bonds that remain on our books post maturity. By highlighting these anomalies, users can swiftly investigate issues like trade failures, mis-bookings, or system glitches.
        </li>
        <li>
          <strong>Trade Oversight:</strong> Bonds offers the ability to view trades associated with each bond, aiding in the identification of failed trades, timing discrepancies, and other potential issues.
        </li>
        <li>
          <strong>Custom Lists:</strong> Users have the option to create personalized lists of bonds they wish to track closely, enabling a tailored approach to managing their portfolio.
        </li>
        <li>
          <strong>Seamless Integration:</strong> While currently integrated with an H2 in-memory database, Bonds has the potential to seamlessly integrate with external systems to consume real-world data from relevant bonds databases or APIs, enhancing accuracy and completeness.
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
