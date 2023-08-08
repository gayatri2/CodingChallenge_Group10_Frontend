import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "Bonds",
    subtitle: "6 comments, 2 Like",
    description:
      "How Bonds influence the whole market. How Bonds influence the whole market. How Bonds influence the whole market." ,
    btnbg: "primary",
    link:"https://www.investopedia.com/terms/b/bond.asp"

  },
  {
    image: bg2,
    title: "Position",
    subtitle: "12 comments, 8 Like",
    description:
      "Position in the context of the market typically refers to the ownership or holding of a specific financial asset, such as stocks, bonds, commodities, or other investment instruments.",
    btnbg: "primary",
    link:"https://www.mageplaza.com/blog/positioning-in-marketing.html"
  },
  {
    image: bg3,
    title: "Stock",
    subtitle: "9 comments, 4 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    link:"https://www.investopedia.com/terms/b/bond.asp"
  },
  {
    image: bg4,
    title: "Investment",
    subtitle: "18 comments, 2 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
    link:"https://www.investopedia.com/terms/b/bond.asp"
  },
];

const Starter = () => {

  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
