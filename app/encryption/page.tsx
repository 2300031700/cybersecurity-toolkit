"use client";
import { useState } from "react";

export default function EncryptionPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encrypt = () => {
    setResult(btoa(text)); // base64 encode
  };

  const decrypt = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("Invalid input");
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">Encryption Tool</h1>

      <textarea
        className="w-full p-2 text-black"
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 flex gap-4">
        <button onClick={encrypt} className="cyber-btn">Encrypt</button>
        <button onClick={decrypt} className="cyber-btn">Decrypt</button>
      </div>

      <div className="mt-4">
        <p>Result:</p>
        <div className="bg-black p-2">{result}</div>
      </div>
    </div>
  );
}