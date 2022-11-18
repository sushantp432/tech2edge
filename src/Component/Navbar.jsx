import React from "react";
import Nav from 'react-bootstrap/Nav';

export const Navbar = () => {
  return (
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#movie">Movie</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#stars">Stars</Nav.Link>
      </Nav.Item>     
    </Nav>
  );
};
