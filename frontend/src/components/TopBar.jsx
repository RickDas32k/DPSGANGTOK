import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { schoolInfo } from '../mockData';

const TopBar = () => {
  const [phoneDialog, setPhoneDialog] = useState(false);

  return (
    <>
      <div className="bg-red-600 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <MapPin size={18} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Mail size={18} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube size={18} />
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:underline">Admission Enquiry</a>
              <span>|</span>
              <a href="#" className="hover:underline">Staff Login</a>
              <span>|</span>
              <a href="#" className="hover:underline">Student's Login</a>
              <span>|</span>
              <a href="#" className="hover:underline">NOTICE</a>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Top Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <a href="#" className="text-red-600 hover:underline">CBSE Mandatory Disclosure</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="text-red-600 hover:underline">Annual Report</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="text-red-600 hover:underline">Make an Appointment</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="text-red-600 hover:underline">Career</a>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Dialog */}
      <Dialog open={phoneDialog} onOpenChange={setPhoneDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Call For Admission</DialogTitle>
            <DialogDescription>
              Choose a number to call:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Button
              onClick={() => window.location.href = `tel:+91${schoolInfo.phone1}`}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Phone className="mr-2" size={18} />
              {schoolInfo.phone1}
            </Button>
            <Button
              onClick={() => window.location.href = `tel:+91${schoolInfo.phone2}`}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Phone className="mr-2" size={18} />
              {schoolInfo.phone2}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopBar;
