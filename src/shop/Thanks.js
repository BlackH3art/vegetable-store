import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Thanks extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div className="col bg-dark text-white">
          <div className="navbar-brand"> Vegatable-Store</div>
        </div>
        <div className="text-center m-2">
          <h2>Thanks!</h2>
          <p>Thank you for placing your order.</p>
          <p>Your order number is: #{this.props.order ? this.props.order.id : 0}</p>
          <p>Your order will be delivered as soon as possible.</p>
          <Link className="btn btn-primary" to="/shop">go back to shop</Link>
        </div>
      </div>
     );
  }
}
 
