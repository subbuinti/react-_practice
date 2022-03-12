import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product, index, removeItem } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "160px" }}
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text style={{ height: "100px", overflow: "scroll" }}>
            {product.description}
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <Button
            variant="primary"
            onClick={(e) => {
              removeItem(index);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
