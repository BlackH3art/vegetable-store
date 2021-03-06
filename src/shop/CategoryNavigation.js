import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToggleLink } from '../ToggleLink';

export class CategoryNavigation extends Component {

  render() { 
    return ( 
      <>
        <ToggleLink exact={false} to={`${this.props.baseUrl}/all`}>Wszystkie</ToggleLink>
        {this.props.categories && this.props.categories.map(cat => 
          <ToggleLink key={cat} to={`${this.props.baseUrl}/${cat.toString().toLowerCase()}`}>
            {cat}
          </ToggleLink>
          )}
        <Link className="btn btn-block btn-secondary fixed-bottom m-2 col-3" to="/admin">
          Administration
        </Link>
      </>
     ); 
  }
}
 
