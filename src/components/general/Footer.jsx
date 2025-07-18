import Link from "next/link";
import FeedbackForm from "../feedbackpage/FeedbackForm";
import Image from "next/image";
import { useState } from 'react';

export default function Footer() {
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <footer className="container-fluid py-3 text-white w-100">
      <div className="row gy-3 align-items-center mx-0">
        <div className="col-12 col-md-4 col-lg-4 text-center text-md-start">
          <span style={{ marginRight: "10px" }}>© Omintel</span>
              <Link href="#">
              <img src="https://img.icons8.com/?size=100&id=85141&format=png&color=FFFFFF" style={{ width: "35px", height: "35px", marginBottom: "3px" }}></img>
              </Link>
        </div>
        
        <div className="col-12 col-md-4 col-lg-4 text-center" id="contact-us">
          <div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <a href="mailto:contact@omintel.com" className="text-white text-decoration-none">contact@omintel.com</a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="tel:+97143796750" className="text-white text-decoration-none">(+971) 43 796 750</a> 
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4 text-center text-md-end px-3">
          <div className="d-flex justify-content-center justify-content-md-end align-items-center">
            <button type="button" 
            className="btn custom-btn"
            onClick={() => setShowFeedback(true)}
            >
              Feedback
            </button>
            
          </div>
        {showFeedback && (
        <FeedbackForm onClose={() => setShowFeedback(false)} />
        )}
        </div>

      </div>
    </footer>
  );
}
