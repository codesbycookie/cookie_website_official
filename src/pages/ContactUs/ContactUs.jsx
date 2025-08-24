/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import LeftVisualSection from "./Components/LeftVisualSection";
import emailjs from "emailjs-com";
import { checkQuota } from "../../../utils/quotaProvider";
import QuotaTimer from "./Components/QuotaTimer";

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    timing: "Morning",
    source: "Google",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animationDirection, setAnimationDirection] = useState("forward");
  const [quota, setQuota] = useState(null);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required";
    }

    if (name === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(value))
        error = "Enter a valid 10-digit phone number";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Enter a valid email";
    }

    if (name === "date" && !value.trim()) {
      error = "Date is required";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const nextStep = () => {
    setAnimationDirection("forward");
    setStep(step + 1);
  };

  const prevStep = () => {
    setAnimationDirection("backward");
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = "service_qfufxvi";
    const templateID = "template_rq7832o";
    const userID = "Oht2VZndlktWjLOQT";

    const templateParams = {
      from_name: "Cookie Inc. – Appointments",
      from_email: "info@cookieinc.in",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      timing: formData.timing,
      source: formData.source,
    };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      console.log("Email sent successfully:", res.text);
      setSubmitStatus("success");
      quota.useQuota();
      setStep(step + 1);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setQuota(checkQuota("appointments", 3, 3));
    document.title = "Cookie Inc.  |  Contact Us";
  }, []);



  if (!quota) return null;

  const steps = [
    {
      id: 1,
      name: "Personal Info",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-round-pen-icon lucide-user-round-pen"
        >
          <path d="M2 21a8 8 0 0 1 10.821-7.487" />
          <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          <circle cx="10" cy="8" r="5" />
        </svg>
      ),
      color: "bg-[#c18b34]",
    },
    {
      id: 2,
      name: "Schedule",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-calendar-days-icon lucide-calendar-days"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>
      ),
      color: "bg-[#c18b34]",
    },
    {
      id: 3,
      name: "Confirm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-check-check-icon lucide-check-check"
        >
          <path d="M18 6 7 17l-5-5" />
          <path d="m22 10-7.5 7.5L13 16" />
        </svg>
      ),
      color: "bg-[#c18b34]",
    },
  ];


  return (
    <section
      className="h-full pt-30 flex flex-col justify-center items-center  p-4 md:p-8 lg:mt-20"
      aria-label="Contact section"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-mona-sans font-bold text-black mb-4 tracking-tight">
              <SparklesText colors={{ first: "#fff3c4", second: "#c18b13" }}>
                Drop us your need
              </SparklesText>
            </h1>
            <p className="text-black/80 max-w-2xl mx-auto text-lg">
              Complete the form below to schedule your personalized session with
              our team.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className=" rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border border-/10">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Visual */}
            <LeftVisualSection step={step} steps={steps} />
            {/* Right side - Form */}

            {quota.remainingCount <= 0 ? (
<QuotaTimer quota={quota}/>
            ) : (
              <div className="w-full md:w-3/5 p-4 md:p-10">
                {submitStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24  rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#c18b34]/20">
                      <svg
                        className="w-12 h-12 text-[#c18b34]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-3">
                      Appointment Confirmed!. You have{" "}
                      <span className="font-medium">
                        {quota.appointments_remainingCount}
                      </span>{" "}
                      submissions left in this 3-day window.
                    </h3>
                    <p className="text-black/80 mb-6 mx-auto">
                      We've sent the details to{" "}
                      <span className="font-medium text-[#c18b34]">
                        {formData.email}
                      </span>
                      . Our team will contact you to confirm.
                    </p>
                    <div className="bg-black/5 rounded-lg p-4 mb-6 text-left  mx-auto border border-black/10 shadow-inner">
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          className="w-5 h-5 text-[#c18b34]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="font-medium text-black">
                          {formData.date} • {formData.timing}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-[#c18b34]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <span className="font-medium text-black">
                          {formData.phone}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setStep(1);
                        setSubmitStatus(null);
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-dark-cream to-light-cream  text-[#fffff0] font-medium rounded-lg hover:from-dark-cream/90 hover:to-[#c18b34]/90 transition shadow-md hover:shadow-lg"
                    >
                      Schedule Another Meeting
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={
                      step === 3
                        ? handleSubmit
                        : (e) => {
                            e.preventDefault();
                            nextStep();
                          }
                    }
                  >
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        animationDirection === "forward"
                          ? "animate-fadeIn"
                          : "animate-fadeIn"
                      }`}
                    >
                      {/* Step 1: Combined Personal Info */}
                      {step === 1 && (
                        <div className="space-y-10">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border-2 border-[#c18b34]/20 shadow-sm">
                                {steps[0].icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-black">
                                  Tell us about yourself
                                </h3>
                                <p className="text-black/60">
                                  We'll use this information to contact you
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-5">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2 text-black"
                              >
                                Your Full Name*
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  aria-required="true"
                                  placeholder="Your name here"
                                  onBlur={(e) =>
                                    validateField(e.target.name, e.target.value)
                                  }
                                  className="w-full px-4 py-3 bg-[#fffff0] border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition font-medium pl-12 shadow-sm"
                                  autoFocus
                                />

                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              {errors.name && (
                                <p className="text-red-500 text-md mt-3 ms-3">
                                  {errors.name}
                                </p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2 text-black"
                              >
                                Email Address*
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  onBlur={(e) =>
                                    validateField(e.target.name, e.target.value)
                                  }
                                  required
                                  aria-required="true"
                                  placeholder="Your email here"
                                  className="w-full px-4 py-3 bg-[#fffff0] border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-black pl-12 shadow-sm"
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              {errors.email && (
                                <p className="text-red-500 text-md mt-3 ms-3">
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium mb-2 text-black"
                              >
                                Phone Number*
                              </label>
                              <div className="relative">
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  onBlur={(e) =>
                                    validateField(e.target.name, e.target.value)
                                  }
                                  required
                                  aria-required="true"
                                  maxLength={10}
                                  placeholder="+91 12345 67890"
                                  className="w-full px-4 py-3 bg-[#fffff0] border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-black pl-12 shadow-sm"
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              {errors.phone && (
                                <p className="text-red-500 text-md mt-3 ms-3">
                                  {errors.phone}
                                </p>
                              )}
                            </div>

                            <div className="bg-[#c18b34]/10 rounded-lg p-4 border border-[#c18b34]/20">
                              <div className="flex items-start gap-3">
                                <svg
                                  className="w-5 h-5 text-[#c18b34] mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  ></path>
                                </svg>
                                <p className="text-sm text-black">
                                  Your information is secure with us. We'll only
                                  use it to communicate about your appointment.
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
                                <h3 className="text-2xl font-bold text-black">
                                  Schedule your session
                                </h3>
                                <p className="text-black/60">
                                  Choose a time that works best for you
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-5">
                            <div>
                              <label
                                htmlFor="date"
                                className="block text-sm font-medium mb-2 text-black"
                              >
                                Preferred Date*
                              </label>
                              <div className="relative">
                                <input
                                  type="date"
                                  id="date"
                                  name="date"
                                  value={formData.date}
                                  onChange={handleChange}
                                  required
                                  onBlur={(e) =>
                                    validateField(e.target.name, e.target.value)
                                  }
                                  aria-required="true"
                                  min={new Date().toISOString().split("T")[0]}
                                  className="w-full px-4 py-3 bg-[#fffff0] border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c18b34] focus:border-[#c18b34] transition text-black pl-12 shadow-sm"
                                  autoFocus
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              {errors.date && (
                                <p className="text-red-500 text-md mt-3 ms-3">
                                  {errors.date}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2 text-black">
                                Available Time Slots*
                              </label>
                              <div className="grid grid-cols-2 gap-3">
                                {[
                                  { label: "Morning" },
                                  { label: "Afternoon" },
                                  { label: "Evening" },
                                ].map((slot) => (
                                  <button
                                    key={slot.time}
                                    type="button"
                                    onClick={() =>
                                      setFormData({
                                        ...formData,
                                        timing: slot.label,
                                      })
                                    }
                                    className={`py-3 px-4 rounded-lg border transition-all ${
                                      formData.timing === slot.label
                                        ? "bg-[#c18b34] text-[#fffff0] border-[#c18b34] shadow-md"
                                        : "bg-[#fffff0] border-black/20 hover:border-[#c18b34]/50 shadow-sm hover:shadow-md"
                                    }`}
                                  >
                                    <span className="block font-medium">
                                      {slot.label}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2 text-black">
                                How did you hear about us?*
                              </label>
                              <div className="grid grid-cols-2 gap-3">
                                {[
                                  "Google",
                                  "Instagram",
                                  "WhatsApp",
                                  "Friend / Referral",
                                  "Other",
                                ].map((sourceOption) => (
                                  <button
                                    key={sourceOption}
                                    type="button"
                                    onClick={() =>
                                      setFormData({
                                        ...formData,
                                        source: sourceOption,
                                      })
                                    }
                                    className={`py-3 px-4 rounded-lg border transition-all ${
                                      formData.source === sourceOption
                                        ? "bg-[#c18b34] text-[#fffff0] border-[#c18b34] shadow-md"
                                        : "bg-[#fffff0] border-black/20 hover:border-[#c18b34]/50 shadow-sm hover:shadow-md"
                                    }`}
                                  >
                                    <span className="block font-medium">
                                      {sourceOption}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="bg-[#c18b34]/10 rounded-lg p-4 border border-[#c18b34]/20">
                              <div className="flex items-start gap-3">
                                <svg
                                  className="w-5 h-5 text-[#c18b34] mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  ></path>
                                </svg>
                                <p className="text-sm text-black">
                                  All times are in your local timezone. Need to
                                  reschedule? You can change your appointment
                                  anytime up to 24 hours before.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Review */}
                      {step === 3 && (
                        <div className="space-y-">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border-2 border-[#c18b34]/20 shadow-sm">
                                {steps[2].icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-black">
                                  Review your details
                                </h3>
                                <p className="text-black/60">
                                  Please confirm everything looks correct
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-black/5 rounded-xl p-6 space-y-4 border border-black/10 shadow-inner">
                            <div className="flex justify-between items-center pb-4 border-b border-black/10">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border border-[#c18b34]/20">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-medium text-black">
                                    Personal Information
                                  </h4>
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
                              <span className="text-black/60">Full Name:</span>
                              <span className="font-medium text-black">
                                {formData.name}
                              </span>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between">
                              <span className="text-black/60">Email:</span>
                              <span className="font-medium text-black">
                                {formData.email}
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <span className="text-black/60">Phone:</span>
                              <span className="font-medium text-black">
                                {formData.phone}
                              </span>
                            </div>

                            <div className="flex justify-between pt-4 border-t border-black/10">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#c18b34]/10 text-[#c18b34] flex items-center justify-center border border-[#c18b34]/20">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-medium text-black">
                                    Appointment
                                  </h4>
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
                              <span className="text-black/60">Date:</span>
                              <span className="font-medium text-black">
                                {formData.date || "Not selected"}
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <span className="text-black/60">Time:</span>
                              <span className="font-medium text-black">
                                {formData.timing}
                              </span>
                            </div>
                          </div>

                          {submitStatus === "error" && (
                            <div className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-100 flex items-start gap-3">
                              <svg
                                className="w-5 h-5 flex-shrink-0 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <p className="text-sm">
                                There was an error submitting your form. Please
                                try again or contact us directly at
                                support@example.com
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-between gap-4">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="w-full md:w-auto px-6 py-3 border border-black/20 text-black rounded-lg hover:bg-black/5 transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                          Back
                        </button>
                      ) : (
                        <div className="w-full md:w-auto h-0" />
                      )}

                      {step < steps.length ? (
                        <button
                          type="submit"
                          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-dark-cream to-light-cream text-[#fffff0] font-medium rounded-lg hover:from-light-cream/90 hover:to-[#c18b34]/90 transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                          disabled={
                            !formData.name ||
                            !formData.email ||
                            !formData.phone ||
                            (step === 2 && !formData.date)
                          }
                        >
                          Continue
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-dark-cream to-light-cream text-[#fffff0] font-medium rounded-lg hover:from-light-cream/90 hover:to-[#c18b34]/90 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 text-[#fffff0]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Booking...
                            </>
                          ) : (
                            <>
                              Confirm Appointment
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-black/60 text-sm">
          <p>
            Have questions? Email us at{" "}
            <a
              href={`mailto:info@cookieinc.in?subject=${encodeURIComponent(
                "Project Inquiry"
              )}&body=${encodeURIComponent(
                "Hello Cookie Inc,\n\nI have a project idea and would like to discuss further. Please get back to me.\n\nThanks!"
              )}`}
              className="text-[#c18b34] hover:text-[#c18b34]/80 hover:underline"
            >
              info@cookieinc.in
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(110px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(110px)
              rotate(-360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(
              ${animationDirection === "forward" ? "20px" : "-20px"}
            );
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
