import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './MentorHeader';
import { UserContext } from '../UserContext';

const MenteeProfile = () => {
  const { menteeId } = useParams();
  const [mentee, setMentee] = useState(null);
  const [mentors, setMentors] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchMenteeAndMentors = async () => {
      try {
        const menteeResponse = await axios.get(`/api/mentee/${menteeId}`);
        setMentee(menteeResponse.data);
  
        const mentorsResponse = await axios.get(`/api/mentee/${menteeId}/mentors`);
        setMentors(mentorsResponse.data);
      } catch (error) {
        console.error('Error fetching mentee and mentors data:', error);
      }
    };
  
    fetchMenteeAndMentors();
  }, [menteeId]);

  const handleConnect = async () => {
    try {
      await axios.post(`/api/connect/${menteeId}`, { mentorId: user._id });
      alert('Connected successfully!');
    } catch (error) {
      console.error('Error connecting mentee and mentor:', error);
      alert('Error connecting mentee and mentor.');
    }
  };
  

  const MentorCard = ({ mentor }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center">
          <img src={mentor.imageSrc} alt={mentor.imageAlt} className="w-16 h-16 rounded-full object-cover" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-700">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.email}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    mentee && (
      <>
      <Header />    
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">

            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src={mentee.imageSrc} alt={mentee.imageAlt} className="w-48 h-48 rounded-full object-cover" />
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
                className="inline-flex bg-indigo-600 gap-1 text-white py-3 px-6 rounded-full"
                onClick={handleConnect}
              >
                Connect
              </button>
              <button className="inline-flex bg-indigo-600 gap-1 text-white py-3 px-6 rounded-full">
                Message
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
              {mentee.name}
              </h1>
        <p className="font-light text-gray-600 mt-3">{mentee.location}</p>
        <p className="mt-8 text-gray-500">{mentee.role}</p>
        <p className="mt-2 text-gray-500">{mentee.description}</p>
      </div>

      <div className="mt-12 flex flex-col justify-center">
        <p className="text-gray-600 text-center font-light lg:px-16">{mentee.description}</p>
      </div>
    </div>
    {
        mentors && mentors.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mentors.map((mentor) => (
                <MentorCard key={mentor._id} mentor={mentor} />
              ))}
            </div>
          </div>
          )
        }
  </div>
  </>
  )
);

};
export default MenteeProfile;
