import React from 'react';
import { Link } from 'react-router-dom';
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
        <p>
          Darren Angle is a poet and AI engineer interested in how machine intelligence can better serve human life. He has built production AI systems across healthcare, legal, and pharma, with a focus on long-running agents, evaluation, and large-scale language model systems. His current research explores how orchestration and synthetic data can make small models more capable and more governable.
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
          <Link to="/work/elegy-for-cd-wright">
            the volta
          </Link>
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
