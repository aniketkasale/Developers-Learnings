import { useEffect, useRef, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const sizeRef = useRef(size);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (sizeRef?.width !== width || sizeRef.height !== height) {
        setSize({ width, height });
        sizeRef.current = { width, height };
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export default useWindowSize;
