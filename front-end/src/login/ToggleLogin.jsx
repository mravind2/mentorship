import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ToggleLogin() {
  const [selectedAccountType, setSelectedAccountType] = useState('mentee');
  const navigate = useNavigate();

  const handleAccountTypeChange = (accountType) => {
    setSelectedAccountType(accountType);
    if (accountType === 'mentor') {
      navigate('/mentor-login');
    } else if (accountType === 'mentee') {
      navigate('/login');
    } else if (accountType === 'company') {
      navigate('/company-login');
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        type="button"
        className={`${
          selectedAccountType === 'mentee'
            ? 'bg-indigo-500 text-white'
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
            ? 'bg-indigo-500 text-white'
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
            ? 'bg-indigo-500 text-white'
            : 'bg-gray-200 text-gray-600'
        } flex items-center justify-center px-4 py-2 text-sm font-medium rounded-r-md focus:outline-none transition duration-200`}
        onClick={() => handleAccountTypeChange('company')}
      >
        Company
      </button>
    </div>
  );
}

