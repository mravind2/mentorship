import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Header from "./Header";

export default function AccountPage(){
    const {ready, user ,setUser} = useContext(UserContext);
    const [redirect,setRedirect] = useState(null);
    let {subpage} = useParams();
    if (subpage === undefined){
        subpage = 'profile';
    }

    async function logout() {
        axios.post("/logout");
        setRedirect("/");
        setUser(null);
     }

    function linkClasses (type=null) {
        let classes = 'py-2 px-6';
        if (type === subpage){
            classes += 'p-2 px-6 text-white bg-indigo-600 rounded-full';      
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
            <Header/>
            <nav className="w-full flex mt-8 justify-center gap-8 mb-8 text-sm font-semibold leading-6 text-gray-900">
                <Link className={linkClasses('profile')} to={'/account/profile'}>My profile</Link>
                <Link className={linkClasses('session')} to={'/account/session'}>My session</Link>
            </nav>
            {subpage === 'session' &&(
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user?.name} ({user?.email})<br />
                    <button onClick={logout} className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl">Logout</button>
                </div>
            )}
                
        </div>
    )
}


