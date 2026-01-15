import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact.css';

function Contact() {
    const [state, handleSubmit] = useForm("mojjvyze");

    if (state.succeeded) {
        return (
          <div className='body'>
            <div className='contact-wrapper'>
              <span className='hi'>&gt; Contact Me</span>
              <div className='aboutme'>
                &gt; Message sent successfully. I'll get back to you soon.
              </div>
            </div>
          </div>
        );
      }
        
    return (
        <div className='body'>
            <div className='contact-wrapper'>
                <span className='hi'>&gt; Contact Me</span>
            
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='input-group'>
                        <label htmlFor="name" className='input-label'>&gt; Name:</label>
                        <input id="name" type="text" name="name" className='terminal-input' required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="email" className='input-label'>&gt; Email:</label>
                        <input id="email" type="email" name="email" className='terminal-input' required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="message" className='input-label'>&gt; Message:</label>
                        <textarea id="message" name="message" className='terminal-input terminal-textarea' required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button type="submit" className='submit-btn' disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Execute Send_'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
