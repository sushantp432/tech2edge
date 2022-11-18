import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ModelComponent } from "./Modal";

export const MovieCard = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div >
      <Card style={{ width: "18rem",height:"23rem",marginTop:"20px"}}>
      
        <Card.Img
          className="card-img-top"
          src={`https://demo.tech2edge.co/samples/${data.img}`}
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.profession}</Card.Text>
          <Card.Text>{data.age}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Details
          </Button>
          <ModelComponent data={data} show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    </div>
  );
};
