// components/TitlePage.js
import React, { useEffect, useState } from "react";

const TitlePage = ({ showIndexPage }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // After 3 seconds, set isVisible to false to trigger the animation
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`title-page ${isVisible ? "title-animation" : ""}`}>
      <h1>ANNA HJERPYN*</h1>
      {/* Other title content */}
    </div>
  );
};

export default TitlePage;
