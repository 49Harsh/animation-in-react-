import React, { useState, useEffect } from 'react';

const AutoFillBot = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isActive) {
      const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
      setInputs(Array.from(allInputs));
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && inputs.length > 0 && currentIndex < inputs.length) {
      const currentInput = inputs[currentIndex];
      const placeholder = currentInput.placeholder || `Input ${currentIndex + 1}`;
      currentInput.value = `Auto-filled: ${placeholder}`;
      currentInput.dispatchEvent(new Event('input', { bubbles: true }));
      currentInput.dispatchEvent(new Event('change', { bubbles: true }));
      
      const timer = setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isActive, inputs, currentIndex]);

  const toggleBot = () => {
    setIsActive(!isActive);
    setCurrentIndex(0);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        onClick={toggleBot}
        className={`px-4 py-2 rounded-full font-bold text-white ${
          isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? 'Stop Bot' : 'Start Bot'}
      </button>
      {isActive && (
        <div className="mt-2 text-sm text-gray-600">
          Filling input {currentIndex + 1} of {inputs.length}
        </div>
      )}
    </div>
  );
};

export default AutoFillBot;