import './contact-form.styles.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_of82zu1', 'service_of82zu1', form.current, 'rJbvnj8HmuXEISeYd')
      .then((result) => {
          console.log(result.text);
          console.log("messga sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <label>Name</label>
      <input type="text" name="user_name" className='contact-form-text-input'/>
      <label>Email</label>
      <input type="email" name="user_email" className='contact-form-text-input'/>
      <label>Message</label>
      <textarea name="message" className='contact-form-text-input'/>
      <input type="submit" value="Send" className='contact-form-btn' />
    </form>
  );
};

export default ContactForm;
