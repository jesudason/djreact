import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {

    return (
      <div className="navbar">
        <div className="logo">Mon logo</div>
        <i className="fa fa-bars hamburger"></i>
        <nav id="menu">
          <a href="#">Article 1</a>
          <a href="#">Article 2</a>
          <a href="#">Article 3</a>
          <a href="#">Article 4</a>
          <a href="#">Article 5</a>
        </nav>
      </div>      
    );
  }
}