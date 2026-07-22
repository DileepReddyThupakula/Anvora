import { useEffect, useState } from "react";
import { ShieldCheck, Cpu, Terminal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LaunchScreenProps {
  onComplete: () => void;
}

export function LaunchScreen({ onComplete }: LaunchScreenProps) {
  const [handshakeStep, setHandshakeStep] = useState<number>(0);
  const [handshakeComplete, setHandshakeComplete] = useState<boolean>(false);
  const [showDiagnostics, setShowDiagnostics] = useState<boolean>(false);

  const steps = [
    "Establishing hardware enclave security connection...",
    "Verifying JWT identity tokens & cryptographic session keys...",
    "Handshake verified. Computational authority established.",
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setHandshakeStep(1), 200);
    const timer2 = setTimeout(() => setHandshakeStep(2), 400);
    const timer3 = setTimeout(() => {
      setHandshakeComplete(true);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Auto-advance after handshake completes if user doesn't interrupt
  useEffect(() => {
    if (handshakeComplete) {
      const autoTimer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(autoTimer);
    }
  }, [handshakeComplete, onComplete]);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-between bg-[#07090E] p-6 text-zinc-100 select-none overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="App Launch Security Handshake"
    >
      {/* Dynamic Background Glow & Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950/80 to-[#07090E]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Header Status */}
      <header className="relative z-10 flex w-full max-w-5xl items-center justify-between pt-4">
        <div className="flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 backdrop-blur-md">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-zinc-300">
            ENCLAVE SECURE • 4096-BIT RSA
          </span>
        </div>
        <button
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-400 transition-colors"
        >
          <Terminal className="h-3.5 w-3.5" />
          <span>{showDiagnostics ? "Hide Diagnostics" : "Diagnostics"}</span>
        </button>
      </header>

      {/* Center Brand Identity Container */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto py-12">
        {/* Animated Brand Mark Icon */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-600/20 blur-xl animate-pulse" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-amber-500/30 bg-zinc-900/90 shadow-[0_0_50px_rgba(245,158,11,0.15)] backdrop-blur-xl">
            <Cpu className="h-12 w-12 text-amber-400 animate-pulse" />
          </div>
        </div>

        {/* Brand Title */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500/90">
          ANVORA AI OS
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Executive Workspace
        </h1>
        <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
          High-status command environment initialization for founders, traders, and enterprise leaders.
        </p>

        {/* Security Handshake Telemetry Badge */}
        <div className="mt-8 w-full max-w-sm rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-2 text-xs text-zinc-400">
            <span className="font-medium text-zinc-300">Identity Handshake</span>
            <span className="font-mono text-amber-400">
              {handshakeComplete ? "100%" : `${(handshakeStep + 1) * 33}%`}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 ease-out"
              style={{
                width: handshakeComplete ? "100%" : `${(handshakeStep + 1) * 33}%`,
              }}
            />
          </div>

          <p className="mt-3 text-xs text-zinc-400 font-mono truncate">
            {steps[handshakeStep]}
          </p>
        </div>

        {/* Manual Proceed Trigger */}
        {handshakeComplete && (
          <div className="mt-6 animate-fade-in">
            <Button
              onClick={onComplete}
              className="rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-6 py-2.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:bg-amber-500/30 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              Continue to System Initialization
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

      {/* Diagnostics Modal / Panel */}
      {showDiagnostics && (
        <div className="relative z-20 w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-950/95 p-4 font-mono text-xs text-zinc-400 mb-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
            <span className="text-amber-400 font-semibold">BOOT DIAGNOSTICS LOG</span>
            <span className="text-zinc-500">ENV: PRODUCTION_STAGING</span>
          </div>
          <p>[0.001s] Cold boot initialization sequence triggered</p>
          <p>[0.045s] Cryptographic identity token validated via enclave</p>
          <p>[0.120s] Hardware acceleration layer enabled (WebGL 2.0)</p>
          <p>[0.340s] Zero-trust security handshake verified</p>
        </div>
      )}

      {/* Footer Version Tag */}
      <footer className="relative z-10 flex w-full max-w-5xl items-center justify-between border-t border-zinc-900 pt-4 pb-2 text-[11px] text-zinc-600">
        <span>ANVORA OS v2.4.0 • SPRINT 02 BUILD</span>
        <span>STATUS: SECURE OPERATIONAL</span>
      </footer>
    </div>
  );
}
