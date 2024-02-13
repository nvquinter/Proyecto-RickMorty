import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from './pages/Home/Home';
  import Characters from './pages/Characters/Characters';
// import Contact from './pages/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Characters />
    {/* <Contact /> */}
  </React.StrictMode>
);

