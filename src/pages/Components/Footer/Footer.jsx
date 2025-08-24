/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { SpinningText } from "@/components/magicui/spinning-text";
import { footer } from "../../../../utils/content"; // adjust path if needed
import emailjs from "emailjs-com";
import { checkQuota, formatTimeLeft } from "../../../../utils/quotaProvider";
import QuotaTimer from "./QuotaTimer";

function SpinningTextBasic() {
  return (
    <SpinningText
      className="md:text-3xl text-lg tracking-widest font-bold text-light-cream"
      radius={6}
    >
      Creativity • Care • Commitment •
    </SpinningText>
  );
}

export default function Footer() {
  const [mail, setMail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [quota, setQuota] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = "service_vjze6ur";
    const templateID = "template_dw2mabs";
    const userID = "Oht2VZndlktWjLOQT";

    const templateParams = {
      from_name: "Cookie Inc. – Appointments",
      from_email: "info@cookie.org.in",
      email: mail,
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
      setMail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setQuota(checkQuota("brochure_enquiry", 3, 3));
  }, []);

  if (!quota) return null;

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 relative">
      <div className="absolute top-0 md:end-35 end-20">
        <SpinningTextBasic />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Logo + Email */}
        <div className="flex-1 w-full">
          <div className="flex items-center mb-4">
            <img
              src={footer.company.logo}
              loading="lazy"
              alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
              className="h-8 w-8 mr-3"
            />
            <h2 className="text-2xl font-bold">
              {footer.company.name}
              <span className="text-light-cream ms-1">
                {footer.company.highlight}
              </span>
            </h2>
          </div>
          <div className="bg-[#1e1e1e] rounded w-full mb-2 px-3 py-2">
            {quota.remainingCount <= 0 ? (
<QuotaTimer quota={quota} />
            ): (
 <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row w-full  gap-2"
            >
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder={footer.company.email_placeholder}
                className="flex-1 bg-transparent underline  text-white placeholder-white px-4 py-2 text-sm rounded focus:outline-none"
                required
              />
              {submitStatus !== "success" && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="whitespace-nowrap hover:bg-gray-400 bg-white text-black text-sm font-semibold px-4 py-2 rounded disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : footer.company.email_button}
                </button>
              )}
            </form>
            )}
           

            {/* Status messages below the form */}
            {submitStatus === "success" && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Sent successfully! You have {quota.remainingCount} quotas left for enquiring brochure.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-sm mt-2">❌ Failed to send.</p>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-1">
            {footer.company.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-10 lg:mt-0">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.resources.map((res, i) => (
                <li key={i}>
                  <a href={res.href} className="hover:text-white">{res.name}</a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us On</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.social.map((link, i) => (
                <li key={i}>
                  <a
                    href={"https://" + link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-10" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>{footer.copyright}</p>
        {/* <div className="flex gap-4">
          {footer.policies.map((policy, i) => (
            <a key={i} href={policy.href} className="hover:text-white underline">
              {policy.name}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
