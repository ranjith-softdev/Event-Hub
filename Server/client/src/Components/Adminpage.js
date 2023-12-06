import React, { useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";

const Adminpg = () => {
  const [posts, setPosts] = useState([]);

  const getTest = () => {
    fetch("http://localhost:5000/get-event-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

/*   useEffect(() => {
    // Fetch data when the component mounts
    getTest();
  }, []); */

  return (
    <Container>
      <Row>
        <h1 className="fw-bold fs-2 text-light pt-4">Welcome Admin</h1>
      </Row>
      <Row>
        <Button onClick={getTest}>Show Details</Button>
      </Row>
      <Row>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>College</th>
                <th>Mobile No</th>
                <th>E-Mail</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post._id}>
                  <td>{index + 1}</td>
                  <td>{post.name}</td>
                  <td>{post.rollNo}</td>
                  <td>{post.department}</td>
                  <td>{post.college}</td>
                  <td>{post.phoneNo}</td>
                  <td>{post.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Adminpg;
