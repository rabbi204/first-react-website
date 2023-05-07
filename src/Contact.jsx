import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    full_name: '',
    email    : '',
    phone    : '',
    message  : ''
  });


  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData( (preVal) => {
        return {
          ...preVal, 
          [name] : value,
        }
    });

  }

  const formSubmit = (e) =>{
      e.preventDefault();
      alert(`My nameis ${data.full_name}. My email address is ${data.email}. My phone number is ${data.phone}, Here is what i want to say ${data.message}`);
  };

  return (
    <>
      <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
          <div className='row'>
              <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" name="full_name" value={data.full_name} onChange={InputEvent} placeholder='Enter your name' />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder='enter your email address'/>
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder='Enter your Number'/>
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea name="message" value={data.message} onChange={InputEvent} className='form-control' id="message" cols="30" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact;