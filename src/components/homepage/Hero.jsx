import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import Image from 'next/image';

export default function Hero({partners, aboutUs}) {

    /*const [isClickedH, setIsClickedH] = useState(false);
    const [isClickedP, setIsClickedP] = useState(false);
    const [isClickedL, setIsClickedL] = useState(false);*/

    /*const nodes = [
        { id: 1, name: 'Home', img: '/white-logo.png', top: '30%', left: '78%', size: '55px' },
        { id: 2, name: 'Partners', img: '/white-logo.png', top: '25%', left: '15%', size: '55px' },
        { id: 3, name: 'Learn more', img: '/white-logo.png', top: '80%', left: '70%', size: '55px' }
    ]*/

    /*const nodesH = [
        { id: 1, name: 'Main Page', img: '/white-logo.png', top: '-17%', left: '-16%', size: '40px' },
        { id: 2, name: 'About', img: '/white-logo.png', top: '-20%', left: '4%', size: '40px' },
        { id: 3, name: 'Contact', img: '/white-logo.png', top: '0%', left: '20%', size: '40px' }
    ]

    const nodesP = [
        { id: 1, name: 'Speedtech.ai', img: '/white-logo.png', top: '-17%', left: '-16%', size: '40px' },
        { id: 2, name: 'Route Mobile', img: '/white-logo.png', top: '-20%', left: '4%', size: '40px' },
        { id: 3, name: 'Temporary', img: '/white-logo.png', top: '10%', left: '-17%', size: '40px' },
        { id: 4, name: 'Temp', img: '/white-logo.png', top: '20%', left: '0%', size: '40px' }
    ]

    const nodesL = [
        { id: 1, name: 'Banking', img: '/white-logo.png', top: '6%', left: '-20%', size: '40px' },
        { id: 2, name: 'AI', img: '/white-logo.png', top: '13%', left: '20%', size: '40px' },
        { id: 3, name: 'Miscellaneous', img: '/white-logo.png', top: '-5%', left: '20%', size: '40px' }
    ]

  const handleCentralClick = () => {
    if (isClickedC) {
      setIsClickedH(false);
      setIsClickedL(false);
      setIsClickedP(false);
    }
    setIsClickedC(!isClickedC);
  }

    const handleClick1 = (id) => {
    id == 1 ? setIsClickedH(!isClickedH) : id == 2 ? setIsClickedP(!isClickedP) : setIsClickedL(!isClickedL);
  }*/

                  {/*nodes1.map((node) => (
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
             ))}*/}

  return (
    <div className="container col-xxl-8 py-5 hero">
      <div className="row flex-nowrap g-3 py-5 " style={{paddingTop: '12rem'}}>
          <div className={styles.textContainer + " col-auto pe-3 align-self-center"}>
            <h1 className="fw-bold mb-3" id="headline">
              AI First Solutions
            </h1>
            <p className="fs-5 mb-0 " style={{maxWidth: '45ch'}}>Empowering decisions with intelligent automation and contextual AI systems. </p>
          </div>
        
        <div className="col-lg-7 text-center ps-3 align-self-end">
          {/* Title */}
            <h2 className={styles.aboutTitle + " fw-bold mb-3"}>About Us</h2>

              {/* Top Paragraph */}
              <p className="fs-6 mb-0 " style={{ color: 'white' }}>
                {aboutUs["aboutUsText"]}
              </p>
       
        </div>
      </div>
    </div>
  );
}
