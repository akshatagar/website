import styles from './AboutUs.module.css';
import Image from 'next/image';

export default function AboutUs() {
    return (
<section id="about" className="about-section py-5">
  <div className="container text-center">
    {/* Title */}
    <h1 className={styles.aboutTitle + " mb-4"}>About Us</h1>

    {/* Top Paragraph */}
    <p className="lead mb-5 " style={{ color: 'white' }}>
      Omintel Ventures is a UAE-based digital solutions partner focused on enabling AI-powered transformation across BFSI and Corporate Entities in the GCC. We connect global SaaS innovators with regional demand through a channel-driven, insight-led model.
    </p>
  
  </div>

    {/* Center Image */}
  <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '50px' }}>
    <Image
      src="/pic2.jpeg"
      alt="AI"
      className={styles.aboutImage}
      fill     // makes it fill the parent div
      style={{ objectFit: 'cover' }}
    />
  </div>

    {/* How we do it Section */}
<div className="container">
  <div className="row align-items-center justify-content-center">
    {/* Left: Heading */}
    <div className="col-md-3 text-md-end text-center mb-4 mb-md-0">
      <h3 className="text-white">How we do it?</h3>
    </div>

    {/* Right: List */}
    <div className="col-md-7">
      <ul className={styles.processList}>
        <li>Select high-impact SaaS platforms in automation, AI, data and compliance</li>
        <li>Enable client adoption through tailored outreach and use-case alignment</li>
        <li>Accelerate market entry via advisory-led sales, RFI/RFP support and ecosystem integration</li>
      </ul>
    </div>
  </div>
</div>
</section>
        
    )
}