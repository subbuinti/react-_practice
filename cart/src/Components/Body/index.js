import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CountContext from "../../Context/CountContext";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  onAddButtonClick() {
    console.log("add button called");
  }
  render() {
    return (
      <CountContext.Consumer>
        {(value) => {
          const { count, updateCount } = value;
          return (
            <div className="card-padding">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Cart Item</Card.Title>
                  <Card.Text>about Cart item</Card.Text>
                  <Button variant="primary" onClick={updateCount}>
                    Add
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        }}
      </CountContext.Consumer>
    );
  }
}

export default Body;
