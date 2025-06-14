import React from "react";

export default function FeatureCard({ title, content }) {
  return (
    <div className="card w-96 bg-white card-lg">
      <div className="card-body ps-0">
        <img src="/imgs/featurepic.svg" className="h-15 w-15 mb-5" alt="" />
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
