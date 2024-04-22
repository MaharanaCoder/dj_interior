import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer_page from './Footer_page';
// import { useParams } from 'react-router-dom';

export const ContactForm = () => {
  const form = useRef();
  // const params=useParams();

  // console.log(params.id);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_845gb0s', 'template_zrm2lcn', form.current, 'nkJst_mIm6UenfYal')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar/>
    <div class='container_main'>
      
    <div className="container_massage">
    <img class='images' src='./images/kitchen.jpg' alt='kitchen'></img>
    

    <form ref={form} onSubmit={sendEmail}>

      {/* Your form inputs and labels */}
      <label>Name</label>
      <input type="text" name="Name" placeholder='Enter Your Name' />
      <label>Email</label>
      <input type="email" name="Email" placeholder='Enter Your Email'/>
      <label>Mobile No</label>
      <input type="mobile" name="mobile" placeholder='Enter Your Mobile No.' />
      <label>Address</label>
      <input type="Address" name="Address" placeholder='Enter Your Address' />
      <label>Message</label>
      <textarea name="message" placeholder='Type any message for Inquary' />
      <input type="submit" value="Send" />
    </form>
    </div>
   

    </div>
    <Footer_page/>
    </div>
  );
};

export default ContactForm;
