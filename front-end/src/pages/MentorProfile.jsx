import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MentorProfile = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axios.get(`/api/mentor/${mentorId}`);
        setMentor(response.data);
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };

    fetchMentor();
  }, [mentorId]);

  return (
    mentor && (
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Replace the static numbers with dynamic content */}
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
                <img src={mentor.imageSrc} alt={mentor.imageAlt} className="w-48 h-48 rounded-full object-cover" />
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
            <h1 className="text-4xl font-medium text-gray-700">{mentor.name} <span className="font-light text-gray-500">27</span></h1>
            <p className="font-light text-gray-600 mt-3">Tempe, Arizona</p>
            <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
            <p className="mt-2 text-gray-500">Arizona State University</p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
          </div>
        </div>
      </div>
    ));
  };        
export default MentorProfile;

