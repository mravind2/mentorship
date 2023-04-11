import axios from "axios";
import { useContext } from "react";

import { UserContext } from "../UserContext";
import CompanyHeader from "./CompanyHeader";

export default function CompanyLogout() {
  const { setUser } = useContext(UserContext);

  async function logout() {
    axios.post("/logout");
    setUser(null);
  }

  return (
    <div>
        <CompanyHeader/>
        <div className="text-center max-w-lg mx-auto">
        <button
            onClick={logout}
            className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl"
        >
            Logout
        </button>
        </div>
    </div>
  );
}
