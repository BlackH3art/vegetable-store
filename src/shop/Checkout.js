import React, { Component } from 'react';
import { ValidatedForm } from '../forms/ValidatedForm';

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "name" },
      { label: "e-mail", attrs: {type: "email"} },
      { label: "address" },
      { label: "city" },
      { label: "post-code", name: "zip" },
      { label: "country" }
    ]
  }

  handleSubmit = (formData) => {
    const order = {
      ...formData, products: this.props.cart.map(item => ({
        quantity: item.quantity, product_id: item.product_id
      }))
    }
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/shop/thanks");
  }

  handleCancel = () => {
    this.props.history.push("/shop/cart");
  }

  render() { 
    return ( 
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col bg-dark text-white">
              <div className="navbar-brand"> Vegetable-Store </div> 
            </div>
          </div>
          <div className="row">
            <div className="col m-2">
              <ValidatedForm formModel={this.formModel}
                defaultAttrs={this.defaultAttrs}
                submitCallback={this.handleSubmit}
                cancelCallback={this.handleCancel}
                submitText="place oreder"
                cancelText="go back to cart" />
            </div>
          </div>
        </div>
      </>
     );
  }
}
 