import axios from "axios";
import { useContext } from "react";

import { UserContext } from "../UserContext";
import CompanyHeader from "./CompanyHeader";

export default function CompanyLogout() {
  const { setUser, user } = useContext(UserContext);

  async function logout() {
    axios.post("/logout");
    setUser(null);
  }

  return (
    <div>
      <CompanyHeader />
      <div className="flex justify-center mt-4">
        <div className="bg-indigo-600 text-white rounded-full px-4 py-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span>My session</span>
        </div>
      </div>

      <div className="mt-4 text-center">
        Logged in as {user?.name} ({user?.email})<br />
      </div>

      <div className="flex justify-center">
        <button
          onClick={logout}
          className="max-w-lg mx-auto bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
