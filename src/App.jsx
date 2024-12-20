import React from 'react'
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/ScreenShots';
import TechStack from './components/TechStack';
import QuickStart from './components/QuickStart';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app bg-gray-100 text-gray-900">
      <Hero />
      <Features />
      <Screenshots />
      <TechStack />
      <QuickStart />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App