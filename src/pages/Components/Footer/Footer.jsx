/* eslint-disable no-unused-vars */
import React from 'react';
import { SpinningText } from "@/components/magicui/spinning-text";
import { footer } from "../../../../utils/content"; // adjust path if needed

function SpinningTextBasic() {
  return (
    <SpinningText className="md:text-3xl text-lg tracking-widest font-bold text-light-cream" radius={6}>
      Creativity • Care • Commitment •
    </SpinningText>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 relative">
      
      <div className="absolute top-0 md:end-35 end-20">
        <SpinningTextBasic />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Logo + Email */}
        <div className="flex-1 w-full">
          <div className="flex items-center mb-4">
            <img src={footer.company.logo} alt="Cookie logo" className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">
              {footer.company.name}
              <span className="text-light-cream ms-1">{footer.company.highlight}</span>
            </h2>
          </div>
          <div className="flex items-center bg-[#1e1e1e] rounded w-full h-[44px] mb-2">
            <input
              type="text"
              placeholder={footer.company.email_placeholder}
              className="flex-1 bg-transparent px-4 text-sm text-white placeholder-white focus:outline-none"
            />
            <button className="hover:bg-gray-400 bg-white text-black text-sm rounded font-semibold px-4 h-full">
              {footer.company.email_button}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">{footer.company.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-10 lg:mt-0">

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-white">{link.name}</a>
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
              {footer.social.map(({ name, icon: Icon }, i) => (
                <li className="flex items-center gap-2" key={i}>
                  {/* <Icon size={16} />  */}
                  {name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <hr className="border-t border-gray-700 my-10" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>{footer.copyright}</p>
        <div className="flex gap-4">
          {footer.policies.map((policy, i) => (
            <a key={i} href={policy.href} className="hover:text-white underline">
              {policy.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
