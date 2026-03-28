import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Phone, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { facilities, notices, events, galleryImages, founderMessage, principalMessage, managementTeam, schoolInfo } from '../mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

const Home = () => {
  const [expandFounder, setExpandFounder] = useState(false);
  const [expandPrincipal, setExpandPrincipal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1592066575517-58df903152f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjA2OTM3MTd8MA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">ADMISSION OPEN</h1>
          <h2 className="text-xl md:text-3xl mb-8">
            FOR CLASSES NURSERY TO CLASS 9 & CLASS 11 (ARTS, COMMERCE & SCIENCE)
          </h2>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            APPLY NOW
          </Button>
          <div className="mt-8">
            <p className="text-xl mb-2">ADMISSION ENQUIRY NUMBER</p>
            <div className="flex items-center justify-center space-x-4">
              <a href={`tel:+91${schoolInfo.phone1}`} className="text-2xl md:text-3xl font-bold hover:text-yellow-400 transition-colors">
                {schoolInfo.phone1}
              </a>
              <span className="text-2xl">/</span>
              <a href={`tel:+91${schoolInfo.phone2}`} className="text-2xl md:text-3xl font-bold hover:text-yellow-400 transition-colors">
                {schoolInfo.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">FACILITIES WE OFFER</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Link
                key={facility.id}
                to={`/facility/${facility.id}`}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-red-600 text-center">{facility.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">MESSAGE FROM PRO VICE CHAIRMAN</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img
                src={founderMessage.image}
                alt={founderMessage.name}
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{founderMessage.name}</h3>
              <p className="text-gray-600 mb-4">{founderMessage.designation}</p>
              <p className="text-gray-700 leading-relaxed">
                {expandFounder
                  ? founderMessage.message
                  : `${founderMessage.message.substring(0, 400)}...`}
              </p>
              <Button
                variant="link"
                className="text-red-600 font-semibold mt-4"
                onClick={() => setExpandFounder(!expandFounder)}
              >
                {expandFounder ? 'View Less' : 'View More'}
              </Button>
              <p className="mt-4 text-gray-700 font-semibold">May God Bless You All</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">FROM THE PRINCIPAL'S DESK</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img
                src={principalMessage.image}
                alt={principalMessage.name}
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{principalMessage.name}</h3>
              <p className="text-gray-600 mb-4">{principalMessage.designation}</p>
              <p className="text-gray-700 leading-relaxed">
                {expandPrincipal
                  ? principalMessage.message
                  : `${principalMessage.message.substring(0, 400)}...`}
              </p>
              <Button
                variant="link"
                className="text-red-600 font-semibold mt-4"
                onClick={() => setExpandPrincipal(!expandPrincipal)}
              >
                {expandPrincipal ? 'View Less' : 'View More'}
              </Button>
              <p className="mt-4 text-gray-700 font-semibold">May God bless you all</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">MESSAGE FROM THE DIRECTOR, HEAD MISTRESS AND PRINCIPAL</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managementTeam.map((member) => (
              <Link
                key={member.id}
                to={`/management/${member.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center bg-white">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-red-600 font-semibold mt-2">{member.designation}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notices & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Notices */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">NOTICE</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {notices.slice(0, 4).map((notice) => (
                      <div key={notice.id} className="border-b pb-4 last:border-b-0 hover:bg-gray-50 transition-colors p-2 rounded">
                        <h3 className="font-semibold text-gray-800">{notice.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notice.description}</p>
                        <p className="text-xs text-red-600 mt-2">{new Date(notice.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="text-red-600 font-semibold mt-4 w-full">
                    View All <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">UPCOMING EVENTS</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className="border-b pb-4 last:border-b-0 hover:bg-gray-50 transition-colors p-2 rounded">
                        <h3 className="font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        <p className="text-xs text-red-600 mt-2">{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="text-red-600 font-semibold mt-4 w-full">
                    View All <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={galleryImages[galleryIndex]}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button className="bg-red-600 hover:bg-red-700">
                View Full Gallery <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-40">
        <a
          href={`https://wa.me/+91${schoolInfo.phone1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a
          href={`tel:+91${schoolInfo.phone1}`}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;
