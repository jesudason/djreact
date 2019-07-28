import React, { Component } from 'react';
require("./Accordion.scss")

export default class Accordion extends Component {
  render() {

    return (
      <div>
        <h3>Accordion</h3>
 <section className="ac-container">
  <div>
    <input id="ac-1" name="accordion-1" type="checkbox" defaultChecked/>
    <label htmlFor="ac-1">About us</label>
    <article>
      <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.</p>
    </article>
  </div>
  <div>
    <input id="ac-2" name="accordion-1" type="checkbox"/>
    <label htmlFor="ac-2">How we work</label>
    <article>
      <p>Like you, I used to think the world was this great place where everybody lived by the same standards I did, then some kid with a nail showed me I was living in his world, a world where chaos rules not order, a world where righteousness is not rewarded. That's Cesar's world, and if you're not willing to play by his rules, then you're gonna have to pay the price. </p>
    </article>
  </div>
  <div>
    <input id="ac-3" name="accordion-1" type="checkbox"/>
    <label htmlFor="ac-3">References</label>
    <article>
      <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now.</p>
    </article>
  </div>
  <div>
    <input id="ac-4" name="accordion-1" type="checkbox"/>
    <label htmlFor="ac-4">Contact us</label>
    <article>
      <p>You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone.</p>
    </article>
  </div>
      </section>
      </div>
    );
  }
}