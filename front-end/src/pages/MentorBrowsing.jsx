import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';


export default function MentorBrowsing() {
  const [mentors, setMentors] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get('/api/mentors')
      .then((res) => {
        setMentors(res.data);
      })
      .catch((error) => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  console.log('Logged-in user:', user);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {mentors.map((mentor) => (
          <a key={mentor._id} href={`/mentor/${mentor._id}`} className="group">
            <div className="w-full overflow-hidden rounded-lg bg-gray-200 flex justify-center items-center xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={mentor.imageSrc}
                alt={mentor.imageAlt}
                className="h-80 w-full object-cover object-center group-hover:opacity-75 bg-white"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-700">{mentor.name}</h3>
            <p className="mt-1 text-sm text-gray-900">{mentor.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
