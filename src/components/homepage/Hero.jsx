import React, { useState, useEffect, useRef } from "react";
import styles from "./InteractiveImage.module.css";
import Image from "next/image";
import Link from "next/link";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
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

export default function Hero({ partners }) {

    let del = '0s';

  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  const [diagramRef, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });



 useEffect(() => {
  if (isVisible) {
    setIsDiagramOpen(true);
    del = '0.4s'
  } else if (!isVisible) {
    setIsDiagramOpen(false);
    del = '0s'
  }
}, [isVisible]);
  /*useEffect(() => {
    const timer = setTimeout(() => {
      setIsDiagramOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);*/

  const handleCentralClick = () => {
    setIsDiagramOpen(!isDiagramOpen);
  };


  let nodes = [];

  const interval = 360 / partners.length;
  for (let i = 0; i < partners.length; i++) {
    nodes.push({  
      id: i,
      name: partners[i].name,
      img: partners[i].logoUrl,
      top: `calc(${Math.sin(((i * interval * (Math.PI / 180)) + (Math.PI / 4))) * 38}% + 50%)`,  
      left: `calc(${Math.cos(((i * interval * (Math.PI / 180)) + (Math.PI / 4))) * 38}% + 50%)`,
      size: '55px',
      hue: partners[i].logoHue
    });
    //25.004
  }

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
  
  {
    /*nodes1.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC ? styles.scattered : ''}`}
                  onClick={() => handleClick1(node.id)}
                  style={{
                    cursor: 'pointer',
                    '--final-top': node.top,
                    '--final-left': node.left,
                    '--init-top':'50%',
                    '--init-left': '50%',
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                <Image 
                  src={node.img} 
                  alt={node.name}
                  width={parseInt(node.size)} 
                  height={parseInt(node.size)}
                  loading="lazy"
                  className={styles.satelliteImg}
                />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}

              {/*{nodesH.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC && isClickedH ? styles.scattered : ''}`}
                  style={{
                    '--final-top': `calc(${nodes1.at(0).top} + ${node.top})`,
                    '--final-left': `calc(${nodes1.at(0).left} + ${node.left})`,
                    '--init-top':nodes1.at(0).top,
                    '--init-left': nodes1.at(0).left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                <Image 
                  src={node.img} 
                  alt={node.name}
                  width={parseInt(node.size)} 
                  height={parseInt(node.size)}
                  loading="lazy"
                  className={styles.satelliteImg}
                />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}


              {nodesP.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC && isClickedP ? styles.scattered : ''}`}
                  style={{
                    '--final-top': `calc(${nodes1.at(1).top} + ${node.top})`,
                    '--final-left': `calc(${nodes1.at(1).left} + ${node.left})`,
                    '--init-top':nodes1.at(1).top,
                    '--init-left': nodes1.at(1).left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                <Image 
                  src={node.img} 
                  alt={node.name}
                  width={parseInt(node.size)} 
                  height={parseInt(node.size)}
                  loading="lazy"
                  className={styles.satelliteImg}
                />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}

              {nodesL.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC && isClickedL ? styles.scattered : ''}`}
                  style={{
                    '--final-top': `calc(${nodes1.at(2).top} + ${node.top})`,
                    '--final-left': `calc(${nodes1.at(2).left} + ${node.left})`,
                    '--init-top':nodes1.at(2).top,
                    '--init-left': nodes1.at(2).left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                <Image 
                  src={node.img} 
                  alt={node.name}
                  width={parseInt(node.size)} 
                  height={parseInt(node.size)}
                  loading="lazy"
                  className={styles.satelliteImg}
                />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
             ))}*/
  }

  return (
    <div className="w-100 py-0 hero">
      <div className="container text-center w-100" style={{paddingTop: "6rem"}}>
        <div className="position-relative overflow-hidden" style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}>
          <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="position-absolute"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "0",
            top: "0",
            left: "0"
          }}
          >
            <source src="/backvid.mp4" type="video/mp4" />
          </video>
          
          <div className="position-absolute w-100 h-100" style={{
            background: "background: rgba(0, 30, 60, 0.6)",
            zIndex: "0"
          }}></div>
          
          <div
            className={`${styles.textContainer} col-lg-10 mx-auto px-lg-5 py-5`}>
            <h1 className={`display-5 fw-bold mb-4 ${styles.headline}`}>
                  Powering Digital & AI Transformation<br />
                  <span className={styles.highlight}>in the GCC & Beyond</span>
            </h1>
            <p className={`lead fs-3 mb-4 ${styles.subheadline}`}>
                      Omintel connects banks, financial services, and large institutions to 
        <span className="text-white-80"> globally proven</span> Digital & AI SaaS solutions — 
        <span className="fw-semibold text-white"> tailored for GCC and African markets</span>.
            </p>
          </div>
        </div>
        </div>


           <div className={`${styles.divider} mx-auto mb-4`}></div>


    <div className="row justify-content-center mt-5">
    <div className={`col-lg-7 ${styles.listContainer}`}>
      <div className={`${styles.listHeaderContainer} mb-4`}>
        <h3 className={`${styles.listHeader} display-5 fw-bold`}>
          <span>We Solve The Digital Execution Gap</span>
        </h3>
        <div className={`${styles.prominentDivider} mx-auto`}></div>
      </div>

      <div className={`${styles.textContainer} p-4`}>
        <ul className={`list-unstyled ${styles.styledList}`}>
          <li className="py-3 px-3">
            <div className="d-flex align-items-center">
              <div className={`${styles.listIcon} me-3`}>
                <i className="bi bi-exclamation-diamond-fill"></i>
              </div>
              <span className={`${styles.listItem} fs-4`}>Too many choices</span>
            </div>
          </li>
          <li className="py-3 px-3">
            <div className="d-flex align-items-center">
              <div className={`${styles.listIcon} me-3`}>
                <i className="bi bi-arrow-left-right"></i>
              </div>
              <span className={`${styles.listItem} fs-4`}>Too little local alignment</span>
            </div>
          </li>
          <li className="py-3 px-3">
            <div className="d-flex align-items-center">
              <div className={`${styles.listIcon} me-3`}>
                <i className="bi bi-speedometer2"></i>
              </div>
              <span className={`${styles.listItem} fs-4`}>Projects stalling before impact</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="row justify-content-center mt-5">

          <div className={ "col-lg-7 mb-4 " + styles.diagramContainer}>
              <div className={styles.interactiveDiagram}>

                <div ref={diagramRef} className={`${styles.centralLogo} ${isDiagramOpen ? styles.clicked : ''}`}
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

                {nodes.map((node) => (
                  <div 
                    key={node.id}
                    className={`${styles.satelliteLogo} ${isDiagramOpen ? styles.scattered : ''}`}
                    style={{
                      top: node.top,
                      left: node.left,
                      width: `calc(${node.size}px + 30px)`,
                      height: `calc(${node.size}px + 30px)`,
                      '--final-top': node.top,
                      '--final-left': node.left,
                      '--size': node.size,
                      '--delay': `calc(${node.id * 0.1}s + ${del})`,
                      '--hue': node.hue                    
                    }}
                  >
                    <Link href={{
                      pathname:'/partners',
                      query: { id: node.id }
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
        </div>

    <div className={`${styles.advantageSection} mt-5 py-5`}>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className={`${styles.advantageHeader} mb-4`}>
            The Omintel Advantage
          </h2>
          <p className={`${styles.advantageTagline} fs-3 mb-5`}>
            One Partner. All the Right Solutions.
          </p>
      
          <div className={`${styles.advantageList} row justify-content-center`}>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.advantageCard} h-100 p-4`}>
                <div className={styles.advantageIcon}>
                  <i className="bi bi-stars text-white"></i>
                </div>
                <h4 className="mb-3">Curated Portfolio</h4>
                <p>Only top-tier, proven SaaS vendors in Digital & AI</p>
              </div>
            </div>
        
            <div className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.advantageCard} h-100 p-4`}>
                <div className={styles.advantageIcon}>
                  <i className="bi bi-globe2 text-white"></i>
                </div>
                <h4 className="mb-3">Market Localization</h4>
                <p>Compliance-ready, culturally adapted, deployment-friendly</p>
              </div>
            </div>
        
            <div className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.advantageCard} h-100 p-4`}>
                <div className={styles.advantageIcon}>
                  <i className="bi bi-people-fill text-white"></i>
                </div>
                <h4 className="mb-3">Consultative Engagement</h4>
                <p>We start with your business problem, not a product pitch</p>
              </div>
            </div>
        
            <div className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.advantageCard} h-100 p-4`}>
                <div className={styles.advantageIcon}>
                  <i className="bi bi-lightning-charge-fill text-white"></i>
                </div>
                <h4 className="mb-3">Faster Value Realization</h4>
                <p>Pilots, sandboxes, and measurable KPIs from day one</p>
              </div>
            </div>
        
            <div className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.advantageCard} h-100 p-4`}>
                <div className={styles.advantageIcon}>
                  <i className="bi bi-diagram-3-fill text-white"></i>
                </div>
                <h4 className="mb-3">Vendor Orchestration</h4>
                <p>We manage contracts, delivery, and success metrics end-to-end</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
