import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const FeedData = [
  {
    title: "John Doe",
    icon: "bi bi-bell",
    color: "primary",
    date: "101",
  },
  {
    title: "Alex Chen",
    icon: "bi bi-person",
    color: "info",
    date: "102",
  },
  {
    title: "Emily Lee",
    icon: "bi bi-hdd",
    color: "danger",
    date: "103",
  },
  {
    title: "Mike Brown",
    icon: "bi bi-bag-check",
    color: "success",
    date: "104",
  },
  {
    title: "Jane Smith",
    icon: "bi bi-bag-check",
    color: "success",
    date: "105",
  },
];

const Feeds = () => {
  return (
    <div data-aos="fade-left"  data-aos-duration="1500">
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
              data-aos="zoom-in"  data-aos-duration="3500"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
    </div>
  );
};

export default Feeds;
