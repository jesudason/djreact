import React from "react"

import { connect } from "react-redux"

import Headline from "../components/Headline"
import Navbar from "../components/Navbar"
import Accordion from "../components/Accordion"
import Carousel from "../components/Carousel"
import Tabs from "../components/Tabs"
import Footer from "../components/Footer"
import './App.scss';

export default class CmsContainer extends React.Component {

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="cms">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Accordion />
              <Carousel />
              <Tabs />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}