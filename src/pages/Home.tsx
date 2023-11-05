import React from "react";
import Card from "react-bootstrap/Card";

export function Home() {
  return (
    <Card style={{ width: "44rem" }}>
      <Card.Img variant='top' src='../../imgs/shopping.jpeg' />
      <Card.Body>
        <Card.Title>Shop With Us</Card.Title>
        <Card.Text>Click on Store and start shopping !</Card.Text>
      </Card.Body>
    </Card>
  );
}
