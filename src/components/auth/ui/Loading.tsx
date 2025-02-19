import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    if (!document.getElementById("loading-keyframes")) {
      const style = document.createElement("style");
      style.id = "loading-keyframes";
      style.innerHTML = `
        @keyframes bar1 {
          0% { left: -35%; right: 100%; }
          60%, 100% { left: 100%; right: -90%; }
        }
        @keyframes bar2 {
          0% { left: -200%; right: 100%; }
          60%, 100% { left: 107%; right: -8%; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className="absolute inset-0 left-1 right-1 cursor-progress bg-white/30 z-10"
      role="status"
      aria-label="Loading"
    >
      <div className="relative w-[99%] h-1.5 bg-[rgba(0,103,75,0.2)] rounded-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[#00674cda] rounded-full"
          style={{
            animation: "bar1 2.1s cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-[#00674cda] rounded-full"
          style={{
            animation: "bar2 2.1s cubic-bezier(0.16, 0.84, 0.44, 1) infinite",
            animationDelay: "1.15s",
          }}
        ></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
