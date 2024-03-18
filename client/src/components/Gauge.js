import React from 'react';

function Gauge({ score }) {
    const dashArray = `${score} ${100 - score}`;
    const offset = 100 - score;

  // Determine the color based on the score
  let colorClass;
  if (score <= 40) {
    colorClass = 'text-red-500';
  } else if (score <= 70) {
    colorClass = 'text-orange-500';
  } else {
    colorClass = 'text-green-500';
  }

  return (
    <div className="relative w-48 h-48">
      <svg className="absolute w-full h-full" viewBox="0 0 36 36">
        <circle
          className="fill-transparent stroke-2 stroke-gray-300"
          cx="18"
          cy="18"
          r="15.91549430918954"
          strokeWidth="2"                  
        //   strokeDasharray="25 75"
        //   strokeDashoffset="25"
        ></circle>
        <circle
          className={`fill-transparent stroke-current stroke-2 ${colorClass}`}
          cx="18"
          cy="18"
          r="15.91549430918954"
          strokeWidth="2"
          strokeDasharray={dashArray}
          strokeDashoffset={offset}
        ></circle>
      </svg>
      <div className="absolute w-full h-full flex items-center justify-center text-center">
        <span className="text-2xl font-bold">{score}%</span>
      </div>
    </div>
  );
}

export default Gauge;
