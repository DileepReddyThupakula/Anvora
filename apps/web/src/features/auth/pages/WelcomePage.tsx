import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/70 p-12 text-center shadow-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-zinc-500">
          ANVORA AI
        </p>

        <h1 className="mb-4 text-5xl font-bold text-white">
          Welcome back, Deepu.
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
          Your executive briefing is ready.
          <br />
          Your AI company is waiting for your instructions.
        </p>

        <Button size="lg" className="rounded-xl px-10 py-6 text-base">
          Enter Headquarters
        </Button>
      </div>
    </main>
  );
}