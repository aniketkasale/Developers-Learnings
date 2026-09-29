import { useRef } from "react";
import { useEffect, useState } from "react";

function RenderMsg({ message }) {
  return <div key={message?.id}>{message?.text}</div>;
}

function LiveStreamUI() {
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const msg = {
        id: Date.now(),
        text: "msg " + Date.now(),
      };
      setMessages((prev) => [...prev, msg]);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const container = containerRef?.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      style={{
        border: "1px solid black",
        overflowY: "auto",
        height: "300px",
      }}
      ref={containerRef}
    >
      {messages.map((msg) => {
        return <RenderMsg message={msg} />;
      })}
    </div>
  );
}

export default LiveStreamUI;
