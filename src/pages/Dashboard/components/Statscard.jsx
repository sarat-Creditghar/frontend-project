import React from "react";

const Statscard = ({t}) => {
  return (
    <div className="stats shadow">
      

      <div className="stat place-items-center">
        <div className="stat-title">{t.title}</div>
        <div className="stat-value text-secondary">{t.value}</div>
        <div className="stat-desc text-secondary">{t.trend} {t.changePercentage} {t.changeLabel}</div>
      </div>
       <div>
        
       </div>
      
    </div>
  );
};

export default Statscard;
