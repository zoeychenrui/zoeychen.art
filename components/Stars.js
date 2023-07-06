import React, { useEffect, useState } from "react";

const Stars = ({ children }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const createCircles = () => {
      const newCircles = [];
      const numCircles = 500;
      const maxCircleSize = 5;
      const minCircleSize = 1;
      const minDistance = 0.5 * maxCircleSize;
      const existingCoordinates = new Set();
      for (let i = 0; i < numCircles; i++) {
        let x, y, distance;
        do {
          x = Math.floor(Math.random() * window.innerWidth);
          y = Math.floor(Math.random() * window.innerHeight);
          distance = Infinity;
          for (const [existingX, existingY] of existingCoordinates) {
            const dx = x - existingX;
            const dy = y - existingY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            distance = Math.min(distance, dist);
          }
        } while (distance < minDistance);
        const circleSize = Math.floor(Math.random() * maxCircleSize) + minCircleSize;
        const animationDelay = Math.random() * 4;
        const animationDuration = Math.floor(Math.random() * 4) + 4;
        newCircles.push({ circleSize, x, y, animationDelay, animationDuration });
        existingCoordinates.add([x, y]);
      }
      setCircles(newCircles);
    };
    createCircles();
    window.addEventListener("resize", createCircles);
    return () => window.removeEventListener("resize", createCircles);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {children}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#FAFAFA",
            width: circle.circleSize,
            height: circle.circleSize,
            top: circle.y,
            left: circle.x,
            opacity: 0.9,
            animationName: "circle-animation",
            animationDelay: `${circle.animationDelay}s`,
            animationDuration: `${circle.animationDuration}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-out",
          }}
        />
      ))}
      <style>{`
        @keyframes circle-animation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default Stars;
