"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SmokeAnimation.module.css";

const SmokeAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    // Create canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "smokeCanvas";
    canvas.className = styles.smokeCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    containerRef.current.appendChild(canvas);

    // Initialize smoke using bijection/smoke.js
    const initSmoke = async () => {
      try {
        // Import the smoke library
        const SmokeMachine = (await import("@bijection/smoke/smoke.js"))
          .default as any;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Create smoke machine with lighter, more transparent color
        const party = SmokeMachine(ctx, [200, 200, 200]);

        // Start the smoke animation
        party.start();

        // Add smoke continuously from bottom of screen
        const addSmoke = () => {
          // Add smoke from multiple points along the bottom
          for (let i = 0; i < 3; i++) {
            const x = Math.random() * canvas.width;
            party.addSmoke(x, canvas.height, 5);
          }
        };

        // Add initial smoke
        addSmoke();

        // Add smoke periodically
        const smokeInterval = setInterval(addSmoke, 200);

        // Handle resize
        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
          clearInterval(smokeInterval);
          window.removeEventListener("resize", handleResize);
          party.stop();
          if (containerRef.current && canvas) {
            containerRef.current.removeChild(canvas);
          }
        };
      } catch (error) {
        console.error("Failed to load smoke animation:", error);
      }
    };

    initSmoke();
  }, [isClient]);

  // Don't render anything until client-side
  if (!isClient) {
    return <div className={styles.smokeContainer} />;
  }

  return (
    <div ref={containerRef} className={styles.smokeContainer}>
      {/* Canvas will be inserted here */}
    </div>
  );
};

export default SmokeAnimation;
