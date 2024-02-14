import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div >
      <body className="loading-body bg-secondary">
        <div className="container position-absolute top-50 start-50 translate-middle">
          <div className="text text-white d-flex justify-content-center font-monospace">
            <h3>Loading...</h3>
          </div>
          <div className="d-flex justify-content-center">
            <div className="progress">
              <div className="track">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default LoadingPage;
