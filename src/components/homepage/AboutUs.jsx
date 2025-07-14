import styles from './InteractiveImage.module.css';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
//import { intersectionObserver } from './intersectionObserver';
import Link from 'next/link';  

const intersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default function AboutUs({aboutUs, partners}) {
  let nodes = [];

  const interval = 360 / partners.length;
  for (let i = 0; i < partners.length; i++) {
    nodes.push({  
      id: i,
      name: partners[i].name,
      img: partners[i].logoUrl,
      top: `calc(${Math.sin((i * interval * (Math.PI / 180)) + (Math.PI / 4)) * 38}% + 50%)`,  
      left: `calc(${Math.cos(i * interval * (Math.PI / 180) + (Math.PI / 4)) * 40}% + 50%)`,
      size: '55px'
    });
  }

  const [diagramRef, isVisible] = intersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  useEffect(() => {
  console.log('Is diagram visible?', isVisible);
  }, [isVisible]);

  /*const [isClicked, setIsClicked] = useState(false);

  const handleCentralClick = () => {
    setIsClicked(!isClicked);
  }*/

  /*const handleSatteliteClick = (id) => {
    return (
      <PartnersCarousel partners={partners} centerId={id}/>
    );
  }*/

    return (
      <section id="about" className="about-section py-5">
        <div className='container'>
          <div className="row align-items-center flex-nowrap gx-5">


            <div ref = {diagramRef} className={styles.diagramContainer + " col-lg-6 mb-4 mb-lg-0"}>
              <div className={styles.interactiveDiagram}>

                <div className={`${styles.centralLogo} ${isVisible ? styles.clicked : ''}`}
                  //onClick={handleCentralClick}
                  //style={{ cursor: 'pointer' }}
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

                {nodes.map((node) => (
                  <div 
                    key={node.id}
                    className={`${styles.satelliteLogo} ${isVisible ? styles.scattered : ''}`}
                    style={{
                      top: node.top,
                      left: node.left,
                      width: `calc(${node.size}px + 30px)`,
                      height: `calc(${node.size}px + 30px)`,
                      '--final-top': node.top,
                      '--final-left': node.left,
                      '--size': node.size,
                      '--delay': `calc(${node.id * 0.1}s + 0.5s)`                    
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


            <div className="col-md-7">
              <h3 className="text-white"
              style={{
              paddingBottom: '3rem',
              }}>
              How we do it?
              </h3>
              <ul className={styles.processList}>
                {aboutUs["howWeDoIt"].map((item, index) => (
                <li key={index} className='mb-3'>{item}
                </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>
        
  )
}