import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { useFeedback } from '../contexts/FeedbackContext';

export default function Footer() {
  
  const { showFeedback, setShowFeedback } = useFeedback();

  return (
    <footer className="container-fluid py-3 text-white w-100">
      <div className="row gy-3 align-items-center mx-0">
        <div className="col-12 col-md-4 col-lg-4 text-center text-md-start">
          <span style={{ marginRight: "10px" }}>© Omintel</span>
              <Link href="https://www.linkedin.com/company/omintel-ventures/">
              <img src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" style={{ width: "35px", height: "35px", marginBottom: "3px" }}></img>
              </Link>
        </div>
        
        <div className="col-12 col-md-4 col-lg-4 text-center" id="contact-us">
          <div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <h5 className="text-white text-center fw-bold">Let’s Build Your Next Success Story</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="tel:+97143796750" className="text-white text-decoration-none"> Email us : contact@omintel.com or Call + 9715xxxxxx— and see how Omintel can unlock your
next competitive advantage</a> 
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4 text-center text-md-end px-3">
          <div className="d-flex justify-content-center justify-content-md-end align-items-center">
            <button type="button" 
            className="btn custom-btn"
            onClick={() => setShowFeedback(!showFeedback)}
            >
              Feedback
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
