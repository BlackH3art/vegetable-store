import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GraphQlUrl } from '../data/Urls';
import { OrdersConnector } from './OrdersConnector';
import { Route, Redirect, Switch } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";
import { ConnectedProducts } from "./ProductsConnector";
import { ProductEditor } from "./ProductEditor";
import { ProductCreator } from "./ProductCreator";

import { AuthPrompt } from '../auth/AuthPrompt';
import { authWrapper } from '../auth/AuthWrapper';

export default authWrapper(class extends Component {
  constructor(props) {
    super(props);
    this.client = new ApolloClient({
        uri: GraphQlUrl,
        request: gqloperation => gqloperation.setContext({
          headers: {
            Authorization: `Bearer<${this.props.webToken}>`
          },
        }),
      })
  }
  render() { 
    console.log(this.props.webToken, ' webtoken ');
    return ( 
      <>
        <ApolloProvider client={this.client}>
          <div className="container-fluid">
            <div className="row">
              <div className="col bg-info text-white">
                <div className="navbar-brand"> Vegetable Store</div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-2">
                <ToggleLink to="/admin/orders">Zamówienia</ToggleLink>
                <ToggleLink to="/admin/products">Produkty</ToggleLink>
                {this.props.isAuthenticated && 
                  <button onClick={this.props.signout} className="btn btn-block btn-secondary m-2 fixed-bottom col-3">
                    Log out
                  </button>
                }
              </div>
              <div className="col-9 p-2">
                <Switch>
                  {
                    !this.props.isAuthenticated && <Route component={AuthPrompt} />
                  }
                  <Route path="/admin/orders" component={OrdersConnector} />
                  <Route path="/admin/products/create" component={ProductCreator} />
                  <Route path="/admin/products/:id" component={ProductEditor} />
                  <Route path="/admin/products/" component={ConnectedProducts} />
                  <Redirect to="/admin/orders" />
                </Switch>
              </div>
            </div>
          </div>
        </ApolloProvider>
      </>
    );
  }
})