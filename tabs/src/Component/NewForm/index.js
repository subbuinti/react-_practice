import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      productTitle: "",
      productPrice: "",
      productDes: "",
      productUrl: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDes = this.onChangeDes.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }
  handleSubmit(event) {
    console.log("called");
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
    } else {
      const newProduct = {
        title: this.state.productTitle,
        price: this.state.productPrice,
        description: this.state.productPrice,
        image: this.state.productUrl,
      };
      this.props.addProduct(newProduct);
    }

    //setValidated(true);
    this.setState({ validated: true });
  }
  onChangeProductName(e) {
    console.log("called");
    this.setState({ productTitle: e.target.value });
  }
  onChangePrice(e) {
    console.log("price called");

    this.setState({ productPrice: e.target.value });
  }
  onChangeDes(e) {
    console.log("des called");
    this.setState({ productDes: e.target.value });
  }
  onChangeUrl(e) {
    console.log("url called");
    this.setState({ productUrl: e.target.value });
  }

  render() {
    return (
      <div>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group className="mb-3">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="please enter title"
                onChange={this.onChangeProductName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter product title.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="please enter price"
                onChange={(e) => this.onChangePrice(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter product price
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="please enter description"
                onChange={(e) => this.onChangeDes(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter product description
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="please enter url"
                onChange={(e) => this.onChangeUrl(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter product Url
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default NewForm;
