import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  console.log(props)
  const handleButtonClick = () => {
    if (props.link) {
      // Open the link in a new tab
      window.open(props.link, "_blank");
    }
  };
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button color={props.color} onClick={handleButtonClick} >Read More</Button>
      </CardBody>
    </Card>
  );
};

export default Blog;