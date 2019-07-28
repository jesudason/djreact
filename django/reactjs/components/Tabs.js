import React, { Component } from 'react';
import './Tabs.scss';

export default class Tabs extends Component {
  render() {

    return (
      <div>
        <h3>Tabs</h3>
        <div className="tabs">
          <input name="tabs" type="radio" id="tab-1" className="input" defaultChecked/>
          <label htmlFor="tab-1" className="label">Orange</label>
          <div className="panel">
            <h1>Orange</h1>
            <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae</p>
            <p>The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus × aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
          </div>

          <input name="tabs" type="radio" id="tab-2" className="input"/>
          <label htmlFor="tab-2" className="label">Tangerine</label>
          <div className="panel">
            <h1>Tangerine</h1>
            <p>The tangerine (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata).</p>
            <p>The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.</p>
          </div>

          <input name="tabs" type="radio" id="tab-3" className="input"/>
          <label htmlFor="tab-3" className="label">Clemantine</label>
          <div className="panel">
            <h1>Clemantine</h1>
            <p>A clementine (Citrus ×clementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.</p>
          </div>
        </div>        
      </div>
    );
  }
}