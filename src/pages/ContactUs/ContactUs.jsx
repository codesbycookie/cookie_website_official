import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';

const skills = [
  { name: 'HTML', icon: '🔖' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'SEO', icon: '🔍' },
  { name: 'UI/UX', icon: '✨' }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timing: '10:00 AM - 12:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const response = await axios.post('http://localhost:5000/api/appointment', formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          phone: '', 
          email: '', 
          date: '', 
          timing: '10:00 AM - 12:00 PM' 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black p-4 md:p-8" aria-label="Contact section">
      <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
        {/* Right side - Contact Form */}
        <div className="w-full md:w-1/2">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center h-12 text-[black]" tabIndex={0}>
              <Typewriter
                words={['Book an Appointment', 'Schedule a Meeting', 'Get in Touch', 'Contact Us']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
                Appointment booked successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
                Error submitting form. Please try again.
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent transition text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-black-700">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="+1 (123) 456-7890"
                className="w-full px-4 py-2 bg-white-50 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent transition text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-black-700">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-white-50 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent transition text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium mb-1 text-black-700">Preferred Date*</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                aria-required="true"
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 bg-white-50 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent transition text-gray-800"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="timing" className="block text-sm font-medium mb-1 text-black-700">Preferred Timing*</label>
              <select
                id="timing"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-2 bg-white-50 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent transition text-gray-800"
              >
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-[black]  text-white font-medium py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Book Appointment'}</span>
            </button>
          </form>
        </div>

        {/* Left side - Avatar and Skills */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Avatar Glow */}
            <div className="absolute inset-0 bg-black rounded-full opacity-20 blur-xl animate-pulse"></div>
            
            {/* Avatar */}
            <div className="absolute inset-4 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-black">
              <div className="text-4xl">
                <img src="/imgs/cookie_logo_web.jpeg" alt="" />

              </div>
            </div>
            
            {/* Skill Orbits */}
            <div className="absolute inset-0">
              {skills.map((skill, idx) => {
                const angle = (idx * 60) * (Math.PI / 180);
                const radius = 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                
                return (
                  <div
                    key={skill.name}
                    className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[black] transform -translate-x-1/2 -translate-y-1/2 shadow-md`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animation: `orbit ${10 + idx * 2}s linear infinite`
                    }}
                    aria-label={skill.name}
                    title={skill.name}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="sr-only">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional text with accent color */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-[black] mb-2">Schedule a Meeting</h3>
            <p className="text-gray-700">Available Monday to Friday, 10:00 AM to 6:00 PM</p>
          </div>
        </div>
      </div>
      
      {/* Add this to your global CSS or style tag */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;