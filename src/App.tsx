import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-business.base">
      {/* Header with hero section */}
      <Header />
      
      {/* About section */}
      <About />
      
      {/* Projects showcase */}
      <Projects />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;