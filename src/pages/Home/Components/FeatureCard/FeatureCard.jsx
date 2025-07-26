import React from "react";


export default function FeatureCard({ title, content,img }) {
  return (
    <div className="card w-full bg-white card-lg">
      <div className="card-body ps-0">
        <img src={img} loading="lazy" className="h-15 w-15 mb-5" alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions" />
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
