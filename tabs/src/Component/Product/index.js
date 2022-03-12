import { Component } from "react";
import { Nav, Button } from "react-bootstrap";
import Table1 from "../Table1";
import NewForm from "../NewForm";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
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
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onButtonClick2 = this.onButtonClick2.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
  }
  onButtonClick() {
    console.log("clicked");
    this.setState({ selectedTab: "first-table" });
  }
  onButtonClick2() {
    this.setState({ selectedTab: "add" });
  }
  deleteItem(index) {
    console.log("clicked", index);
    const productList = this.state.products;
    productList.splice(index, 1);
    this.setState({ products: [...productList] });
  }
  addNewProduct(pro) {
    console.log("newProduct called", pro);
    this.setState({
      products: [...this.state.products, pro],
      selectedTab: "first-table",
    });
  }
  render() {
    return (
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Button onClick={(e) => this.onButtonClick()}>table1</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Button onClick={(e) => this.onButtonClick2()}>add</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {this.state.selectedTab === "first-table" && (
          <div>
            <Table1
              products={this.state.products}
              removeItem={this.deleteItem}
            />
          </div>
        )}
        {this.state.selectedTab === "add" && (
          <div>
            <NewForm addProduct={this.addNewProduct} />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
