import React from 'react';

import Container from '@mui/material/Container';
import './About.css';
import { useMediaQuery } from 'react-responsive';
import Aos from "aos";
import "aos/dist/aos.css";
const AboutPage = () => {
  Aos.init({ duration: 1000 });
  const twoCols = useMediaQuery({ query: '(min-width: 640px)' });
  return (
    <Container id="timeline_section">
        <div style={{ color: '#00000096' }}>
            <h1 style={{marginBottom:"2%"}}>About Bonds Manager - Redemption Management Application</h1>
        </div>
        <ul style={{ color: '#DC143C' }}>
            <li className="entity" data-aos={ twoCols ? 'fade-left' : 'fade-right' }>
                <div className="date">Bonds Manager</div>
                <div className="title">Introduction</div>
                <div className="descr"> Welcome to Bonds Manager, a cutting-edge redemption management application designed to empower our members in efficiently tracking, managing, and resolving bond-related issues within their portfolios. As the financial landscape evolves, ensuring accurate and timely bond redemptions is crucial, and Bonds is here to streamline this process while providing transparency and control.</div>
            </li>
            <li className="entity" data-aos='fade-right'>
                <div className="date">Mission Statement:</div>
                <div className="title">Our Mission</div>
                <div className="descr"> At Bonds Manager, our mission is to revolutionize how bonds are managed and redeemed, allowing our users to proactively identify and address any anomalies or challenges that may arise in the lifecycle of their securities. With a user-centric approach, we aim to enhance the visibility, efficiency, and accuracy of bond redemption processes, ultimately ensuring that investors receive their rightful returns.</div>
            </li>
            <li className="entity" data-aos={ twoCols ? 'fade-left' : 'fade-right' }>
                <div className="date">Key Features:</div>
                <div className="title">Redemption Tracking:</div>
                <div className="descr">Bonds provides a comprehensive dashboard that displays upcoming and recently matured bonds, giving users a clear view of their portfolio's maturity timeline.</div>
                <div className="title">Issue Identification:</div>
                <div className="descr">Our tooling is specifically designed to identify and flag bonds that remain on our books post maturity. By highlighting these anomalies, users can swiftly investigate issues like trade failures, mis-bookings, or system glitches.</div>

            </li>
            <li className="entity" data-aos='fade-right'>
                <div className="date">More Key Features</div>
                <div className="title">Trade Oversight:</div>
                <div className="descr">Bonds offers the ability to view trades associated with each bond, aiding in the identification of failed trades, timing discrepancies, and other potential issues.</div>
                <div className="title">Seamless Integration:</div>
                <div className="descr">While currently integrated with an H2 in-memory database, Bonds has the potential to seamlessly integrate with external systems to consume real-world data from relevant bonds databases or APIs, enhancing accuracy and completeness.</div>
            </li>
        </ul>
    </Container>
  );
};

export default AboutPage;
