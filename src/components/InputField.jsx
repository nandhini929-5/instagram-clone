import React from 'react';

const InputField = ({ label, type = 'text', placeholder, value, onChange, error, extraText }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-12 px-4 text-sm rounded-xl border bg-zinc-50 focus:outline-none focus:bg-white transition-colors ${
            error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-400'
          }`}
        />
        {type === 'password' && value && (
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-800">
            Show
          </button>
        )}
      </div>
      {extraText && <div className="mt-2">{extraText}</div>}
    </div>
  );
};

export default InputField;
