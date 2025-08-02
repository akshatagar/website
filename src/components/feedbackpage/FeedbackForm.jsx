import { useState, useRef } from 'react';
import styles from './Feedback.module.css';
import { useFeedback } from '../contexts/FeedbackContext';

export default function FeedbackForm() {

  const {showFeedback, setShowFeedback} = useFeedback();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: '',
    remarks: ''
  });


  
  const iframeRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfrrtud2jwhMHWSj8EMc4vwv350aWMOPj06BRDTQ1g7LHFG_Q/formResponse?usp=pp_url&entry.1509298625=${formData.phone}&entry.740224318=${formData.email}&entry.1294341968=${formData.company}&entry.1228085098=${formData.remarks}&submit=Submit`;

    const res = await fetch(prefilledLink);

    console.log(res);
    
    // Optional: Reset form after submission
    setFormData({ email: '', company: '', phone: '', remarks: '' });
    
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a hidden form element
    const form = document.createElement('form');
    form.action = 'https://docs.google.com/forms/d/e/1FAIpQLScL9KGrkSdcNcE0VtfOvXROq4SIUZnOITlNoyJ6nasbqyhbnw/formResponse';
    form.method = 'POST';
    form.target = 'hiddenIframe';
    form.style.display = 'none';

    // Add all form fields
    const addField = (name, value) => {
      if (!value) return; // Skip empty fields
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addField('entry.1001698622', formData.phone);
    addField('entry.1427582892', formData.email);
    addField('entry.1931833310', formData.company);
    addField('entry.736732928', formData.remarks);

    // Create hidden iframe if it doesn't exist
    let iframe = document.getElementById('hiddenIframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hiddenIframe';
      iframe.name = 'hiddenIframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();
    
    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);

    // Reset form and close feedback
    setFormData({ email: '', company: '', phone: '', remarks: '' });
    setShowFeedback(false);
  };

  return (
    
    <div className="feedback-overlay">
    <div className={styles.feedbackForm}>
    <form onSubmit={handleSubmit} >
      
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

      <div className={styles.formGroup + " mb-3"}>
        <label htmlFor="remarksInput" className={styles.formLabel}>Remarks</label>
        <input
          className={styles.formControl}
          id="remarksInput"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="Type here"
        />
      </div>
      
      <button type="submit" className={styles.submitBtn}
        onClick={handleSubmit}>
        Submit
      </button>
    </form>
    </div>
    </div>
    /*<iframe width="640px" height="480px" 
    src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=UxG7WLKpoUGiPRjayLcYeTgYbDMTH1BAq5wnwGzuSHpUOE1UTENENVRIOTIwOVNMUVBFSUhaNTBaSi4u&embed=true" 
    frameborder="0" marginwidth="0" marginheight="0" style= {{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} 
    allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>*/
  );
}