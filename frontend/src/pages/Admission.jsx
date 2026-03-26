import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import { Download, FileText, Calendar } from 'lucide-react';
import { schoolInfo } from '../mockData';

const Admission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    class: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We will contact you soon regarding the admission process.",
    });
    setFormData({ studentName: '', parentName: '', email: '', phone: '', class: '' });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div
          className="relative h-64 bg-cover bg-center rounded-lg mb-12 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1592066575517-58df903152f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjA2OTM3MTd8MA&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">ADMISSION OPEN</h1>
            <p className="text-xl">Academic Year 2025-26</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Admission Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="mx-auto text-red-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Classes Offered</h3>
                <p className="text-gray-600">Nursery to Class 9 & Class 11 (Arts, Commerce & Science)</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="mx-auto text-red-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Application Period</h3>
                <p className="text-gray-600">January 2025 - March 2025</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Download className="mx-auto text-red-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Prospectus</h3>
                <Button className="mt-2 bg-red-600 hover:bg-red-700">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Admission Process */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Fill Application Form</h3>
                      <p className="text-sm text-gray-600 mt-1">Submit the online application form with required details</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Document Submission</h3>
                      <p className="text-sm text-gray-600 mt-1">Submit required documents at the school office</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Entrance Test/Interview</h3>
                      <p className="text-sm text-gray-600 mt-1">Appear for entrance test or interview as applicable</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Admission Confirmation</h3>
                      <p className="text-sm text-gray-600 mt-1">Pay fees and complete admission formalities</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-gray-800 mb-2">Contact for Admission</h3>
                  <p className="text-gray-700">Phone: +91 {schoolInfo.phone1} / +91 {schoolInfo.phone2}</p>
                  <p className="text-gray-700">Email: {schoolInfo.email}</p>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Student Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      required
                      placeholder="Student's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      required
                      placeholder="Parent's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Class Seeking Admission *
                    </label>
                    <Input
                      type="text"
                      value={formData.class}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      required
                      placeholder="e.g., Nursery, Class 1, Class 11"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-6 text-lg"
                  >
                    SUBMIT ENQUIRY
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
