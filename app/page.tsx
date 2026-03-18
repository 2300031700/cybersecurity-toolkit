import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="cyber-card max-w-md w-full text-center">
        
        <h1 className="text-4xl font-bold text-foreground mb-4 cyber-glow-text">
          Cybersecurity Toolkit
        </h1>

        <p className="text-muted-foreground mb-8">
          Welcome to the Security Toolkit Dashboard
        </p>

        <Link
          href="/dashboard"
          className="cyber-btn inline-block"
        >
          Open Dashboard
        </Link>

      </div>
    </div>
  );
}