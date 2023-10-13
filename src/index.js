import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header/Header';
import ClientForm from './components/ClientForm/ClientForm';
import FreelanceForm from './components/FreelanceForm/FreelanceForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /survey */}
        <Route path="/survey" element={<Survey />}>
          {/* Nous imbriquons nos composants dans survey */}
          {/* /survey/client */}
          <Route path="client" element={<ClientForm />} />
          {/* /survey/freelance */}
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
