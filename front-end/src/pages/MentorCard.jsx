import React from 'react';

const MentorCard = ({ mentor }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center">
          <img src={mentor.imageSrc} alt={mentor.imageAlt} className="w-16 h-16 rounded-full object-cover" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-700">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.description}</p>
          </div>
        </div>
      </div>
    );
  };

  export default MentorCard;