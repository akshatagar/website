'use client'; // Must be the first line

import { useState } from 'react';

export default function EmailForm() {
  /*const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Manual form submission to avoid FormSubmit.co conflicts
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ email: '', password: '', remember: false });
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };*/

  return (
    /*<form 
      //onSubmit={handleSubmit}
      //action="https://formsubmit.co/ved_rb@rediffmail.com" 
      //method="POST"
      className="p-4 border rounded"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          name="email"
          //onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <div className="form-text">We'll never share your email</div>
      </div>
      
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          name="password"
          value={formData.password}
          //onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberCheck"
          name="remember"
          checked={formData.remember}
          //onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="rememberCheck">
          Remember me
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>*/
    <input type="email" name='email' />
  );
}