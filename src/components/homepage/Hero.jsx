import React from 'react';
export default function Hero() {

    const nodes = [
    { id: 1, name: 'Attention', img: '/white-logo.png', top: '15%', left: '75%', size: '50px' },
    { id: 2, name: 'Analysis', img: '/white-logo.png', top: '60%', left: '12%', size: '45px' },
    { id: 3, name: 'Options', img: '/white-logo.png', top: '80%', left: '37%', size: '55px' },
    { id: 4, name: 'Problems', img: '/white-logo.png', top: '20%', left: '10%', size: '40px' },
    { id: 5, name: 'Learning', img: '/white-logo.png', top: '40%', left: '68%', size: '55px' },
    { id: 6, name: 'Patterns', img: '/white-logo.png', top: '70%', left: '75%', size: '50px' },
    { id: 7, name: 'Decisions', img: '/white-logo.png', top: '10%', left: '40%', size: '45px' },
    { id: 8, name: 'Flatulance', img: '/white-logo.png', top: '40%', left: '25%', size: '45px' },
    { id: 9, name: 'Inductance', img: '/white-logo.png', top: '25%', left: '55%', size: '45px' },
    { id: 10, name: 'Lorentz', img: '/white-logo.png', top: '63%', left: '48%', size: '45px' }
    
  ];

  return (
    <div className="container col-xxl-8 py-5 hero">
      <div className="row align-items-center g-5 py-5">
        {/* Text Column - Left Side */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 hero-header" id="headline">
            AI Based Solutions
          </h1>
        </div>

        {/* Diagram Column - Right Side */}
        <div className="col-lg-6">
          <div className="diagram-container">
            <div className="interactive-diagram">
              {/* Central Logo */}
              <div className="central-logo">
                <img 
                  src="/blue-gold-logo.png" 
                  alt="AI Core" 
                  className="img-fluid"
                />
              </div>

              {/* Satellite Logos */}
              {nodes.map((node) => (
                <div 
                  key={node.id}
                  className="satellite-logo"
                  style={{
                    top: node.top,
                    left: node.left,
                    width: `calc(${node.size} + 30px)`,
                    height: `calc(${node.size} + 30px)`
                  }}
                >
                  <img 
                    src={node.img} 
                    alt={node.name} 
                    className="satellite-img"
                    style={{ 
                      width: node.size,
                      height: node.size
                    }}
                  />
                  <span className="satellite-label">{node.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
