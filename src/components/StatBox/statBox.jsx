import React from "react";
import "./statBox.css";
import ProgressCircle from "../ProgressCircle/progressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div className="statbox">
      <div className="statbox-header">
        <div>
          {icon}
          <div className="statbox-title">
            {title}
          </div>
        </div>
        <div>
          <ProgressCircle progress={progress} />
        </div>
      </div>

      <div className="statbox-content" style={{ marginTop: '2px' }}>
        <div className="statbox-subtitle">
          {subtitle}
        </div>
        <div className="statbox-increase">
          {increase}
        </div>
      </div>
    </div>
  );
};

export default StatBox;
