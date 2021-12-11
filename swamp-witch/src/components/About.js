import React from 'react';
import victoria from '../assets/img/victoria2.JPG';

const About = () => {
  return (
    <div class='about'>
      <h1 class='aboutHeader'>About Victoria</h1>
      <img class='victoria' src={victoria} alt='victora varty' />
      <p class='aboutText'>Hi there, my name is Victoria and I am originally from Wales, UK. I started my tattoo journey in 2017 after years of telling myself I wasn’t good enough and psyching myself out. When I turned 27 I decided it was now or never and applied for a counter position at Anatomy Tattoo. I started absorbing as much as I could and painting constantly. They decided it was time to open a school and made me one of their first students. After completing the course they offered me a position permanently at the shop and I’ve been able to work around talented and experienced artists who treat each other with respect and I feel so lucky. 
      Going forward with my career I hope to be able to travel with conventions both in the US and abroad and continue to grow my skills enough to be able to do more realism.</p>
    </div>
  )
}

export default About;
