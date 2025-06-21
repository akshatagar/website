'use client'; // Must be the first line

import { useState } from 'react';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: ''
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
    
    try {
      const formData = new FormData();
      formData.append('email', formData.email);
      formData.append('company', formData.company);
      formData.append('phone', formData.phone);
      
      const response = await fetch('https://formsubmit.co/ved_rb@rediffmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ email: '', company: '', phone: ''});
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <form 
      //onSubmit={handleSubmit}
      action="https://formsubmit.co/ved_rb@rediffmail.com" 
      //action="mailto:ved_rb@rediffmail.com"
      enctype="text/plain"
      method="POST"
      className="feedback-form"
    >
      
      <h2> Feedback Page</h2>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="mb-3">
        <label htmlFor="phoneInput" className="form-label">Phone Number</label>
        <input
          className="form-control"
          type='tel'
          id="phoneInput"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="000 000-0000"
          required
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <div className="form-text">We'll never share your email</div>
      </div>
      
      <div className="mb-3">
        <label htmlFor="companyInput" className="form-label">Company Name</label>
        <input
          className="form-control"
          id="companyInput"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
      </div>
      
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}