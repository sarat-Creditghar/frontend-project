import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-200  h-70 shadow-sm p-5">
      
      <div className="card-body">
        <h2 className="card-title">WelCome Back </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Go Now</button>
        </div>
      </div>

    </div>
  );
};

export default Card;
