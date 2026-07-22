import { useEffect, useState } from "react";
import { ShieldCheck, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SessionContext } from "../types/startup";

interface EnterHeadquartersScreenProps {
  sessionContext: SessionContext;
  onComplete: () => void;
}

export function EnterHeadquartersScreen({
  sessionContext,
  onComplete,
}: EnterHeadquartersScreenProps) {
  const [countdown, setCountdown] = useState<number>(3);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleLaunch();
    }
  }, [countdown]);

  const handleLaunch = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-center justify-center bg-[#07090E] p-6 text-zinc-100 select-none overflow-hidden transition-all duration-500 ${
        isTransitioning ? "scale-105 opacity-0 blur-md" : "scale-100 opacity-100"
      }`}
    >
      {/* Background portal effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-zinc-950/90 to-[#07090E] animate-pulse" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Main Glass Portal Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto rounded-3xl border border-amber-500/30 bg-zinc-900/80 p-10 shadow-[0_0_80px_rgba(245,158,11,0.2)] backdrop-blur-2xl">
        {/* Animated Clearance Ring */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-400/30 blur-lg animate-spin" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-400 bg-zinc-950 shadow-2xl">
            <ShieldCheck className="h-10 w-10 text-amber-400" />
          </div>
        </div>

        {/* Status Text */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 mb-3">
          <Zap className="h-3.5 w-3.5" />
          CLEARANCE VERIFIED &bull; LEVEL 1 EXECUTIVE
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Entering Headquarters
        </h1>

        <p className="text-xs text-zinc-400 max-w-xs mb-6 leading-relaxed">
          Transitioning to live command workspace for{" "}
          <span className="text-white font-semibold">
            {sessionContext.workspace?.name || "Anvora Capital"}
          </span>
        </p>

        {/* Countdown Ring */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-500/40 bg-zinc-950 font-mono text-2xl font-bold text-amber-400 shadow-inner">
            {countdown}
          </div>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">
            Auto Launching in Seconds
          </span>
        </div>

        {/* Immediate Override Button */}
        <Button
          onClick={handleLaunch}
          size="lg"
          className="w-full rounded-xl border border-amber-500/60 bg-gradient-to-r from-amber-500 to-yellow-500 py-6 text-sm font-bold text-zinc-950 hover:from-amber-400 hover:to-yellow-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all"
        >
          Launch HQ Now
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
