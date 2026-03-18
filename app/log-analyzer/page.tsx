"use client";
import { useState } from "react";

export default function LogAnalyzer() {
  const [log, setLog] = useState("");
  const [result, setResult] = useState("");

  const analyze = () => {
    if (log.includes("error") || log.includes("failed")) {
      setResult("⚠️ Suspicious Activity Found");
    } else {
      setResult("✅ Logs look normal");
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">Log Analyzer</h1>

      <textarea
        className="w-full p-2 text-black"
        placeholder="Paste logs"
        onChange={(e) => setLog(e.target.value)}
      />

      <button onClick={analyze} className="cyber-btn mt-4">
        Analyze
      </button>

      <div className="mt-4">{result}</div>
    </div>
  );
}