import axios from "axios";
import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function ProfilePage(){
    const {action} = useParams()
    const {user} = useContext(UserContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [linkedin,setLinkedin] = useState('');
    const [description,setDescription] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [profilePicture, setProfilePicture] = useState('');

    function inputHeader(text) {
        return(
            <h2 className="text-xl mt-4 px-2">{text}</h2>
        )
    }

    function preInput(header) {
        return (
          <>
            {inputHeader(header)}
          </>
        );
    }

    function uploadPhoto(ev){
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++){
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
            const {data:filenames} = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
            });
            if (!profilePicture) {
                setProfilePicture('http://localhost:3001/uploads/' + filenames[0]);
            }
        });
        
    }



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
                <div className="px-4">
                    <form className="flex flex-col">
                        {preInput('Name')}
                        <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder={user?.name} className="p-4 border mb-4 rounded-full"/>
                        {preInput('Email')}
                        <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} placeholder={user?.email} className="p-4 border mb-4 rounded-full"/>
                        {preInput('LinkedIn URL')}
                        <input type="text" value={linkedin} onChange={ev => setLinkedin(ev.target.value)} placeholder="https://www.linkedin.com/in/yourprofile/" className="p-4 border mb-4 rounded-full"/>
                        {preInput('Description')}
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)} placeholder="Tell us about yourself" className="mb-4 w-full border my-1 py-2 px-3 rounded-2xl"></textarea>
                        {preInput('Photos')}
                        <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {addedPhotos.length > 0 && addedPhotos.map((Link, index) => (
                            <div className="h-32 flex" key={Link + '-' + index}>
                                <img className="rounded-2xl w-full object-cover" src={'http://localhost:3001/uploads/'+Link}/>
                            </div>
                        ))}

                            <label className="h-32 cursor-pointer border bg-transparent rounded-2xl p-8 text-2xl flex justify-center items-center gap-1">  
                                <input type="file" multiple className="hidden" onChange={uploadPhoto}/>                          
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload
                            </label>
                        </div>
                        <button className="bg-indigo-600 text-white py-2 mt-4 rounded-full">Save</button>

                    </form>
                </div>
            )}
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">22</p>
                                <p className="text-gray-400">Friends</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">10</p>
                                <p className="text-gray-400">Photos</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">89</p>
                                <p className="text-gray-400">Comments</p>
                            </div>
                        </div>
                        <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            {profilePicture ? (
                                <img src={profilePicture} alt="Profile" className="w-48 h-48 rounded-full object-cover" />
                                    ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                         )}
                                    </div>
                        </div>

                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="inline-flex bg-indigo-600 gap-1 text-white py-3 px-6 rounded-full">
                                Connect
                            </button>
                            <button className="inline-flex bg-indigo-600 gap-1 text-white py-3 px-6 rounded-full">
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">{user?.name} <span className="font-light text-gray-500">27</span></h1>
                        <p className="font-light text-gray-600 mt-3">Tempe, Arizona</p>
                        <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p className="mt-2 text-gray-500">Arizona State University</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}