import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenteeBrowsing() {
    const [mentee, setMentee] = useState([]);

    useEffect(() => {
      axios.get('/api/mentee')
        .then((res) => {
          setMentee(res.data);
        })
        .catch((error) => {
          console.error('Error fetching mentee:', error);
        });
    }, []);

    return (
        <div className="bg-white">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {mentee.map((mentee) => (
              <a key={mentee._id} href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={mentee.imageSrc}
                    alt={mentee.imageAlt}
                    className="h-80 w-full object-cover object-center group-hover:opacity-75 bg-white"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-700">{mentee.name}</h3>
                <p className="mt-1 text-sm text-gray-900">{mentee.price}</p>
              </a>
            ))}
          </div>
        </div>
      );
    }