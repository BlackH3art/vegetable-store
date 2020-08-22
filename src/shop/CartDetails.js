import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CartDetailsRows } from './CartDetailsRows';

export class CartDetails extends Component {
 
  getLinkClasses = () => {
    return `btn btn-secondary m-1 ${ this.props.cartItems === 0 ? "disabled" : ""}`;
  }

  render() { 
    return ( 
      <div className="m-3">
        <h2 className="text-center">Twój koszyk</h2>
        <table className="table table-bordered table stripped">
          <thead>
            <tr>
              <th>Liczba</th>
              <th>Produkt</th>
              <th className="text-right">Cena</th>
              <th className="text-right">Wartość</th>
            </tr>
          </thead>
          <tbody>
            <CartDetailsRows 
              cart={this.props.cart} 
              cartPrice={this.props.cartPrice} 
              updateQuantity={this.props.updateCartQuantity} 
              removeFromCart={this.props.removeFromCart} 
            />
          </tbody>
        </table>
        <div className="text-center">
          <Link className="btn btn-primary m-1" to="/shop">
            Kontynuuj zakupy
          </Link>
          <Link className={this.getLinkClasses()} to="/shop/checkout">
            Do kasy
          </Link>
        </div>
      </div>
     );
  }
}
 
