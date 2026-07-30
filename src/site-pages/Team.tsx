import React from 'react';
import { GraduationCap, Briefcase, Globe, Lightbulb } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Harsh',
      role: 'CEO',
      avatar: '/assets/harsh.jpg',
      education: 'Alumnus of IIT Bombay',
      background: 'Founding Engineer at Aisle',
      expertise: ['Product Strategy', 'Social Dynamics', 'High-Scale Architecture', 'Venture Capital'],
      experience: [
        { company: 'Aisle', role: 'Founding Engineer' },
        { company: 'Stealth Startup', role: 'Chief Visionary Officer' },
        { company: 'Global Tech', role: 'Strategic Advisor' }
      ],
      description: 'Harsh implies a legacy of innovation. A graduate of IIT Bombay, he laid the technical groundwork for Aisle, India\'s premier dating app. With a nose for unicorn opportunities and a deep understanding of social connection mechanics, he leads Emberlight with bold vision and relentless execution.'
    },
    {
      name: 'Anil',
      role: 'CTO',
      avatar: '/assets/anil.JPG',
      education: 'MS in EECS from UC Berkeley',
      background: 'B.Tech from IIT Bombay',
      expertise: ['Data Science', 'Distributed Systems', 'Mobile Computing', 'Algorithmic Matching'],
      experience: [
        { company: 'The Taj Dating Group', role: 'Co-Founder' },
        { company: 'Silicon Valley Tech', role: 'Senior Staff Engineer' }
      ],
      description: 'Anil drives the technological heartbeat of Emberlight. With a master\'s from Berkeley and roots at IIT Bombay, he previously built The Taj Dating Group from the ground up. His deep expertise in EECS and passion for connecting people through technology ensures our platform stays miles ahead of the curve.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries behind emberlight, combining deep industry expertise with cutting-edge social dynamics to redefine the future of human connection.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Avatar and Basic Info */}
                <div className="bg-gradient-to-br from-pink-600 to-rose-600 p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-pink-100 text-lg font-semibold">{member.role}</p>
                </div>

                {/* Details */}
                <div className="p-8">
                  {/* Education */}
                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <GraduationCap className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{member.education}</p>
                        <p className="text-gray-600 text-sm">{member.background}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <Lightbulb className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Core Competencies</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <Briefcase className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Previous Experience</p>
                        <ul className="space-y-2">
                          {member.experience.map((exp, idx) => (
                            <li key={idx} className="text-gray-600">
                              <span className="font-semibold text-gray-900">{exp.role}</span>
                              {' '}at <span className="font-semibold text-gray-900">{exp.company}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 text-pink-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Emberlight, we are dedicated to revolutionizing how people meet and connect.
            By fusing advanced matchmaking algorithms with a deep understanding of human psychology,
            we are building a platform that sparks authentic relationships and fosters lasting love in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}

