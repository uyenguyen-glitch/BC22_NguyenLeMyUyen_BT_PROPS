import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
export default class ShoeShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }
  handleSelectProduct = (product) => {
    const selectedProduct = product;
    this.setState({ selectedProduct });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoe Shop</h1>
        <ProductList productsData={data} onSelect={this.handleSelectProduct} />
        <Modal product={this.state.selectedProduct} />
      </div>
    );
  }
}
