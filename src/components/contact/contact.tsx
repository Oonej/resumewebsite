import React, { useRef }  from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();
  
      if(form.current != null)
      {
        emailjs.sendForm('service_1g9roeg', 'template_jq9mtgd', form.current, '6rCxXj5uaX0AZnYdc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


      }
      
      e.target.reset();
    };

    return (
        <>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdEmail className="contact__option-icon"/>
                            <h4>Email</h4>
                            <a href="mailto:chad@tarbutton.org" target="_blank"><h5>chad@tarbutton.org</h5></a>
                        </article>
                        <article className="contact__option">
                            <AiFillPhone className="contact__option-icon"/>
                            <h4>Phone</h4>
                            <h5>813-731-1152</h5>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows={7} placeholder="Your Message" required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
                </div>
            </section>
        </>
    )
}