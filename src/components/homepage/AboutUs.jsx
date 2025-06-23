export default function AboutUs() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <h1 className="about-title text-center mb-5">About Us</h1>
                
                <div className="row align-items-center">
                    {/* Text Content - Left Side */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="about-content pe-lg-4">
                            <p className="lead mb-4">
                                Omintel Ventures is a UAE-based digital solutions partner focused on enabling AI-powered transformation across BFSI and Corporate Entities in the GCC. We connect global SaaS innovators with regional demand through a channel-driven, insight-led model.
                            </p>

                            <h3 className="mb-3">How we do it?</h3>
                            <ul className="process-list">
                                <li className="mb-3">Select high-impact SaaS platforms in automation, AI, data and compliance</li>
                                <li className="mb-3">Enable client adoption through tailored outreach and use-case alignment</li>
                                <li className="mb-3">Accelerate market entry via advisory-led sales, RFI/RFP support and ecosystem integration</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img 
                                src="/Logo_with_white.png"
                                alt="AI Solutions in Action"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}