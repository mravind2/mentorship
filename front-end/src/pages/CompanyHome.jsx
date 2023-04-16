import { Link } from "react-router-dom";
import CompanyHeader from "./CompanyHeader";

export default function CompanyPage() {
  return (
    <div>
      <CompanyHeader />
      <div className="flex justify-center items-center mt-4 w-1/2 mx-auto bg-gray-100 py-10 rounded border-2 border-dashed border-gray-400">
        <Link
          to="https://billing.stripe.com/p/login/test_bIY6sc2YDfEQ5fWeUU"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Management Payment
        </Link>
      </div>
    </div>
  );
}
