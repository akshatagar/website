'use client';
import { useState } from 'react';
import styles from './Feedback.module.css';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your actual Microsoft Forms URL and field IDs
    const formUrl = 'https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID';
    
    // Create URL parameters with prefilled data
    const params = new URLSearchParams();
    params.append('email', formData.email);       // Replace with actual field ID
    params.append('company', formData.company);   // Replace with actual field ID
    params.append('phone', formData.phone);       // Replace with actual field ID
    
    // Open Microsoft Forms in new tab with prefilled data
    window.open(`${formUrl}?${params.toString()}`, '_blank', 'noopener,noreferrer');
    
    // Optional: Reset form after submission
    setFormData({ email: '', company: '', phone: '' });
    
    // Optional: Show success message
    alert('Opening Microsoft Forms with your information...');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.feedbackForm}>
      
      <h2> Feedback Page</h2>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className={styles.formGroup + " mb-3"}>
        <label htmlFor="phoneInput" className={styles.formLabel}>Phone Number</label>
        <input
          className={styles.formControl}
          type='tel'
          id="phoneInput"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="000 000-0000"
          required
        />
      </div>
      
      <div className={styles.formGroup + " mb-3"}>
        <label htmlFor="emailInput" className={styles.formLabel}>Email address</label>
        <input
          type="email"
          className={styles.formControl}
          id="emailInput"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <div className={styles.formText}>We'll never share your email</div>
      </div>
      
      <div className={styles.formGroup + " mb-3"}>
        <label htmlFor="companyInput" className={styles.formLabel}>Company Name</label>
        <input
          className={styles.formControl}
          id="companyInput"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
      </div>
      
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
}