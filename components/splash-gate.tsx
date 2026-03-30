"use client";

import { useEffect, useState } from "react";

import { siteName } from "@/lib/site";

import { SnakeArcade } from "./snake-arcade";

export function SplashGate() {
  const [entered, setEntered] = useState(true);

  useEffect(() => {
    const seen = window.localStorage.getItem("rise954-entered");
    if (!seen) {
      setEntered(false);
    }
  }, []);

  const handleEnter = () => {
    window.localStorage.setItem("rise954-entered", "true");
    setEntered(true);
  };

  if (entered) return null;

  return (
    <div className="splash-gate">
      <div className="splash-grid" />
      <div className="splash-copy">
        <p className="eyebrow">Launch gate</p>
        <h1>{siteName}</h1>
        <p>
          Five premium one-minute records. A spoken welcome. And a gate that feels like you stepped straight into the
          release.
        </p>
        <div className="splash-actions">
          <button className="primary-button" type="button" onClick={handleEnter}>
            Enter the site
          </button>
          <span>Tap into the gate for a second, then move when you are ready.</span>
        </div>
      </div>
      <SnakeArcade compact />
    </div>
  );
}
