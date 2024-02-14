"use client";
import NavBar from "./components/NavBar";
import LoadingPage from "./components/LoadingPage";
import React, { useState, useEffect } from "react";
import MouseCursor from "./components/MouseCursor";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3100);
  }, []);

  return (
    <React.Fragment>
      {loading === false ? (
        <main className="bg-light">
          <MouseCursor />
          <NavBar />
          <div>
            <HeroSection />
          </div>
        </main>
      ) : (
        <LoadingPage />
      )}
    </React.Fragment>
  );
}
