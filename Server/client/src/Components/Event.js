import React from "react";
import {
  Row,
  Container,
  Button,
  Card,
  ListGroup
} from "react-bootstrap";
import EventNavbar from "./Common Pages/EventNavbar";
import Footer from "./Common Pages/Footer";
import "./Event.css";

const Event = () => {
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
    <Container className="scrollable-container" fluid>
      <Row className="Navbar_Container position-sticky top-0 start-0 end-0 z-3 p-0">
        <EventNavbar />
      </Row>
      <Row className="Card_Container bg-dark">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">
            Upcomming Events
          </span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }} className="pt-3">
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
          <Card style={{ width: "18rem" }} className="pt-3">
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
          <Card style={{ width: "18rem" }} className="pt-3">
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
        </Row>
      </Row>
      <Row className="Card_Container bg-dark py-5">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">
            Previous Events
          </span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Dancing</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Singing</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Solo Dance</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      </Row>
      <Row id="About">
        <Footer />
      </Row>
    </Container>
  );
};

export default Event;
