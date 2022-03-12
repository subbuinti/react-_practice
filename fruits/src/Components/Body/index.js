import { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import FruitContext from "../../contex/FruitContext";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FruitContext.Consumer>
        {(value) => {
          console.log(value);
          const { fruits, updateCartItems } = value;

          return (
            <>
              <Row lg={3} className="g-5">
                {fruits.map((fruit, id) => {
                  return (
                    <Col key={id}>
                      <Card style={{ width: "19rem", marginLeft: "50px" }}>
                        <Card.Img
                          className="image-width"
                          variant="top"
                          src={fruit.imageUrl}
                        />
                        <Card.Body>
                          <Card.Title>Name:{fruit.name}</Card.Title>
                          <Card.Text>Price:{fruit.price}</Card.Text>
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              updateCartItems(fruit);
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </>
          );
        }}
      </FruitContext.Consumer>
    );
  }
}

export default Body;
