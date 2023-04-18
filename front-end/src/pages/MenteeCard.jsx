import React from 'react';

const MenteeCard = ({ mentee }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <img className="h-48 w-full object-cover" src={mentee.photo} alt={mentee.name} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{mentee.name}</h2>
        <p className="text-gray-700 text-base">{mentee.description}</p>
      </div>
    </div>
  );
};

export default MenteeCard;