import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on mobile/tablet
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* OUTER GLOW */}

      <div
        className="pointer-events-none fixed z-[9999] w-8 h-8 rounded-full border border-purple-400/60 transition-all duration-150"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${
            isHovering ? 1.7 : 1
          })`,
        }}
      />

      {/* CENTER DOT */}

      <div
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-purple-400"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

export default CustomCursor;