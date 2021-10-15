import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Mobile from './components/Mobile';

function App() {
  const [mobileView, setMobileView] = useState(window.matchMedia("(max-width:800px)").matches);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobileView(window.matchMedia("(max-width:800px)").matches);
    });
  });
 
  return (
    <div>
      {
        mobileView ? <Mobile /> : <Header />
      }
      <Body />
      <Footer />
    </div>
  );
}

export default App;
