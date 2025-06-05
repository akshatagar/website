export default function ContactUs() {
    return (
        <section id="contact-us">
            <h1 className="Contactus-title">FAQs/Contact us</h1>
            <div class="container mt-5">
  <h2 class="mb-4">Website Feedback Survey</h2>
  <form>
    
    <div class="mb-3">
      <label for="name" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter your name" />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" />
    </div>

    <div class="mb-3">
      <label class="form-label">How satisfied are you with the website?</label>
      <select class="form-select">
        <option selected disabled>Choose one</option>
        <option value="1">Very Satisfied</option>
        <option value="2">Satisfied</option>
        <option value="3">Neutral</option>
        <option value="4">Unsatisfied</option>
        <option value="5">Very Unsatisfied</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Which features have you used? (Check all that apply)</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="feature1" />
        <label class="form-check-label" for="feature1">Live Chat</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="feature2" />
        <label class="form-check-label" for="feature2">Search</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="feature3" />
        <label class="form-check-label" for="feature3">Account Settings</label>
      </div>
    </div>
    <div class="mb-3">
      <label for="comments" class="form-label">Additional Comments</label>
      <textarea class="form-control" id="comments" rows="4" placeholder="Your thoughts..."></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Survey</button>
  </form>
</div>
        </section>
    )
}