import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_960hxx1', 'template_0yfhetb', form.current, {
        publicKey: '_3cYYo1Pke1W-4HX9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Section4">
        <div className="FormContainer">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
}
