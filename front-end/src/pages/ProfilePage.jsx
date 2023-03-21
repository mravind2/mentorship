import { useContext } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext";

export default function ProfilePage(){
    const {action} = useParams()
    const {user} = useContext(UserContext);
    return(
        <div>
            {action !=='edit' &&(
            <div className="text-center">
                <Link className="inline-flex bg-indigo-600 gap-1 text-white py-2 px-6 rounded-full" to={'/account/profile/edit'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <span>Edit profile</span>

                </Link>
            </div>
            )}
            {action === 'edit' && (
                <div>
                    <form className="flex flex-col">
                        <input type="text" placeholder={user?.name} className="p-4 border mb-4 rounded-full"/>
                    </form>
                </div>
            )}
            My profile
        </div>
    )
}