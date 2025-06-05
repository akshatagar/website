export default function ContactUs() {
    return (
        <section id="contact-us">
            <h1 className="Contactus-title">FAQs/Contact us</h1>
            <div className="container mt-5">
  <h2 className="mb-4">Website Feedback Survey</h2>
  <form>
    
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Full Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="name@example.com" />
    </div>

    <div className="mb-3">
      <label className="form-label">How satisfied are you with the website?</label>
      <select className="form-select" defaultValue="none">
        <option value="none" disabled>Choose one</option>
        <option value="1">Very Satisfied</option>
        <option value="2">Satisfied</option>
        <option value="3">Neutral</option>
        <option value="4">Unsatisfied</option>
        <option value="5">Very Unsatisfied</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">Which features have you used? (Check all that apply)</label>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="feature1" />
        <label className="form-check-label" htmlFor="feature1">Live Chat</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="feature2" />
        <label className="form-check-label" htmlFor="feature2">Search</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="feature3" />
        <label className="form-check-label" htmlFor="feature3">Account Settings</label>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="comments" className="form-label">Additional Comments</label>
      <textarea className="form-control" id="comments" rows="4" placeholder="Your thoughts..."></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit Survey</button>
  </form>
</div>
        </section>
    )
}