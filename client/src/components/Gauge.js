import React, { useState, useEffect } from 'react';

function Gauge({ score }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // Adjust the animation duration as needed (in milliseconds)
    const steps = 100; // Number of steps for the animation
    const stepSize = score / steps;

    let currentScore = 0;
    const intervalId = setInterval(() => {
      currentScore += stepSize;
      setAnimatedScore(Math.min(currentScore, score));
      if (currentScore >= score) {
        clearInterval(intervalId);
      }
    }, animationDuration / steps);

    return () => clearInterval(intervalId);
  }, [score]);

  // Determine the color based on the score
  let colorClass;
  if (animatedScore <= 40) {
    colorClass = 'text-red-500';
  } else if (animatedScore <= 70) {
    colorClass = 'text-orange-500';
  } else {
    colorClass = 'text-green-500';
  }

  const dashArray = `${animatedScore} ${100 - animatedScore}`;
  const offset = 100 - animatedScore;

  return (
    <div className="relative w-48 h-48">
      <svg className="absolute w-full h-full" viewBox="0 0 36 36">
        <circle
          className="fill-transparent stroke-2 stroke-gray-300"
          cx="18"
          cy="18"
          r="15.91549430918954"
          strokeWidth="2"
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
        <span className="text-2xl font-bold">{Math.round(animatedScore)}%</span>
      </div>
    </div>
  );
}

export default Gauge;
