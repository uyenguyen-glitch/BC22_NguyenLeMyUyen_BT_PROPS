import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  setStateModal = (product) => {
    console.log(product);
    this.props.onSelect(product);
  };
  render() {
    return (
      <div className="row">
        {this.props.productsData.map((product) => {
          return (
            <div key={product.id} className="col-sm-4">
              <ProductItem
                product={product}
                setStateModal={this.setStateModal}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
