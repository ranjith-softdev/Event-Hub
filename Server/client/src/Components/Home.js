import {
  Col,
  Row,
  Container,
  Carousel,
  Button,
  Card,
  ListGroup
} from "react-bootstrap";
import "./Home.css";
import Footer from "./Common Pages/Footer";
import EventNavbar from "./Common Pages/EventNavbar";

const Navbar_eb = () => {
  const pdfdownload = () => {
    // Create a Blob with the PDF data (replace this with your PDF data)
    const pdfData = "Your PDF data as a string or ArrayBuffer";
    const pdfBlob = new Blob([pdfData], { type: "application/pdf" });

    // Create a temporary link element
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(pdfBlob);
    a.download = "./c.pdf"; // Set the desired file name here

    // Trigger a click event on the link to initiate the download
    a.click();

    // Clean up by removing the temporary link element
    window.URL.revokeObjectURL(a.href);
  };
  return (
    // Navbar
    <Container fluid className="p-0 vh-100 overflow-x-hidden">
      <Row className="Navbar_Container position-sticky top-0 start-0 end-0 z-3 p-0">
        <EventNavbar />
      </Row>
      <Row className="Carousel_Container bg-black">
        <Carousel>
          <Carousel.Item>
            <img
              src="./Home-slide.jpg"
              alt="..."
              className="img-fluid"
              cltext="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./Home-slide.jpg"
              alt="..."
              className="img-fluid"
              cltext="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* Card Container */}
      <Row className="Card_Container bg-dark">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">
            Upcomming Events
          </span>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
              <Card.Body>
                <Card.Title>Dancing</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>01/10/2023</ListGroup.Item>
                <ListGroup.Item>Presidency College</ListGroup.Item>
                <ListGroup.Item>Seminar Hall</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Button onClick={pdfdownload}>Download</Button>
                <Button href="/form" variant="primary">
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
              <Card.Body>
                <Card.Title>Singing</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>01/10/2023</ListGroup.Item>
                <ListGroup.Item>Presidency College</ListGroup.Item>
                <ListGroup.Item>Auditorium</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Button onClick={pdfdownload}>Download</Button>
                <Button href="/form" variant="primary">
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
              <Card.Body>
                <Card.Title>Solo Dance</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>01/10/2023</ListGroup.Item>
                <ListGroup.Item>Presidency College</ListGroup.Item>
                <ListGroup.Item>Stage</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Button onClick={pdfdownload}>Download</Button>
                <Button href="/form" variant="primary">
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className="bg-dark" id="About">
        <Footer />
      </Row>
    </Container>
  );
};

export default Navbar_eb;
