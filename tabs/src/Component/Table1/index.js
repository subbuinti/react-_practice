import { Component } from "react";
import "./index.css";
import { Table, Button } from "react-bootstrap";

class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>image</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index, removeItem) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td className="des">{product.description}</td>
                  <td>
                    <img
                      className="style-image"
                      src={product.image}
                      alt="aaaaa"
                    />
                  </td>
                  <td>
                    <Button
                      onClick={(e) => {
                        this.props.removeItem(index);
                      }}
                    >
                      del
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Table1;
