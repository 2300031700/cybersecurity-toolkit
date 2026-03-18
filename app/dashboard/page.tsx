import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6 text-white">
      <h1 className="text-3xl mb-6">Command Centre</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Encryption Tool */}
        <Link href="/encryption">
          <div className="cyber-card cursor-pointer text-center">
            <h2 className="text-xl mb-2">Encryption Tool</h2>
            <p>Encrypt & Decrypt data</p>
          </div>
        </Link>

        {/* Phishing Detector */}
        <Link href="/phishing">
          <div className="cyber-card cursor-pointer text-center">
            <h2 className="text-xl mb-2">Phishing Detector</h2>
            <p>Check suspicious URLs</p>
          </div>
        </Link>

        {/* Log Analyzer */}
        <Link href="/log-analyzer">
          <div className="cyber-card cursor-pointer text-center">
            <h2 className="text-xl mb-2">Log Analyzer</h2>
            <p>Analyze system logs</p>
          </div>
        </Link>

      </div>
    </div>
  );
}