import React, { Component } from 'react';

export class CartDetailsRows extends Component {
  
  handleChange = (product, event) => this.props.upadateCartQuantity(product, event.target.value);

  render() { 

    if(!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr>
          <td colSpan="5">Twój koszyk jest pusty</td>
        </tr>
      )
    } else {
        return ( 
          <>
            {this.props.cart.map(item => 
              <tr key={item.product.id}>
                <td>
                  <input type="number" value={item.quantity} onChange={(event) => this.handleChange(item.product, event)} />
                </td>
                <td>{item.product.name}</td>
                <td>{item.product.price.toFixed(2)} zł</td>
                <td>{(item.quantity * item.product.price).toFixed(2)} zł</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => this.props.removeFromCart(item.product)}>Usuń</button>
                </td>
              </tr> 
              )}
              <tr>
                <th colSpan="3" className="text-right">Wartość sumaryczna: </th>
                <th colSpan="2">{this.props.cartPrice.toFixed(2)} zł</th>
              </tr>
          </>
      );
    }


  }
}
 