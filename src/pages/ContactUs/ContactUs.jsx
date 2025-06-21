import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';

const skills = [
  { name: 'Web Design', icon: '💻', color: 'bg-[#212121]/10 text-[#212121]' },
  { name: 'UI/UX', icon: '🎨', color: 'bg-[#212121]/10 text-[#212121]' },
  { name: 'Development', icon: '⚙️', color: 'bg-[#212121]/10 text-[#212121]' },
  { name: 'Consulting', icon: '💡', color: 'bg-[#212121]/10 text-[#212121]' },
  { name: 'Strategy', icon: '📊', color: 'bg-[#212121]/10 text-[#212121]' },
  { name: 'Support', icon: '🤝', color: 'bg-[#212121]/10 text-[#212121]' }
];

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timing: '10:00 AM - 12:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animationDirection, setAnimationDirection] = useState('forward');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setAnimationDirection('forward');
    setStep(step + 1);
  };

  const prevStep = () => {
    setAnimationDirection('backward');
    setStep(step - 1);
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

  const steps = [
    { id: 1, name: 'Personal Info', icon: '👤', color: 'bg-[#c18b34]' },
    { id: 2, name: 'Schedule', icon: '📅', color: 'bg-[#c18b34]' },
    { id: 3, name: 'Confirm', icon: '✅', color: 'bg-[#c18b34]' }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#fffff0] p-4 md:p-8 lg:mt-20" aria-label="Contact section">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#c18b34]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#212121]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#c18b34]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4 tracking-tight">
              <Typewriter
                words={['Schedule a Consultation', 'Book Your Session', 'Let\'s Connect', 'Get Started']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p className="text-[#212121]/80 max-w-2xl mx-auto text-lg">
              Complete the form below to schedule your personalized session with our team.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#fffff0] rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border border-[#212121]/10">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Visual */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#212121] to-[#212121]/90 p-8 flex flex-col justify-center items-center relative">
              <div className="relative z-10 w-full text-center">
                <div className="relative w-44 h-44 mx-auto mb-8">
                  {/* Avatar */}
                  <div className="absolute inset-0  rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/imgs/cookie_logo_web.jpeg" alt="Profile" className="object-contain" width={100} height={100}/>
                  </div>
                  
                  {/* Floating skills */}
                  {skills.map((skill, idx) => {
                    const angle = (idx * 60) * (Math.PI / 180);
                    const radius = 110;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    
                    return (
                      <div
                        key={skill.name}
                        className={`absolute w-12 h-12 flex items-center justify-center rounded-full ${skill.color} shadow-md transform -translate-x-1/2 -translate-y-1/2`}
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
                
                <h3 className="text-2xl font-bold mb-3 text-[#fffff0]">
                  Step {step} of {steps.length}
                </h3>
                
                {/* Step indicator */}
                <div className="flex justify-center gap-4 mb-8">
                  {steps.map((stepItem) => (
                    <div 
                      key={stepItem.id} 
                      className={`flex flex-col items-center ${step >= stepItem.id ? 'opacity-100' : 'opacity-40'}`}
                    >
                      <div className={`w-12 h-12 rounded-full ${stepItem.color} flex items-center justify-center text-[#fffff0] text-xl mb-2 transition-all ${step === stepItem.id ? 'ring-4 ring-[#fffff0]/50' : ''}`}>
                        {stepItem.icon}
                      </div>
                      <span className="text-[#fffff0] text-xs font-medium">{stepItem.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#fffff0]/10 backdrop-blur-sm rounded-lg p-4 border border-[#fffff0]/20">
                  <p className="text-[#fffff0]/90 text-sm">
                    "Our team is excited to work with you. Let's create something amazing together!"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-10">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-[#c18b34]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#c18b34]/20">
                    <svg className="w-12 h-12 text-[#c18b34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-[#212121] mb-3">Appointment Confirmed!</h3>
                  <p className="text-[#212121]/80 mb-6 max-w-md mx-auto">
                    We've sent the details to <span className="font-medium text-[#c18b34]">{formData.email}</span>.
                    Our team will contact you to confirm.
                  </p>
                  <div className="bg-[#212121]/5 rounded-lg p-4 mb-6 text-left max-w-md mx-auto border border-[#212121]/10 shadow-inner">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-[#c18b34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-medium text-[#212121]">{formData.date} • {formData.timing}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#c18b34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="font-medium text-[#212121]">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setSubmitStatus(null);
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-[#212121] to-[#c18b34] text-[#fffff0] font-medium rounded-lg hover:from-[#212121]/90 hover:to-[#c18b34]/90 transition shadow-md hover:shadow-lg"
                  >
                    Schedule Another Meeting
                  </button>
                </div>
              ) : (
                <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                  <div className={`transition-all duration-300 ease-in-out ${animationDirection === 'forward' ? 'animate-fadeIn' : 'animate-fadeIn'}`}>
                    {/* Step 1: Combined Personal Info */}
                    {step === 1 && (
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border-2 border-[#c18b34]/20 shadow-sm">
                              {steps[0].icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#212121]">Tell us about yourself</h3>
                              <p className="text-[#212121]/60">We'll use this information to contact you about your appointment</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#212121]">Your Full Name*</label>
                            <div className="relative">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-[#fffff0] border border-[#212121]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition font-medium pl-12 shadow-sm"
                                autoFocus
                              />
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#212121]/40">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#212121]">Email Address*</label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-[#fffff0] border border-[#212121]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-[#212121] pl-12 shadow-sm"
                              />
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#212121]/40">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#212121]">Phone Number*</label>
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                placeholder="+1 (123) 456-7890"
                                className="w-full px-4 py-3 bg-[#fffff0] border border-[#212121]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-[#212121] pl-12 shadow-sm"
                              />
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#212121]/40">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-[#c18b34]/10 rounded-lg p-4 border border-[#c18b34]/20">
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-[#c18b34] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                              </svg>
                              <p className="text-sm text-[#212121]">
                                Your information is secure with us. We'll only use it to communicate about your appointment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 2: Appointment Details */}
                    {step === 2 && (
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border-2 border-[#c18b34]/20 shadow-sm">
                              {steps[1].icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#212121]">Schedule your session</h3>
                              <p className="text-[#212121]/60">Choose a time that works best for you</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium mb-2 text-[#212121]">Preferred Date*</label>
                            <div className="relative">
                              <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 bg-[#fffff0] border border-[#212121]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-[#212121] pl-12 shadow-sm"
                                autoFocus
                              />
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#212121]/40">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2 text-[#212121]">Available Time Slots*</label>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { time: '10:00 AM - 12:00 PM', label: 'Morning' },
                                { time: '12:00 PM - 02:00 PM', label: 'Midday' },
                                { time: '02:00 PM - 04:00 PM', label: 'Afternoon' },
                                { time: '04:00 PM - 06:00 PM', label: 'Evening' }
                              ].map((slot) => (
                                <button
                                  key={slot.time}
                                  type="button"
                                  onClick={() => setFormData({...formData, timing: slot.time})}
                                  className={`py-3 px-4 rounded-lg border transition-all ${formData.timing === slot.time ? 
                                    'bg-[#c18b34] text-[#fffff0] border-[#c18b34] shadow-md' : 
                                    'bg-[#fffff0] border-[#212121]/20 hover:border-[#c18b34]/50 shadow-sm hover:shadow-md'}`}
                                >
                                  <span className="block font-medium">{slot.time}</span>
                                  <span className="block text-xs opacity-80">{slot.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-[#c18b34]/10 rounded-lg p-4 border border-[#c18b34]/20">
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-[#c18b34] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                              </svg>
                              <p className="text-sm text-[#212121]">
                                All times are in your local timezone. Need to reschedule? You can change your appointment anytime up to 24 hours before.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 3: Review */}
                    {step === 3 && (
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border-2 border-[#c18b34]/20 shadow-sm">
                              {steps[2].icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#212121]">Review your details</h3>
                              <p className="text-[#212121]/60">Please confirm everything looks correct</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-[#212121]/5 rounded-xl p-6 space-y-4 border border-[#212121]/10 shadow-inner">
                          <div className="flex justify-between items-center pb-4 border-b border-[#212121]/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border border-[#c18b34]/20">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-[#212121]">Personal Information</h4>
                              </div>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setStep(1)}
                              className="text-sm text-[#c18b34] hover:text-[#c18b34]/80 hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-[#212121]/60">Full Name:</span>
                            <span className="font-medium text-[#212121]">{formData.name}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-[#212121]/60">Email:</span>
                            <span className="font-medium text-[#212121]">{formData.email}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-[#212121]/60">Phone:</span>
                            <span className="font-medium text-[#212121]">{formData.phone}</span>
                          </div>
                          
                          <div className="flex justify-between pt-4 border-t border-[#212121]/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border border-[#c18b34]/20">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-[#212121]">Appointment</h4>
                              </div>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setStep(2)}
                              className="text-sm text-[#c18b34] hover:text-[#c18b34]/80 hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-[#212121]/60">Date:</span>
                            <span className="font-medium text-[#212121]">{formData.date || 'Not selected'}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-[#212121]/60">Time:</span>
                            <span className="font-medium text-[#212121]">{formData.timing}</span>
                          </div>
                        </div>
                        
                        {submitStatus === 'error' && (
                          <div className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-100 flex items-start gap-3">
                            <svg className="w-5 h-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-sm">
                              There was an error submitting your form. Please try again or contact us directly at support@example.com
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="mt-10 flex justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-[#212121]/20 text-[#212121] rounded-lg hover:bg-[#212121]/5 transition flex items-center gap-2 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                    
                    {step < steps.length ? (
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-[#212121] to-[#c18b34] text-[#fffff0] font-medium rounded-lg hover:from-[#212121]/90 hover:to-[#c18b34]/90 transition shadow-md hover:shadow-lg flex items-center gap-2 disabled:opacity-50"
                        disabled={!formData.name || !formData.email || !formData.phone || (step === 2 && !formData.date)}
                      >
                        Continue
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-[#212121] to-[#c18b34] text-[#fffff0] font-medium rounded-lg hover:from-[#212121]/90 hover:to-[#c18b34]/90 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-[#fffff0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Booking...
                          </>
                        ) : (
                          <>
                            Confirm Appointment
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-8 text-[#212121]/60 text-sm">
          <p>Have questions? Email us at <a href="mailto:hello@example.com" className="text-[#c18b34] hover:text-[#c18b34]/80 hover:underline">hello@example.com</a></p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(110px) rotate(-360deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(${animationDirection === 'forward' ? '20px' : '-20px'});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;