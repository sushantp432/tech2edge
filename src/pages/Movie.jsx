import React, { useEffect, useState } from "react";
import { MovieCard } from "../Component/MovieCard";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

export const Movie = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://demo.tech2edge.co/samples/data-sg")
      .then((res) => res.json())
      .then((res) => {      
        setData(res.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container >
      <Row xs="auto" >
        {data.map((el) => (
          <Col key={el.id} className="m-auto">
            <MovieCard data={el} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
