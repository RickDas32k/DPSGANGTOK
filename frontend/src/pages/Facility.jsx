import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { facilities } from '../mockData';

const Facility = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">OUR FACILITIES</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">World-class infrastructure for holistic development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-3">{facility.name}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
