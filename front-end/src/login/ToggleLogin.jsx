import { useState } from 'react';

export default function ToggleLogin() {
  const [selectedAccountType, setSelectedAccountType] = useState('mentee');

  const handleAccountTypeChange = (accountType) => {
    setSelectedAccountType(accountType);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className={`${
          selectedAccountType === 'mentee'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-600'
        } flex items-center justify-center px-4 py-2 text-sm font-medium rounded-l-md focus:outline-none transition duration-200`}
        onClick={() => handleAccountTypeChange('mentee')}
      >
        Mentee
      </button>
      <button
        type="button"
        className={`${
          selectedAccountType === 'mentor'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-600'
        } flex items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none transition duration-200`}
        onClick={() => handleAccountTypeChange('mentor')}
      >
        Mentor
      </button>
      <button
        type="button"
        className={`${
          selectedAccountType === 'company'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-600'
        } flex items-center justify-center px-4 py-2 text-sm font-medium rounded-r-md focus:outline-none transition duration-200`}
        onClick={() => handleAccountTypeChange('company')}
      >
        Company
      </button>
    </div>
  );
}
