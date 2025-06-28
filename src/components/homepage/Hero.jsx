import React, { useState } from 'react';
import styles from './InteractiveImage.module.css';

export default function Hero() {

    const [isClickedC, setIsClickedC] = useState(false);
    const [isClickedH, setIsClickedH] = useState(false);
    const [isClickedP, setIsClickedP] = useState(false);
    const [isClickedL, setIsClickedL] = useState(false);

    const nodes1 = [
        { id: 1, name: 'Home', img: '/white-logo.png', top: '40%', left: '68%', size: '55px' },
        { id: 2, name: 'Partners', img: '/white-logo.png', top: '40%', left: '25%', size: '55px' },
        { id: 3, name: 'Learn more', img: '/white-logo.png', top: '70%', left: '60%', size: '55px' }
    ]

    const nodesH = [
        { id: 1, name: 'Main Page', img: '/white-logo.png', top: '-17%', left: '-16%', size: '40px' },
        { id: 2, name: 'About', img: '/white-logo.png', top: '-20%', left: '4%', size: '40px' },
        { id: 3, name: 'Contact', img: '/white-logo.png', top: '0%', left: '20%', size: '40px' }
    ]

    const nodesP = [
        { id: 1, name: 'Speedtech.ai', img: '/white-logo.png', top: '-17%', left: '-16%', size: '40px' },
        { id: 2, name: 'Route Mobile', img: '/white-logo.png', top: '-20%', left: '4%', size: '40px' },
        { id: 3, name: 'Temporary', img: '/white-logo.png', top: '10%', left: '-17%', size: '40px' },
        { id: 11, name: 'Temp', img: '/white-logo.png', top: '20%', left: '0%', size: '40px' }
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
  }

  return (
    <div className="container col-xxl-8 py-5 hero">
      <div className="row align-items-center gx-5 py-5">
        {/* Text Column - Left Side */}
          <div className={styles.textContainer + " col-lg-5"}>
              <h1 className="display-5 fw-bold lh-1 mb-3 hero-header" id="headline">
                AI First Solutions
              </h1>
              <p>Empowering decisions with intelligent automation and contextual AI systems. </p>
          </div>

        {/* Diagram Column - Right Side */}
        <div className="col-lg-6">
          <div className={styles.diagramContainer}>
            <div className={styles.interactiveDiagram}>
              {/* Central Logo */}
              <div className={`${styles.centralLogo} ${isClickedC ? styles.clicked : ''}`}
                onClick={handleCentralClick}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/Logo_with_white.png" 
                  alt="AI Core" 
                  className="img-fluid"
                />
              </div>

              {/*primary logos*/}


              {nodes1.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC ? styles.scattered : ''}`}
                  onClick={() => handleClick1(node.id)}
                  style={{
                    cursor: 'pointer',
                    '--final-top': node.top,
                    '--final-left': node.left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
                  />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}

              {nodesH.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC && isClickedH ? styles.scattered : ''}`}
                  style={{
                    '--final-top': `calc(${nodes1.at(0).top} + ${node.top})`,
                    '--final-left': `calc(${nodes1.at(0).left} + ${node.left})`,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
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
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
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
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
                  />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}

              

              {/* Satellite Logos 
              {nodes.map((node) => (
                <div 
                  key={node.id}
                  className={`${styles.satelliteLogo} ${isClickedC ? styles.scattered : ''}`}
                  onClick={handleCentralClick}
                  style={{
                    top: node.top,
                    left: node.left,
                    width: `calc(${node.size} + 30px)`,
                    height: `calc(${node.size} + 30px)`
                    '--final-top': node.top,
                    '--final-left': node.left,
                    '--size': node.size,
                    '--delay': `${node.id * 0.1}s`                    
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className={styles.satelliteImg}
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
                  />
                  <span className={styles.satelliteLabel}>{node.name}</span>
                </div>
              ))}*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
