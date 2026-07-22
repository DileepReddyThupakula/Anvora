import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LaunchScreen } from "../components/LaunchScreen";
import { InitializationScreen } from "../components/InitializationScreen";
import { ReceptionLobbyScreen } from "../components/ReceptionLobbyScreen";
import { ExecutiveBriefingScreen } from "../components/ExecutiveBriefingScreen";
import { EnterHeadquartersScreen } from "../components/EnterHeadquartersScreen";
import type { BootStage, SessionContext, WorkspaceOption, PersonaOption } from "../types/startup";

export function StartupFlowPage() {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState<BootStage>("LAUNCH");

  const [sessionContext, setSessionContext] = useState<SessionContext>({
    workspace: null,
    persona: null,
  });

  const handleLaunchComplete = () => {
    setCurrentStage("INITIALIZATION");
  };

  const handleInitializationComplete = () => {
    setCurrentStage("RECEPTION_LOBBY");
  };

  const handleSelectLobbyContext = (workspace: WorkspaceOption, persona: PersonaOption) => {
    setSessionContext({ workspace, persona });
    setCurrentStage("EXECUTIVE_BRIEFING");
  };

  const handleBriefingComplete = () => {
    setCurrentStage("ENTER_HEADQUARTERS");
  };

  const handleEnterHQComplete = () => {
    // Stage 6: Terminal navigation into live Dashboard
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-[#07090E]">
      {currentStage === "LAUNCH" && (
        <LaunchScreen onComplete={handleLaunchComplete} />
      )}

      {currentStage === "INITIALIZATION" && (
        <InitializationScreen onComplete={handleInitializationComplete} />
      )}

      {currentStage === "RECEPTION_LOBBY" && (
        <ReceptionLobbyScreen onSelectContext={handleSelectLobbyContext} />
      )}

      {currentStage === "EXECUTIVE_BRIEFING" && (
        <ExecutiveBriefingScreen
          sessionContext={sessionContext}
          onComplete={handleBriefingComplete}
        />
      )}

      {currentStage === "ENTER_HEADQUARTERS" && (
        <EnterHeadquartersScreen
          sessionContext={sessionContext}
          onComplete={handleEnterHQComplete}
        />
      )}
    </div>
  );
}

export default StartupFlowPage;
