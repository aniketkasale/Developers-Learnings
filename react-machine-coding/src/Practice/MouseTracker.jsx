import { useRef } from "react";

const MouseTracker = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorRef.current.style.left = x + "px";
    cursorRef.current.style.top = y + "px";
    cursorRef.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.display = "none";
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      style={{
        width: 400,
        height: 400,
        border: "1px solid",
        position: "relative",
      }}
    >
      <div
        ref={cursorRef}
        style={{
          width: 10,
          height: 10,
          background: "red",
          borderRadius: "50%",
          position: "absolute",
          display: "none",
        }}
      />
    </div>
  );
};

export default MouseTracker;
