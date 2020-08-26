import React, { Component } from 'react';
import { PaginationButtons } from './PaginationButtons';

export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5, 10, 25, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  sortKey2Label = (key) => {
    return { Name: "nazwy",Price: "ceny" }[key];
  }

  handlePageSizeChange = (event) => {
    this.props.setPageSize(event.target.value);
  }

  handleSortPropertyChange = (event) => {
    this.props.setSortProperty(event.target.value);
  }


  render() { 
    return ( 
      <>
        <div className="m-2">
          <div className="text-center m-1">
            <PaginationButtons currentPage={this.props.currentPage} pageCount={this.props.pageCount} navigate={this.props.navigateToPage} />
          </div>
          <div className="from-inline justify-content-center">
            <select className="form-control" onChange={this.handlePageSizeChange} value={this.props.pageSize || this.pageSizes[0]}>
              {this.pageSizes.map(size => 
                <option value={size} key={size}>{size} na stronie </option>
              )}
            </select>
            <select className="form-control" onChange={this.handleSortPropertyChange} value={this.props.sortKey || this.sortKeys[0]}>
              {this.sortKeys.map(key => 
                <option value={key.toLowerCase()} key={key}>
                  sortuj według {this.sortKey2Label(key)}
                </option>
              )}
            </select>
          </div>
        </div>
      </>
     );
  }
}
 
