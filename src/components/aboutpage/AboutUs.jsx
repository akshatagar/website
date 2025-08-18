import styles from './AboutUs.module.css';
import Image from 'next/image';

export default function AboutUs( { aboutUs } ) {
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
  <div className="mx-auto" style={{ position: 'relative', width: '95%', height: '400px', marginBottom: '50px' }}>
    <Image
      src="/pic2.jpeg"
      alt="AI"
      className={styles.aboutImage}
      fill     // makes it fill the parent div
      style={{ objectFit: 'cover' }}
    />
  </div>

  <h1 className={styles.whySection + " text-center text-white fw-bold"}>Why Vendors Choose Us</h1>

    {/* How we do it Section */}
<div className="container">
  <div className={"row align-items-center justify-content-center " + styles.listSection}>
    {/* Left: Heading */}
    <div className="col-md-4 text-md-end text-center mb-4 mb-md-0">
      <h4 className="text-white">Global leaders trust Omintel to:</h4>
    </div>

    {/* Right: List */}
    <div className="col-md-6">
      <ul className={styles.processList}>
          {aboutUs["howWeDoIt"].map((item, index) => (
          <li key={index} className='mb-3'>{item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

<div className= "justify-content-center d-flex my-5">
<div className={`${styles.aboutSection} py-5 position-relative rounded-4`}>
  {/* Subtle Grid Pattern Background */}
  <div className={`${styles.backgroundPattern} position-absolute`}></div>
  
  <div className="row justify-content-center position-relative">
    <div className="col-lg-8">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className={`${styles.sectionHeader} mb-3`}>Why Omintel?</h2>
        <div className={`${styles.prominentDivider} mx-auto`}></div>
      </div>

      {/* Content Blocks */}
      <div className={`${styles.contentCard} mb-4 p-4 p-lg-5`}>
        <p className={`${styles.paragraph} fs-4`}>
          AI has transformed the way every business leader makes decisions. Technology is no longer the preserve of IT experts—today, every manager has the tools to engage with digital transformation.
        </p>
      </div>

      <div className={`${styles.contentCard} mb-4 p-4 p-lg-5`}>
        <p className={`${styles.paragraph} fs-4`}>
          Yet in this new reality, the challenge is no longer access to technology, but clarity. With countless solutions, competing voices, and rapid shifts, finding the right fit for your business problem has never been harder.
        </p>
        </div>

      {/* Core Value Highlight */}
      <div className={`${styles.coreValueCard} p-4 p-lg-5 mb-4`}>
        <p className={`${styles.paragraph} fs-4 mb-0`}>
          Omintel was founded to cut through this noise. We bring <span className="fw-bold text-white">diverse solution possibilities into one place</span>—a trusted platform that combines a <span className="fw-bold text-white">Knowledge Hub</span> of current thinking with a <span className="fw-bold text-white">curated portfolio of global SaaS and AI vendors</span>.
        </p>
      </div>

      {/* Closing Statement */}
      <div className="text-center mt-5 pt-3">
        <p className={`${styles.closingStatement} display-6`}>
          At Omintel, we connect <span className={styles.gradientText}>innovation</span> with <span className={styles.gradientText}>impact</span>.
        </p>
      </div>
    </div>
  </div>
</div>
</div>

</section>    
  )
}