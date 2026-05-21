import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal1DidntGetCode from '../components/Modal1DidntGetCode';
import Modal2ChangeContact from '../components/Modal2ChangeContact';
import Toast from '../components/Toast';

const ConfirmPage = () => {
  const navigate = useNavigate();
  const [codeInput, setCodeInput] = useState('');
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleContinue = () => {
    if (codeInput.length >= 6) {
      navigate('/dashboard');
    }
  };

  const handleResend = () => {
    setShowModal1(false);
    setShowToast(true);
  };

  const handleChangeContact = () => {
    setShowModal1(false);
    setShowModal2(true);
  };

  const closeAllModals = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-[560px] pt-16 px-8">
        <div 
          onClick={() => navigate('/signup')}
          className="text-gray-700 text-xl cursor-pointer mb-6 hover:opacity-70 inline-block"
        >
          ←
        </div>

        <h1 className="font-semibold text-2xl text-gray-900 mb-3">
          Enter the confirmation code
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed">
          To confirm your account, enter the 6-digit code we sent to <span className="font-bold text-gray-900">poojarumugam@gmail.com.</span>
        </p>

        <input
          type="text"
          placeholder="Confirmation code"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:outline-none focus:border-gray-400 mt-6"
          maxLength={6}
        />

        <button 
          onClick={handleContinue}
          className="w-full h-14 rounded-full bg-blue-600 text-white font-semibold text-base mt-4 hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>

        <button 
          onClick={() => setShowModal1(true)}
          className="w-full h-14 rounded-full border border-gray-300 text-gray-800 font-semibold text-base mt-3 bg-white hover:bg-gray-50 transition-colors"
        >
          I didn't get the code
        </button>

        <div 
          onClick={() => navigate('/')}
          className="text-center text-blue-500 text-sm font-medium mt-8 cursor-pointer hover:underline"
        >
          I already have an account
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 w-full max-w-4xl mx-auto px-4 flex flex-col items-center pb-8">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-2">
          {['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Contact Uploading & Non-Users', 'Meta Verified'].map((link) => (
            <a key={link} href="#" className="text-xs text-gray-400 hover:underline">
              {link}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center text-xs text-gray-400">
          <div className="relative mb-1">
            <select className="appearance-none bg-transparent pr-4 focus:outline-none cursor-pointer">
              <option>English</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">▾</div>
          </div>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>

      {/* Modals & Toast */}
      <Modal1DidntGetCode 
        isOpen={showModal1} 
        onClose={closeAllModals}
        onResend={handleResend}
        onChangeContact={handleChangeContact}
      />
      <Modal2ChangeContact 
        isOpen={showModal2} 
        onClose={closeAllModals}
        onBack={() => { setShowModal2(false); setShowModal1(true); }}
      />
      <Toast 
        show={showToast} 
        message="Code sent to your email" 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};

export default ConfirmPage;
