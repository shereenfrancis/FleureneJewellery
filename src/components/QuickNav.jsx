import React, { useState } from 'react';
import './QuickNav.css';

const QuickNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Top' },
    { id: 'collections', label: 'Collections' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Stories' },
    { id: 'newsletter', label: 'Join Us' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={`quick-nav ${isOpen ? 'open' : ''}`}>
      <button 
        className="quick-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Quick Jump ✨
      </button>
      <div className="quick-nav-menu">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="quick-nav-item"
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickNav; 