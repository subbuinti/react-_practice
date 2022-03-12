import {Component} from 'react'
import "./index.css"


class Product extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const{product} = this.props;
        return(
            

            <div className="card m-3">
                <div className="card-block p-2">
                  <h4 className="card-title heading">{product.title}</h4>
                  <h6 className="card-subtitle text-muted">{product.price}</h6>
                  <p className="card-text description">{product.description}</p>
                </div>
                <img className="image-size p-2" src={product.image} alt="Card"/>
                <div className="card-block p-2 button-space">
                  <button className="btn btn-primary">Edit</button>
                 <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        
        )

    }
}

export default Product;