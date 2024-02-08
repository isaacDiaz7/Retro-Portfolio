"use client";
import NavBar from "./components/NavBar";
import LoadingPage from "./components/LoadingPage";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3100);
  }, []);

  return (
    <React.Fragment>
      {loading === false ? (
        <main className="bg-black">
          <NavBar />
        </main>
      ) : (
        <LoadingPage />
      )}
    </React.Fragment>
  );
}
