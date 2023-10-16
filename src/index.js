import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      width: 90%;
      margin: 0 auto;
      min-height: 100vh;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /survey */}
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
