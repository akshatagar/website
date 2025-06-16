// 'use client'; // Must be first line
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const FeedbackForm = () => {
//   const initialValues = {
//     name: '',
//     email: '',
//     age: '',
//     satisfaction: '',
//     improvements: [],
//     feedback: '',
//     recommendation: ''
//   };

//   const validationSchema = Yup.object({
//     age: Yup.string().required('Age group is required'),
//     satisfaction: Yup.number().required('Satisfaction rating is required'),
//     recommendation: Yup.string().required('Recommendation is required'),
//     email: Yup.string().email('Invalid email format')
//   });

//   const improvementOptions = [
//     'Design', 'Navigation', 'Content', 
//     'Speed', 'Mobile Experience', 'Features'
//   ];

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     console.log('Form data:', values);
//     setSubmitting(false);
//     resetForm();
//   };

//   return (
//     <div className="feedback-container">
//       <div className="feedback-card">
//         <div className="feedback-header">
//           <h2>Website Feedback Survey</h2>
//         </div>
        
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting, values }) => (
//             <Form 
//               action="https://formsubmit.co/your@email.com" 
//               method="POST"
//               className="feedback-form"
//             >
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <div className="form-group">
//                 <label>Name (optional)</label>
//                 <Field 
//                   type="text" 
//                   name="name" 
//                   placeholder="Your name" 
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email (optional)</label>
//                 <Field 
//                   type="email" 
//                   name="email" 
//                   placeholder="your@email.com" 
//                 />
//                 <ErrorMessage name="email" component="div" className="error-message" />
//               </div>

//               <div className="form-group">
//                 <label>Age Group *</label>
//                 <Field as="select" name="age">
//                   <option value="">Select your age group</option>
//                   <option value="under-18">Under 18</option>
//                   <option value="18-25">18-25</option>
//                   <option value="26-35">26-35</option>
//                   <option value="36-45">36-45</option>
//                   <option value="46-55">46-55</option>
//                   <option value="56-65">56-65</option>
//                   <option value="over-65">Over 65</option>
//                 </Field>
//                 <ErrorMessage name="age" component="div" className="error-message" />
//               </div>

//               <div className="form-group">
//                 <label>Satisfaction Rating *</label>
//                 <div className="rating-options">
//                   {[1, 2, 3, 4, 5].map(num => (
//                     <label key={num} className="rating-option">
//                       <Field 
//                         type="radio" 
//                         name="satisfaction" 
//                         value={num} 
//                       />
//                       <span>
//                         {num} {num === 1 ? '(Very Dissatisfied)' : num === 5 ? '(Very Satisfied)' : ''}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//                 <ErrorMessage name="satisfaction" component="div" className="error-message" />
//               </div>

//               <div className="form-group">
//                 <label>Improvement Areas (check all that apply)</label>
//                 <div className="improvement-options">
//                   {improvementOptions.map((option, index) => (
//                     <label key={option} className="improvement-option">
//                       <Field 
//                         type="checkbox" 
//                         name="improvements" 
//                         value={option} 
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Additional Feedback</label>
//                 <Field 
//                   as="textarea" 
//                   name="feedback" 
//                   rows="3" 
//                   placeholder="Your suggestions..." 
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Would you recommend us? *</label>
//                 <div className="recommendation-options">
//                   <label>
//                     <Field type="radio" name="recommendation" value="yes" />
//                     Yes
//                   </label>
//                   <label>
//                     <Field type="radio" name="recommendation" value="no" />
//                     No
//                   </label>
//                   <label>
//                     <Field type="radio" name="recommendation" value="maybe" />
//                     Maybe
//                   </label>
//                 </div>
//                 <ErrorMessage name="recommendation" component="div" className="error-message" />
//               </div>

//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? 'Submitting...' : 'Submit Survey'}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;