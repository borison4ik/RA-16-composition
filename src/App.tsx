import React from 'react';

import { Card } from './components/Card';
import { Collapse } from './components/Collapse';

import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='row mb-5'>
          <Card>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href='#!' className='btn btn-primary'>
              Go somewhere
            </a>
          </Card>
        </div>
        <div className='row mb-5'>
          <Card imgSrc='https://www.fillmurray.com/640/360' alt='lorem'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href='#!' className='btn btn-primary'>
              Go somewhere
            </a>
          </Card>
        </div>
        <div className='row mb-5'>
          <Collapse>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, consectetur!</p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default App;
