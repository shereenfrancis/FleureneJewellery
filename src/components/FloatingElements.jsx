import React, { useEffect, useState } from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetal = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 4,
      size: 0.5 + Math.random() * 0.5,
      delay: Math.random() * 2
    });

    const initialPetals = Array.from({ length: 6 }, createPetal);
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = [...prev];
        if (newPetals.length < 8) {
          newPetals.push(createPetal());
        }
        return newPetals.slice(-8);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-elements">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="floating-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `scale(${petal.size})`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FloatingElements; 