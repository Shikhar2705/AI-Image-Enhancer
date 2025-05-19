import React from "react";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">AI Image Enhancer </h1>
        <p className="text-lg text-gray-600 mt-2">
          Unleash Brilliance: Instantly Transform Your Photos with AI Magic!
        </p>
      </div>
      <Home />
      {/* Footer */}
      <div className="text-sm text-gray-500 mt-6">
        <p>Picture Perfect, Every Time-Powered by Next-Gen AI.</p>
      </div>
    </div>
  );
};

export default App;
