import { useRef } from "react";

function MouseTracker() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circleRef.current.style.left = `${x}px`;
    circleRef.current.style.top = `${y}px`;
    circleRef.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    circleRef.current.style.display = "none";
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 400,
        height: 400,
        border: "1px solid black",
        position: "relative",
      }}
    >
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "red",
          transform: "translate(-50%, -50%)",
          display: "none",
        }}
      />
    </div>
  );
}

export default MouseTracker;
