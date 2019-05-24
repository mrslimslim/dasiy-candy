import React, { Component } from 'react';
import '../styles/header.scss';

export default class Header extends Component {
  render() {
    console.log('header trigger render');
    return (
      <>
        <header className='dasiy_header'>
          <h1 className='ml-24'>Dasiy Candy</h1>  
        </header>
      </>
    )
  }
}
