import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ToggleLink } from '../ToggleLink';

export class CategoryNavigation extends Component {

  render() { 
    return ( 
      <>
        <ToggleLink exact={true} to={this.props.baseUrl}>Wszystkie</ToggleLink>
        {this.props.categories && this.props.categories.map(category => 
          <ToggleLink key={category} to={`${this.props.baseUrl}/${category.toLowerCase()}`}>
            {category}
          </ToggleLink>
          )}
      </>
     );
  }
}
 
