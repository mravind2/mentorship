import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ToggleRegister() {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialAccountType = () => {
    if (location.pathname === '/mentor-register') {
      return 'mentor';
    } else if (location.pathname === '/register') {
      return 'mentee';
    } else if (location.pathname === '/company-register') {
      return 'company';
    } else {
      return 'mentee';
    }
  };

  const [selectedAccountType, setSelectedAccountType] = useState(getInitialAccountType());

  useEffect(() => {
    if (selectedAccountType === 'mentor') {
      navigate('/mentor-register');
    } else if (selectedAccountType === 'mentee') {
      navigate('/register');
    } else if (selectedAccountType === 'company') {
      navigate('/company-register');
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

