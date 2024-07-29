import React from "react";
import "./progressCircle.css";

const ProgressCircle = ({ progress = "0", size = "40" }) => {
    const angle = progress * 360;

    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(#6a6a72 55%, transparent 56%),
                 conic-gradient(transparent 0deg ${angle}deg, #1a0d36 ${angle}deg 360deg),
                 #00cc00`
    };

    return (
        <div className="progress-circle" style={circleStyle}></div>
    );
};

export default ProgressCircle;
