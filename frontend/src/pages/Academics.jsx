import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Award, GraduationCap, Users } from 'lucide-react';

const Academics = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ACADEMICS</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Excellence in Education</p>
        </div>

        {/* Academic Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <BookOpen className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800">CBSE Curriculum</h3>
              <p className="text-gray-600 mt-2">Following NCERT guidelines</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <GraduationCap className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800">Qualified Faculty</h3>
              <p className="text-gray-600 mt-2">Experienced teachers</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Award className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800">Excellence</h3>
              <p className="text-gray-600 mt-2">Outstanding results</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800">Small Classes</h3>
              <p className="text-gray-600 mt-2">Individual attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Programs */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Primary School (Classes I-V)</h2>
              <p className="text-gray-600 leading-relaxed">
                Our primary school program focuses on building strong foundational skills in literacy, numeracy, and critical thinking. We use innovative teaching methods that make learning engaging and fun while ensuring students develop essential academic and social skills.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Middle School (Classes VI-VIII)</h2>
              <p className="text-gray-600 leading-relaxed">
                The middle school curriculum emphasizes conceptual understanding and application of knowledge. Students are encouraged to explore subjects in depth through projects, experiments, and collaborative learning activities. We prepare them for the challenges of senior secondary education.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Secondary School (Classes IX-X)</h2>
              <p className="text-gray-600 leading-relaxed">
                Our secondary school program prepares students for their board examinations with comprehensive subject knowledge and exam strategies. We offer guidance in choosing appropriate subjects and career paths based on individual strengths and interests.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Senior Secondary (Classes XI-XII)</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer three streams - Science, Commerce, and Arts - allowing students to specialize in their chosen field. Our experienced faculty provides intensive coaching and career counseling to help students excel in board exams and competitive entrance tests.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;
