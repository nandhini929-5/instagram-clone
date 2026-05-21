import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <svg
        viewBox="0 0 24 24"
        width="80"
        height="80"
        fill="none"
        stroke="url(#ig-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-6"
      >
        <defs>
          <linearGradient id="ig-grad" x1="2.035" y1="21.965" x2="21.965" y2="2.035">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
      
      <h1 className="text-2xl font-semibold text-gray-900 mt-4">Welcome to Instagram!</h1>
      <p className="text-gray-500 text-sm mt-2">Your account has been created successfully.</p>
      
      <button 
        onClick={() => navigate('/')}
        className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-8 py-3 mt-6"
      >
        Go to feed →
      </button>
    </div>
  );
};

export default DashboardPage;
