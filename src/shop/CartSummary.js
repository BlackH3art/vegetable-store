import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CartSummary extends Component {

  getSummary = () => {
    if (this.props.cartItems > 0) {
      return <span>
        Produktów: {this.props.cartItems} / Wartość: {this.props.cartPrice.toFixed(2)} zł
      </span>
    } else {
      return <span>Koszyk: (jest pusty)</span>
    }
  }

  getLinkClasses = () => {
    return `btn btn-sm bg-dark text-white ${ this.props.cartItems === 0 ? "disabled" : ""}`;
  }

  render() { 
    return ( 
      <div className="float-right">
        <small>
          {this.getSummary()}
          <Link className={this.getLinkClasses} to="/shop/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </small>
      </div>
     );
  }
}
 
