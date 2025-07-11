import styles from './InteractiveImage.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link'
import PartnerPage from '@/src/pages/partners/[id]';
  

export default function AboutUs({aboutUs, partners}) {
  const [selectedPartnerId, setSelectedPartnerId] = useState(null)

  let nodes = [];

  const interval = 360 / partners.length;
  for (let i = 0; i < partners.length; i++) {
    nodes.push({  
      id: i,
      name: partners[i].name,
      img: partners[i].logoUrl,
      top: `calc(${Math.sin((i * interval * (Math.PI / 180)) + (Math.PI / 4)) * 40}% + 50%)`,  
      left: `calc(${Math.cos(i * interval * (Math.PI / 180) + (Math.PI / 4)) * 40}% + 50%)`,
      size: '55px'
    });
  }

  const [isClicked, setIsClicked] = useState(false);

  const handleCentralClick = () => {
    setIsClicked(!isClicked);
  }

  /*const handleSatteliteClick = (id) => {
    return (
      <PartnersCarousel partners={partners} centerId={id}/>
    );
  }*/

    return (
      <section id="about" className="about-section py-5">
        <div className={`${styles.diagramContainer} row`}>
            <div className={`${styles.interactiveDiagram} col-md-6`}>

            
              <div className={`${styles.centralLogo} ${isClicked ? styles.clicked : ''}`}
                onClick={handleCentralClick}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src="/Logo_with_white.png" 
                  alt="AI Core" 
                  className="img-fluid"
                  width={120}
                  height={120}
                  priority={true}
                />
              </div>


              {/* Satellite Logos */}
              {nodes.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClicked ? styles.scattered : ''}`}
                  onClick={PartnerPage(partners, node.id)}
                  style={{
                    top: node.top,
                    left: node.left,
                    width: `calc(${node.size} + 30px)`,
                    height: `calc(${node.size} + 30px)`,
                    '--final-top': node.top,
                    '--final-left': node.left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <Link href={{
                    pathname:'/partners',
                    query: { id: node.id}
                  }}>
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
                  />
                  </Link>
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}
              </div>
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
        {aboutUs["howWeDoIt"].map((item, index) => (
          <li key={index}>{item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</section>
        
    )
}