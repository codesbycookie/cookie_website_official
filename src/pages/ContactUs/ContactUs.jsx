/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const ContactUs = () => {
  const [formData, setFormData] = useState({});

    const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      showToast("Please fill out all required fields correctly.", "error");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (msg, type = "error") => {
    const toast = document.createElement("div");
    toast.className = `alert alert-${type} text-white`;
    toast.innerHTML = `<span>${msg}</span>`;

    const container = document.getElementById("form-toast-container");
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      showToast("Your form has been submitted successfully!", "success");
      setIsSubmitting(false);
      setStep(1);
      setFormData({});
    }, 1000);
  };

  const steps = [
    {
      id: 1,
      label: "Tell us about yourself",
      description: "Let's get acquainted before we meet.",
      field: (
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name || ""}
          required
          className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
        />
      ),
    },
    {
      id: 2,
      label: "How can we contact you?",
      description: "We’ll use this info to confirm your booking.",
      field: (
        <>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
          />
        </>
      ),
    },
    {
      id: 3,
      label: "Pick your date",
      description: "Choose a date for your session.",
      field: (
        <input
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
        />
      ),
    },
    {
      id: 4,
      label: "Any message for us?",
      description: "Share additional info or requests.",
      field: (
        <textarea
          name="message"
          rows={4}
          value={formData.message || ""}
          placeholder="Your message..."
          className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
        ></textarea>
      ),
    },
    {
      id: 5,
      label: "What is your project about?",
      description: "Briefly describe your project or idea.",
      field: (
        <textarea
          name="project"
          rows={4}
          value={formData.project || ""}
          placeholder="Describe your project..."
          className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
        ></textarea>
      ),
    },
    {
      id: 6,
      label: "How did you hear about us?",
      description: "This helps us know where our clients come from.",
      field: (
        <select
          name="referral"
          value={formData.referral || ""}
          className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          <option value="">Select an option</option>
          <option value="Google">Google Search</option>
          <option value="Instagram">Instagram</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Friend">Friend or Referral</option>
          <option value="Event">Met at an event</option>
          <option value="Other">Other</option>
        </select>
      ),
    },
  ];

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return (
          formData.email.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
          formData.phone.trim() !== ""
        );
      case 3:
        return (
          formData.date &&
          new Date(formData.date) >= new Date(new Date().toDateString())
        );
      case 4:
        return formData.message.trim() !== "";
      case 5:
        return formData.project.trim() !== "";
      case 6:
        return formData.referral.trim() !== "";
      default:
        return true;
    }
  };

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);



  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <Typewriter
            words={[
              "Schedule a Consultation",
              "Book Your Session",
              "Let's Connect",
              "Get Started",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-black text-lg mt-4">
          Complete the form to schedule a personalized session with our team.
        </p>
      </div>

      <div className="w-full max-w-4xl text-white">
        <form
          onSubmit={
            step === steps.length
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  nextStep();
                }
          }
          className="bg-black p-8 md:p-12 rounded-xl border border-gray-700 shadow-lg"
        >
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              {steps[step - 1].label}
            </h2>
            <p className="text-gray-400 mb-6">{steps[step - 1].description}</p>
            <div onChange={handleChange}>{steps[step - 1].field}</div>
          </motion.div>

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 text-white border border-gray-500 rounded-md hover:bg-gray-700 transition"
              >
                Back
              </button>
            ) : (
              <span />
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-yellow-700 hover:bg-yellow-600 text-white rounded-md transition"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : step === steps.length
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </form>
      </div>
      <div
        className="toast toast-top toast-end z-50"
        id="form-toast-container"
      ></div>
    </section>
  );
};

export default ContactUs;
