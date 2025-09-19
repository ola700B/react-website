import React from 'react'
import MultiplePizzas from '../assets/1.jpg'
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
            istanbul Pizzeria is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and cheesiest Pizza around.
            Our classic pan pizza will always be a fan favourite, with a soft and chewy crust perfectly balancing out the healthy tomato pure and mozzarella - cheddar blended cheese.
            Contrary to industry standard strategy, istanbul Pizzeri, since 1996, has been committed to growing our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To be a USPizza franchisee is a privilege unto itself. The same commitment to product and service perfection we practice is expected from our partners.
            Our outlets designed by leading architects to reflect our philosophy of being open and inviting, while putting our customer comfort on priority.
            Everywhere we go, we hear ‘Your pizza is the tastiest pizza around, why aren’t you open in my location’. The answer is simple, every outlet opened is a promise to our customer, and not one we take lightly.

        </p>
      </div>
    </div>
  )
}

export default About
