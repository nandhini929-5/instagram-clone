import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import instagramLogo from '../assets/instagram-logo.jpg';
import metaLogo from '../assets/meta.jpg';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex w-full">
      {/* Left Column */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center relative border-r border-gray-200 p-8">
        <div className="max-w-md w-full relative">
          {/* Logo at top-left of content block */}
          <div className="mb-12">
            <img src={instagramLogo} alt="Instagram Logo" className="h-14 object-contain" />
          </div>
          
          <h1 className="text-4xl font-semibold leading-tight mb-8">
            See everyday moments from <br />
            your <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">close friends</span>.
          </h1>

          {/* Collage of 3 overlapping photo cards */}
          <div className="relative h-64 mt-12">
            {/* Card 1 */}
            <div className="absolute top-0 left-0 w-40 h-56 bg-purple-200 rounded-xl border-4 border-white shadow-lg -rotate-6 z-10 flex items-center justify-center">
              <span className="text-4xl">📸</span>
            </div>
            {/* Card 2 */}
            <div className="absolute top-4 left-24 w-40 h-56 bg-blue-200 rounded-xl border-4 border-white shadow-lg rotate-3 z-20 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            {/* Card 3 */}
            <div className="absolute top-12 left-48 w-40 h-56 bg-yellow-200 rounded-xl border-4 border-white shadow-lg rotate-12 z-30 flex items-center justify-center">
              <span className="text-4xl">🍕</span>
            </div>
            {/* Floating emojis */}
            <div className="absolute top-2 left-44 text-3xl z-40 animate-bounce">❤️</div>
            <div className="absolute bottom-4 left-10 text-3xl z-40">⭐</div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-[400px]">
          <div className="flex justify-center mb-8">
            <img src={instagramLogo} alt="Instagram" className="h-12 object-contain" />
          </div>
          
          <form className="space-y-3">
            <InputField 
              placeholder="Mobile number, username or email" 
            />
            <InputField 
              type="password" 
              placeholder="Password" 
            />
            
            <div className="pt-1">
              <PrimaryButton variant="primaryLight">
                Log in
              </PrimaryButton>
            </div>
          </form>

          <div className="text-center mt-4 mb-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-sm font-semibold text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <PrimaryButton variant="secondary" className="mb-2 text-[#385185] border-gray-300 font-semibold hover:bg-gray-50">
            <FaFacebook className="text-[#385185] text-xl" />
            Log in with Facebook
          </PrimaryButton>

          <Link to="/signup" className="block mt-4">
            <PrimaryButton variant="outline">
              Create new account
            </PrimaryButton>
          </Link>
          
          {/* Meta Footer */}
          <div className="mt-8 flex flex-col items-center justify-center text-gray-500">
            <img src={metaLogo} alt="Meta Logo" className="h-8 object-contain mb-1" />
            <span className="text-xs font-semibold">Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
