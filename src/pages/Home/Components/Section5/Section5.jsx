import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    desc: "Visionary leader with a passion for technology and innovation in digital solutions.",
  },
  {
    name: "Bob Smith",
    role: "CTO & Co-Founder",
    desc: "Expert in software development and technology strategy, driving our technical vision.",
  },
  {
    name: "Cathy Lee",
    role: "CPO & Co-Founder",
    desc: "Creative marketer focused on branding and customer engagement strategies.",
  },
  {
    name: "David Brown",
    role: "COO & Co-Founder",
    desc: "Operations expert ensuring efficiency and excellence in our service delivery.",
  },
  {
    name: "Eva Green",
    role: "Lead Designer",
    desc: "Innovative designer crafting user experiences that delight and engage our clients.",
  },
  {
    name: "We're hiring!",
    role: "Join us",
    desc: "Explore exciting career opportunities and be part of our dynamic team.",
  },
  {
    name: "Open positions",
    role: "Apply now",
    desc: "Take the next step in your career with us today.",
  },
  {
    name: "Join us",
    role: "Be part",
    desc: "Contribute to innovative projects and grow your skills in a collaborative environment.",
  },
];

export default function Section5() {
  return (
    <div className="bg-black text-white py-16 md:px-section-lg px-section-sm">
      <div className="text-center mb-14">
        <p className="text-sm uppercase text-gray-400">Meet</p>
        <h2 className="text-3xl sm:text-4xl font-semibold font-hahmlet">
          Our Team
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Introducing the passionate minds behind our innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col items-center text-center hover:bg-[#333] transition-colors"
          >
            <div className="w-16 h-16 bg-gray-500 rounded-full mb-4"></div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{member.role}</p>
            <p className="text-sm text-gray-300">{member.desc}</p>

            <div className="flex gap-4 mt-4 text-gray-400">
              <Mail size={16} />
              <Linkedin size={16} />
              <Globe size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
