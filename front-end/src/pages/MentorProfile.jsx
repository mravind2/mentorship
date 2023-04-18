import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { UserContext } from '../UserContext';

const MentorProfile = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);
  const [mentees, setMentees] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchMentorAndMentees = async () => {
      try {
        const mentorResponse = await axios.get(`/api/mentor/${mentorId}`);
        setMentor(mentorResponse.data);
  
        const menteesResponse = await axios.get(`/api/mentor/${mentorId}/mentees`);
        setMentees(menteesResponse.data);
      } catch (error) {
        console.error('Error fetching mentor and mentees data:', error);
      }
    };
  
    fetchMentorAndMentees();
  }, [mentorId]);

  function getMentorBadge(mentees) {
    const menteesCount = mentees.length;

    if (menteesCount >= 10) {
      return 'Gold';
    } else if (menteesCount >= 5) {
      return 'Silver';
    } else if (menteesCount >= 1) {
      return 'Bronze';
    } else {
      return 'No Badge';
    }
  }

  const mentorBadge = mentor && getMentorBadge(mentor.mentees);

  const badgeClasses = {
    Gold: 'from-yellow-400 via-yellow-500 to-yellow-600',
    Silver: 'from-gray-300 via-gray-400 to-gray-500',
    Bronze: 'from-orange-400 via-orange-500 to-orange-600',
    'No Badge': 'from-gray-200 via-gray-300 to-gray-400',
  };

  const handleConnect = async () => {
    try {
      await axios.post(`/api/connect/${mentorId}`, { menteeId: user._id });
      alert('Connected successfully!');
    } catch (error) {
      console.error('Error connecting mentor and mentee:', error);
      alert('Error connecting mentor and mentee.');
    }
  };

  const MenteeCard = ({ mentee }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center">
          <img src={mentee.imageSrc} alt={mentee.imageAlt} className="w-16 h-16 rounded-full object-cover" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-700">{mentee.name}</h3>
            <p className="text-sm text-gray-600">{mentee.email}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    mentor && (
      <>
      <Header />    
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
              {mentor.name} <span className="font-light text-gray-500">27</span>
          </h1>
          <div
              className={`mentor-badge mt-2 inline-block py-1 px-3 rounded-full text-white bg-gradient-to-r ${badgeClasses[mentorBadge]}`}
          >
            <span>{mentorBadge} Mentor</span>
          </div>
            <p className="font-light text-gray-600 mt-3">Tempe, Arizona</p>
            <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
            <p className="mt-2 text-gray-500">Arizona State University</p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
          </div>
        </div>
        {
            mentees && mentees.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-medium text-gray-700 mb-4">Mentees</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mentees.map((mentee) => (
                    <MenteeCard key={mentee._id} mentee={mentee} />
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
export default MentorProfile;

