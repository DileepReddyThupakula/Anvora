import { useState } from "react";
import { Building2, Shield, UserCheck, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WorkspaceOption, PersonaOption } from "../types/startup";

interface ReceptionLobbyScreenProps {
  onSelectContext: (workspace: WorkspaceOption, persona: PersonaOption) => void;
}

export function ReceptionLobbyScreen({ onSelectContext }: ReceptionLobbyScreenProps) {
  const workspaces: WorkspaceOption[] = [
    {
      id: "anvora-capital",
      name: "Anvora Capital",
      organization: "Anvora Global Fund LLC",
      code: "ACAP-01",
      activeAgents: 18,
      securityLevel: "LEVEL_1_CLEARANCE",
      status: "ACTIVE",
      description: "Quantitative trading, capital allocation, and algorithmic risk management workspace.",
    },
    {
      id: "founders-hq",
      name: "Founders HQ",
      organization: "Anvora Ventures Inc",
      code: "FHQ-02",
      activeAgents: 12,
      securityLevel: "EXECUTIVE_ONLY",
      status: "ACTIVE",
      description: "Executive strategic command, corporate governance, and AI employee fleet management.",
    },
    {
      id: "global-ops",
      name: "Global Operations",
      organization: "Anvora Enterprise",
      code: "GOPS-03",
      activeAgents: 24,
      securityLevel: "ENTERPRISE",
      status: "ACTIVE",
      description: "Autonomous business operations, workflow automation, and cross-departmental analytics.",
    },
    {
      id: "private-office",
      name: "Family Office HQ",
      organization: "Anvora Holdings",
      code: "FO-04",
      activeAgents: 8,
      securityLevel: "CONFIDENTIAL",
      status: "ACTIVE",
      description: "Private wealth tracking, asset protection, and executive legacy planning.",
    },
  ];

  const personas: PersonaOption[] = [
    {
      id: "ceo",
      title: "Chief Executive Officer",
      role: "Strategic Command",
      clearance: "Full System Authority",
      description: "Macro decision-making, company-wide telemetry, and high-level agent delegation.",
    },
    {
      id: "trader",
      title: "Lead Portfolio Trader",
      role: "Capital Markets",
      clearance: "Market Execution Authority",
      description: "Real-time algorithmic trading, risk limits, and market intelligence streams.",
    },
    {
      id: "coo",
      title: "Chief Operating Officer",
      role: "Operations & Fleet",
      clearance: "Operations Command",
      description: "Departmental metrics, workflow optimization, and AI employee fleet status.",
    },
  ];

  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceOption>(workspaces[0]);
  const [selectedPersona, setSelectedPersona] = useState<PersonaOption>(personas[0]);

  const handleProceed = () => {
    onSelectContext(selectedWorkspace, selectedPersona);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#07090E] p-6 text-zinc-100 select-none overflow-x-hidden">
      {/* Background styling */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950/90 to-[#07090E]" />

      {/* Top Bar Header */}
      <header className="relative z-10 flex max-w-6xl w-full mx-auto items-center justify-between border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-zinc-900/80 text-amber-400">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Reception Lobby
            </h1>
            <p className="text-xs text-zinc-400">
              Select your target workspace and executive persona session context
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
          <Shield className="h-3.5 w-3.5 text-amber-400" />
          <span>AUTHENTICATED AS: DEEPU REDDY</span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="relative z-10 max-w-6xl w-full mx-auto py-8 space-y-8 flex-1">
        {/* Section 1: Workspace Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                1. Organization Workspace
              </h2>
              <p className="text-xs text-zinc-400">
                Select the enterprise environment to initialize for this command session
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              {workspaces.length} WORKSPACES AVAILABLE
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workspaces.map((ws) => {
              const isSelected = selectedWorkspace.id === ws.id;
              return (
                <div
                  key={ws.id}
                  onClick={() => setSelectedWorkspace(ws)}
                  className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 backdrop-blur-md ${
                    isSelected
                      ? "border-amber-500/60 bg-gradient-to-b from-amber-500/10 via-zinc-900/90 to-zinc-950 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                      : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700/80 hover:bg-zinc-900/80"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-zinc-950">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}

                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">
                    {ws.code}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {ws.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {ws.description}
                  </p>

                  <div className="mt-4 border-t border-zinc-800/80 pt-3 flex items-center justify-between text-[11px] text-zinc-500">
                    <span>{ws.activeAgents} Agents Active</span>
                    <span className="font-mono text-zinc-400">{ws.securityLevel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Persona Selector */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                2. Executive Persona Context
              </h2>
              <p className="text-xs text-zinc-400">
                Select your active authority role for tailored briefing summaries and quick actions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {personas.map((persona) => {
              const isSelected = selectedPersona.id === persona.id;
              return (
                <div
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all backdrop-blur-md flex items-start gap-3.5 ${
                    isSelected
                      ? "border-amber-500/60 bg-amber-500/10 text-white shadow-lg"
                      : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/70"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isSelected
                        ? "border-amber-400 bg-amber-500/20 text-amber-400"
                        : "border-zinc-800 bg-zinc-900 text-zinc-500"
                    }`}
                  >
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{persona.title}</h4>
                    <p className="text-xs text-amber-400 font-mono mt-0.5">
                      {persona.role} • {persona.clearance}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{persona.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Action Callout & Confirmation */}
        <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-md">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
              Selected Configuration
            </span>
            <h3 className="text-base font-bold text-white mt-0.5">
              {selectedWorkspace.name} &mdash;{" "}
              <span className="text-amber-400">{selectedPersona.title}</span>
            </h3>
          </div>

          <Button
            onClick={handleProceed}
            size="lg"
            className="rounded-xl border border-amber-500/50 bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-6 text-sm font-semibold text-zinc-950 hover:from-amber-400 hover:to-yellow-400 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all"
          >
            Proceed to Executive Briefing
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto border-t border-zinc-900 pt-4 text-xs text-zinc-500 flex justify-between">
        <span>SECURITY PROTOCOL: OKTA / ENCLAVE AUTH</span>
        <span>Step 3 of 5</span>
      </footer>
    </div>
  );
}
