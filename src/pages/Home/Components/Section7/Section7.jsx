import React from "react";

export default function Section7() {
  return (
    <section className="bg-black text-white py-25 text-center md:px-section-lg px-section-sm">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Medium length CTA heading goes here
      </h2>
      <p className="mb-6 text-gray-300">
        Fusce at nisi eget dolor rhoncus facilisis. Mauris ante ligula, facilisis sed ornare eu.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-black font-medium px-6 py-2 rounded shadow">
          Start
        </button>
        <button className="border border-white px-6 py-2 rounded text-white">
          Contact
        </button>
      </div>
    </section>
  );
}
