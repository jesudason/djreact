import React, { Component } from 'react';
// import './Footer.scss';

export default class Footer extends Component {
  render() {

    return (
      <div className="contact">
        <h3>Contact</h3>
        <div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <a href="tel:+1234567890">1234567890</a>
            </div>
            <div className="col-sm-12 col-md-4">
            <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Email</a>
            </div>
            <div className="col-sm-12 col-md-4">
              <p>16 Test Street, Melbourne, VIC 3000</p>
            </div>                        
          </div>
        </div>            
      </div>
    );
  }
}