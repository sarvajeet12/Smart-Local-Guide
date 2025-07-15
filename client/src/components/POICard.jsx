import React, { useRef, useEffect } from "react";

const POICard = ({ poi }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.target.style.backgroundColor = entry.isIntersecting ? "#d0f0c0" : "#fff";
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ padding: "15px", border: "1px solid #ccc", marginBottom: "10px" }}
    >
      <h3>{poi.name}</h3>
      <p>{poi.description}</p>
    </div>
  );
};

export default POICard;
