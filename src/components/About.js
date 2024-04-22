import React from 'react'
import Navbar from './Navbar'
import './Aboutus.css';
import Footer_page from './Footer_page';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div class="main">
        <img src='./images/Untitled-design-28-1.jpg'></img>
      </div>
      <div class='about_para'>
        
        <p><h1>About Us</h1><t/>Welcome to DJ Interior, your one-stop destination for exquisite furniture solutions tailored to elevate every space, whether it's a cozy home, bustling office, chic showroom, or a welcoming medical facility.<br/>
At DJ Interior, we pride ourselves on our commitment to craftsmanship, quality, and customer satisfaction. With years of experience in the industry, we have mastered the art of creating furniture pieces that seamlessly blend functionality with aesthetics, ensuring that each piece not only serves its purpose but also enhances the ambiance of its surroundings.
Our team of skilled artisans and designers works tirelessly to bring your vision to life. Whether you're looking for modern, minimalist designs or timeless classics, we have a diverse range of styles to suit every taste and preference. From sleek office desks and ergonomic chairs to elegant dining sets and luxurious sofas, we have everything you need to transform your space into a haven of comfort and style.
But our dedication doesn't end there.<br/> We believe in going above and beyond to exceed your expectations at every step of the way. From the moment you reach out to us to the final delivery and installation of your furniture, we strive to provide a seamless and hassle-free experience, ensuring that you can sit back, relax, and enjoy the transformation of your space.
Whether you're furnishing a small apartment or a large commercial space, DJ Interior is here to help. With our wide range of products, unparalleled craftsmanship, and unwavering commitment to customer satisfaction, we are your trusted partner in creating spaces that inspire and delight. Welcome to DJ Interior, where every piece tells a story, and every space reflects your unique personality.
        </p>
        <img src='./images/office_room.jpg'></img>
      </div>
      <Footer_page/>
    </div>
  )
}

export default About