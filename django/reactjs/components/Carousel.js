import React, { Component } from 'react';
import './Carousel.scss';

export default class Carousel extends Component {
  render() {

    return (
      <div>
        <h3>Carousel</h3>
          <div>
              <div className="carousel">
                  <ul className="slides">
                      <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
                      <li className="slide-container">
                          <div className="slide-image" id="slide-image-1">
                          </div>
                          <div className="carousel-controls">
                              <label htmlFor="img-3" className="prev-slide">
                                  <span>&lsaquo;</span>
                              </label>
                              <label htmlFor="img-2" className="next-slide">
                                <span>&rsaquo;</span>
                              </label>
                          </div>
                      </li>
                      <input type="radio" name="radio-buttons" id="img-2" />
                      <li className="slide-container">
                          <div className="slide-image" id="slide-image-2">
                          </div>
                          <div className="carousel-controls">
                              <label htmlFor="img-1" className="prev-slide">
                                  <span>&lsaquo;</span>
                              </label>
                              <label htmlFor="img-3" className="next-slide">
                                  <span>&rsaquo;</span>
                              </label>
                          </div>
                      </li>
                      <input type="radio" name="radio-buttons" id="img-3" />
                      <li className="slide-container">
                          <div className="slide-image" id="slide-image-3">
                          </div>
                          <div className="carousel-controls">
                              <label htmlFor="img-2" className="prev-slide">
                                  <span>&lsaquo;</span>
                              </label>
                              <label htmlFor="img-1" className="next-slide">
                                  <span>&rsaquo;</span>
                              </label>
                          </div>
                      </li>
                      <div className="carousel-dots">
                          <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                          <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                          <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                      </div>
                  </ul>
              </div>
          </div>

      </div>
    );
  }
}