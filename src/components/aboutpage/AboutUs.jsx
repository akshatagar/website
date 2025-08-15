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
      <h5 className="text-white">Global leaders trust Omintel to:</h5>
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

<div className={`${styles.benefitSection} mt-5 py-5`}>
  <div className="row justify-content-center">
    <div className="col-lg-8 text-center">
      <h2 className={`${styles.sectionHeader} mb-4`}>
        What Clients Gain
      </h2>
      <p className={`${styles.sectionTagline} fs-3 mb-5 text-white`}>
        With Omintel, you get faster deployment, lower risk and better ROI
      </p>
      
      {/* Solutions Grid */}
      <div className={`${styles.solutionsGrid} row justify-content-center`}>
        {[
          "Conversational AI",
          "Intelligent Document Processing",
          "CPAAS Solutions",
          "AI Assisted Recruitment",
          "Training Platforms",
          "Audit Digitization",
          "Workflow Automation",
          "AI Enablement"
        ].map((solution, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className={`${styles.solutionCard} h-100 p-4`}>
              <div className={styles.solutionIcon}>
                <i className={`bi ${[
                  'bi-chat-square-text',
                  'bi-file-earmark-text',
                  'bi-phone',
                  'bi-people',
                  'bi-laptop',
                  'bi-clipboard-data',
                  'bi-gear',
                  'bi-cpu'
                ][index]}`} />
              </div>
              <h4 className="text-white mb-0">{solution}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Statement */}
      <p className={`${styles.closingStatement} fs-4 mt-5 text-white-90`}>
        We deliver global innovation, locally adapted — so you get results, not just technology.
      </p>
    </div>
  </div>
</div>

</section>    
  )
}