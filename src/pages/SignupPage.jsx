import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import metaLogo from '../assets/meta.jpg';

const SignupPage = () => {
  const navigate = useNavigate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8 px-4 pb-12">
      {/* Top Header Section */}
      <div className="w-full max-w-[400px] mb-8 relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute left-0 top-0 p-2 text-xl text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          ←
        </button>
        <div className="flex flex-col items-center pt-2">
          <img src={metaLogo} alt="Meta Logo" className="h-8 object-contain mb-1" />
          <span className="text-sm font-semibold text-gray-800 mt-1">Meta</span>
        </div>
      </div>

      <div className="w-full max-w-[400px]">
        {/* SECTION 1 */}
        <div className="mb-6">
          <h1 className="font-semibold text-2xl text-gray-900">Get started on Instagram</h1>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            Sign up to see photos and videos from your friends.
          </p>

          <div className="space-y-4">
            <InputField 
              label="Mobile number or email"
              placeholder="Mobile number or email"
              error={true} // For the red border
              extraText={
                <span className="text-xs text-gray-500">
                  You may receive notifications from us.{' '}
                  <a href="#" className="text-blue-600 font-medium hover:underline">Learn why we ask for your contact information</a>
                </span>
              }
            />

            <InputField 
              label="Password"
              type="password"
              placeholder="Password"
              error={true} // For the red border
            />

            <div>
              <label className="flex items-center text-sm font-medium text-gray-800 mb-2">
                Birthday
                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <select className="w-full h-12 px-3 text-sm rounded-xl border border-gray-300 bg-white appearance-none focus:outline-none focus:border-gray-400">
                    <option value="" disabled selected hidden>Month</option>
                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                </div>
                <div className="relative flex-1">
                  <select className="w-full h-12 px-3 text-sm rounded-xl border border-gray-300 bg-white appearance-none focus:outline-none focus:border-gray-400">
                    <option value="" disabled selected hidden>Day</option>
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                </div>
                <div className="relative flex-1">
                  <select className="w-full h-12 px-3 text-sm rounded-xl border border-gray-300 bg-white appearance-none focus:outline-none focus:border-gray-400">
                    <option value="" disabled selected hidden>Year</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="space-y-4">
          <InputField 
            label="Name"
            placeholder="Full name"
          />
          <InputField 
            label="Username"
            placeholder="Username"
          />
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            People who use our service may have uploaded your contact information to Instagram.{' '}
            <a href="#" className="text-[#00376b] font-medium hover:underline">Learn more.</a>
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            By tapping Submit, you agree to create an account and to Instagram's{' '}
            <a href="#" className="text-[#00376b] font-medium hover:underline">Terms</a>,{' '}
            <a href="#" className="text-[#00376b] font-medium hover:underline">Privacy Policy</a> and{' '}
            <a href="#" className="text-[#00376b] font-medium hover:underline">Cookies Policy</a>.
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            The{' '}
            <a href="#" className="text-[#00376b] font-medium hover:underline">Privacy Policy</a> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
          </p>
        </div>

        <div className="mt-6">
          <PrimaryButton 
            variant="primary" 
            className="!bg-blue-600 hover:!bg-blue-700"
            onClick={() => navigate('/confirm')}
          >
            Submit
          </PrimaryButton>
          
          <PrimaryButton 
            variant="secondary" 
            className="mt-3"
            onClick={() => navigate('/')}
          >
            I already have an account
          </PrimaryButton>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-4">
          {['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Contact Uploading & Non-Users', 'Meta Verified'].map((link) => (
            <a key={link} href="#" className="text-xs text-gray-400 hover:underline">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="relative">
            <select className="appearance-none bg-transparent pr-4 focus:outline-none cursor-pointer">
              <option>English</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">▾</div>
          </div>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
