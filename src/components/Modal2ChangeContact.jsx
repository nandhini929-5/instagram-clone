import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal2ChangeContact = ({ isOpen, onClose, onBack }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAdd = () => {
    onClose();
    navigate('/dashboard');
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-600/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] w-full max-w-[560px] p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-gray-700 text-3xl font-light cursor-pointer hover:opacity-70 leading-none"
        >
          ‹
        </button>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-800 text-xl font-bold cursor-pointer hover:opacity-70"
        >
          ✕
        </button>

        <h2 className="font-semibold text-2xl text-gray-900 mt-4 mb-6">Add new email or mobile number</h2>

        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full h-14 px-5 text-base rounded-2xl border-2 border-blue-500 focus:outline-none mt-2"
          autoFocus
        />

        <div className="flex gap-3 mt-6">
          <button 
            onClick={onClose}
            className="flex-1 h-14 rounded-full border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleAdd}
            className="flex-1 h-14 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2ChangeContact;
