import React from 'react';
import { Navbar } from './Navbar';
import { artImages } from '../data/artImages';
import '../App.css';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div style={{ marginTop: '2rem' }}>
        <img 
          src={artImages[0]} 
          alt="Darren Angle" 
          style={{ width: '100%', height: 'auto', marginBottom: '2rem', display: 'block' }} 
        />
        <h4 style={{ letterSpacing: '0.05em' }}>DARREN ANGLE</h4>
        
        <p style={{ fontStyle: 'italic' }}>poet + ai researcher</p>
        
        <p>
          applying experimental poetics to machine intelligence. building bespoke, web-scale ai systems. researching llm aesthetics, style matching, and inference-time creativity.
        </p>

        <br />
        <h4 style={{ letterSpacing: '0.05em' }}>selected work</h4>
        
        <p>
          identifying neglected hypotheses in neurodegenerative disease {" "}
          <a target="_blank" href="https://openreview.net/forum?id=0gl0SJtd2E" rel="noreferrer">
            (neurips genbio)
          </a>
        </p>

        <p>
          <a target="_blank" href="https://bombmagazine.org/articles/2014/01/31/four-poems-13/" rel="noreferrer">
            four poems in BOMB
          </a>
        </p>

        <p>
          griefmachines {" "}
          <a target="_blank" href="https://www.instagram.com/griefmachines/?hl=en" rel="noreferrer">
            (instagram)
          </a>
        </p>

        <p>
          elegy for cd wright in {" "}
          <a target="_blank" href="https://www.thevolta-org.zulaufdesign.com/ewc62-tribute-dangle-p1.html" rel="noreferrer">
            the volta
          </a>
        </p>

        <p>
          <a target="_blank" href="https://help.shopify.com/en/" rel="noreferrer">
            shopify support ai
          </a>
        </p>

        <p>
          retrieval & attribution systems @ {" "}
          <a target="_blank" href="https://gc.ai" rel="noreferrer">
            gc ai
          </a>
        </p>
      </div>
    </div>
  );
};