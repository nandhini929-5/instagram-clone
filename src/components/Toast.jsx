import React, { useEffect } from 'react';

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in-down">
      <div className="bg-gray-800 text-white text-sm px-6 py-3 rounded-full shadow-lg">
        {message}
      </div>
    </div>
  );
};

export default Toast;
