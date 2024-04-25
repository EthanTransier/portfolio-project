import React, { useState } from 'react';
// import './RotatingCircle.css'; // CSS for styling

const Projects = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [startAngle, setStartAngle] = useState(0);

  const handleMouseDown = event => {
    setIsRotating(true);
    setStartAngle(Math.atan2(event.clientY, event.clientX));
    document.body.classList.add('rotating'); // Add the "rotating" class to the body
  };

  const handleMouseMove = event => {
    if (isRotating) {
      // Implement rotation logic here
    }
  };

  const handleMouseUp = () => {
    setIsRotating(false);
    document.body.classList.remove('rotating'); // Remove the "rotating" class from the body
  };

  return (
    <div
      className={`rotating-circle ${isRotating ? 'rotating' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="circle"></div>
    </div>
  );
};

export default Projects;
