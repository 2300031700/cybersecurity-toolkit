"use client";
import { useState } from "react";

export default function PhishingPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const checkUrl = () => {
    if (url.includes("@") || url.length > 50 || url.includes("http://")) {
      setResult("⚠️ Suspicious URL");
    } else {
      setResult("✅ Looks Safe");
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">Phishing Detector</h1>

      <input
        className="w-full p-2 text-black"
        placeholder="Enter URL"
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={checkUrl} className="cyber-btn mt-4">
        Check
      </button>

      <div className="mt-4">{result}</div>
    </div>
  );
}