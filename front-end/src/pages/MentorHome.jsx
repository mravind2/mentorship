import React from 'react';
import MenteeCard from './MenteeCard';
import MentorHeader from "./MentorHeader"

import Mentee01 from "../images/mentee-01.png";
import Mentee02 from "../images/mentee-02.png";
import Mentee03 from "../images/mentee-03.png";

const MentorHome = () => {
  const mentees = [
    {
      id: 1,
      name: 'Karate Kid',
      photo: Mentee01,
      description: 'I am interested in web development and UI/UX design.',
    },
    {
      id: 2,
      name: 'Luke Skywalker',
      photo: Mentee02,
      description: 'I am interested in machine learning and data analysis.',
    },
    {
      id: 3,
      name: 'Kung Fu Panda',
      photo: Mentee03,
      description: 'I am interested in mobile app development and game design.',
    },
  ];

  const notifications = [
    {
      id: 1,
      message: 'You have a new mentee request.',
      read: false,
    },
    {
      id: 2,
      message: 'A mentee has scheduled a meeting with you.',
      read: false,
    },
    {
      id: 3,
      message: 'You have a new mentee request.',
      read: false,
    },
  ];

  return (
    <div>
        <MentorHeader/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Recommended Mentees</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mentees.map((mentee) => (
          <MenteeCard key={mentee.id} mentee={mentee} />
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className={`bg-white shadow rounded-lg mb-4 py-3 px-4 ${notification.read ? 'opacity-50' : 'opacity-100 hover:shadow-lg transition duration-300 ease-in-out'}`}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-900">{notification.message}</div>
                <div className={`text-sm font-medium ${notification.read ? 'text-green-500' : 'text-red-500'}`}>
                  {notification.read ? 'Read' : 'Unread'}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MentorHome;