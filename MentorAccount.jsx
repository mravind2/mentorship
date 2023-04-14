import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import MentorHeader from "./MentorHeader";
import MentorProfile from "./MentorProfile";


export default function MentorAccount(){
    const {ready, user ,setUser} = useContext(UserContext);
    const [redirect,setRedirect] = useState(null);
    let {subpage} = useParams();
    if (subpage === undefined){
        subpage = 'mentor-profile';
    }

    async function logout() {
        axios.post("/mentor-logout");
        setRedirect("/");
        setUser(null);
     }

    function linkClasses (type=null) {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage){
            classes += ' bg-indigo-600 text-white rounded-full';      
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }

    
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div>
            <MentorHeader/>
            <nav className="w-full flex mt-8 justify-center gap-8 mb-8 text-sm font-semibold leading-6 text-gray-900">
                <Link className={linkClasses('profile')} to={'/account/mentor-profile'}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span>My profile</span>
                    </div>
                </Link>

                <Link className={linkClasses('session')} to={'/account/session'}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <span>My session</span>
                    </div>
                </Link>
            </nav>
            {subpage === 'session' &&(
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user?.name} ({user?.email})<br />
                    <button onClick={logout} className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl">Logout</button>
                </div>
            )}
            {subpage === 'profile' && (
                <MentorProfile />
            )}
                
        </div>
    )
}