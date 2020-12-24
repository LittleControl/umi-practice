import React, { Component } from 'react';
import LinkMenu from './components/LinkMenu';
import FilterCard from './components/FilterCard';
import TableCard from './components/TableCard';

class Penetration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LinkMenu />
        <br />
        <FilterCard />
        <br />
        <TableCard />
      </>
    );
  }
}

export default Penetration;
