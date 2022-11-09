import React from 'react';
import './App.css';
import { EnergyEngineering } from '../EnergyEngineering';
import { WebDevelopment } from '../WebDevelopment';
import { MyTopSeries } from '../MyTopSeries';
import { MachineLearning } from '../MachineLearning';
import { Homepage } from '../Homepage';
import { HashRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/energyengineering" element={<EnergyEngineering />}>
            </Route>

            <Route path="/machinelearning" element={<MachineLearning />} />
            <Route path="/webDevelopment" element={<WebDevelopment/>} />
            <Route path="/mytopseries" element={<MyTopSeries/>} />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
    </HashRouter>
    
  );
}

export default App;
