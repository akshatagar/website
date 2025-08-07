import React, { useState, useEffect } from "react";
import styles from "./InteractiveImage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ partners }) {


  let del = '0s';

  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  /*const [diagramRef, isVisible] = useIntersectionObserver({
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
}, [isVisible]);*/


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDiagramOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
      <div className=" container col-xxl-9" style={{paddingTop: "10rem"}}>
        <div className={"row align-items-center pb-0 " + styles.fullContainer}>
          <div
            className={
              styles.textContainer + " col-lg-5 pe-3 mb-4"
            }
          >
            <h1 className="fw-bold mb-3" id="headline">
              AI First Solutions
            </h1>
            <p className="fs-5 mb-0">
              Empowering decisions with intelligent automation and contextual AI
              systems.
            </p>
          </div>

          <div className={ "col-lg-7 mb-4 " + styles.diagramContainer}>
              <div className={styles.interactiveDiagram}>

                <div className={`${styles.centralLogo} ${isDiagramOpen ? styles.clicked : ''}`}
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
      </div>
    </div>
  );
}
