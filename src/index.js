import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';
import Error from './components/Error/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances/Freelances';
import GlobalStyle from './utils/style/GlobalStyle';
import { SurveyProvider, ThemeProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <SurveyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* /survey */}
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
