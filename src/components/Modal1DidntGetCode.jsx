import React, { useEffect } from 'react';

const Modal1DidntGetCode = ({ isOpen, onClose, onResend, onChangeContact }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-600/70 z-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] w-full max-w-[560px] p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-800 text-xl font-bold cursor-pointer hover:opacity-70"
        >
          ✕
        </button>

        <h2 className="font-semibold text-2xl text-gray-900 mb-6">Didn't get the code?</h2>

        <div className="flex flex-col">
          <div 
            onClick={onResend}
            className="w-full h-16 flex items-center justify-between px-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="text-base text-gray-800">Resend confirmation code</span>
            <span className="text-gray-500 text-2xl font-light">›</span>
          </div>
          
          <div 
            onClick={onChangeContact}
            className="w-full h-16 flex items-center justify-between px-2 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="text-base text-gray-800">Change mobile number or email</span>
            <span className="text-gray-500 text-2xl font-light">›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1DidntGetCode;
