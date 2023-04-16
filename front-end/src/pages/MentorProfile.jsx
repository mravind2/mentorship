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
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center">
              <img
                className="w-24 h-24 object-cover rounded-full mr-4"
                src={mentor.imageSrc}
                alt={mentor.imageAlt}
              />
              <div>
                <h2 className="text-xl font-bold">{mentor.name}</h2>
                <p className="text-gray-500">{mentor.email}</p>
              </div>
            </div>
    
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Mentees</h3>
              <ul className="list-disc ml-6">
                {mentor.mentees.map((mentee) => (
                  <li key={mentee._id}>{mentee.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      );
    };
    
    export default MentorProfile;
    
    