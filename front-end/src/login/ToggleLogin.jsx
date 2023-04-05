import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ToggleLogin() {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialAccountType = () => {
    if (location.pathname === '/mentor-login') {
      return 'mentor';
    } else if (location.pathname === '/login') {
      return 'mentee';
    } else if (location.pathname === '/company-login') {
      return 'company';
    } else {
      return 'mentee';
    }
  };

  const [selectedAccountType, setSelectedAccountType] = useState(getInitialAccountType());

  useEffect(() => {
    if (selectedAccountType === 'mentor') {
      navigate('/mentor-login');
    } else if (selectedAccountType === 'mentee') {
      navigate('/login');
    } else if (selectedAccountType === 'company') {
      navigate('/company-login');
    }
  }, [selectedAccountType, navigate]);

  const handleAccountTypeChange = (accountType) => {
    setSelectedAccountType(accountType);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        type="button"
        className={`${
          selectedAccountType === 'mentee'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-600'
        } flex items-center justify-center px-4 py-2 text-sm font-medium rounded-l-md focus:outline-none`}
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
        } flex items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none`}
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
        } flex items-center justify-center px-4 py-2 text-sm font-medium rounded-r-md focus:outline-none`}
        onClick={() => handleAccountTypeChange('company')}
      >
        Company
      </button>

    </div>
  );
}

