import { Component } from "react";

import Product from "./component/Product/index";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      productTitle: "",
      productPrice: "",
      productDes: "",
      productUrl: "",
      products: [
        {
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "Solid Gold Petite Micropave ",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
        {
          title: "White Gold Plated Princess",
          price: 9.99,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          image:
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        },
      ],
    };
    this.onChangeProductUrl = this.onChangeProductUrl.bind(this);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductDes = this.onChangeProductDes.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: true });
  }
  onButtonClick() {
    const obj = {
      title: this.state.productTitle,
      price: this.state.productPrice,
      description: this.state.productDes,
      image: this.state.productUrl,
    };

    this.setState({ products: [...this.state.products, obj] });
  }

  onChangeProductUrl(e) {
    this.setState({ productUrl: e.target.value });
  }
  onChangeProductName(e) {
    this.setState({ productTitle: e.target.value });
  }
  onChangeProductPrice(e) {
    this.setState({ productPrice: e.target.value });
  }
  onChangeProductDes(e) {
    this.setState({ productDes: e.target.value });
  }
  handleSubmit(event) {
    console.log("called");
    const form = event.currentTarget;
    console.log("aaa", form.checkValidity());
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      const obj = {
        title: this.state.productTitle,
        price: this.state.productPrice,
        description: this.state.productDes,
        image: this.state.productUrl,
      };

      this.setState({ products: [...this.state.products, obj] });
      this.setState({ show: false });
    }

    this.setState({ validated: true });
  }
  deleteItem(index) {
    const productList = this.state.products;
    productList.splice(index, 1);
    this.setState({ products: [...productList] });
  }

  render() {
    return (
      <Container>
        <Button variant="primary" onClick={this.handleShow}>
          add
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Product Url"
                  onChange={(e) => {
                    this.onChangeProductUrl(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Product Name"
                  onChange={(e) => {
                    this.onChangeProductName(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Product Price"
                  onChange={(e) => {
                    this.onChangeProductPrice(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Product Description"
                  onChange={(e) => {
                    this.onChangeProductDes(e);
                  }}
                />
              </Form.Group>
              <Button type="submit">submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Row xs={1} md={3} className="g-2">
          {this.state.products.map((product, key) => {
            return (
              <Col>
                <Product
                  product={product}
                  index={key}
                  removeItem={this.deleteItem}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
