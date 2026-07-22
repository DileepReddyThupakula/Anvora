export type BootStage =
  | 'LAUNCH'
  | 'INITIALIZATION'
  | 'RECEPTION_LOBBY'
  | 'EXECUTIVE_BRIEFING'
  | 'ENTER_HEADQUARTERS'
  | 'DASHBOARD';

export type SubsystemStatus = 'PENDING' | 'INITIALIZING' | 'OPERATIONAL' | 'DEGRADED';

export interface SubsystemHealth {
  id: string;
  name: string;
  category: string;
  status: SubsystemStatus;
  latencyMs: number;
  details: string;
}

export interface WorkspaceOption {
  id: string;
  name: string;
  organization: string;
  code: string;
  activeAgents: number;
  securityLevel: string;
  status: 'ACTIVE' | 'ARCHIVED';
  description: string;
}

export interface PersonaOption {
  id: string;
  title: string;
  role: string;
  clearance: string;
  description: string;
}

export type BriefingPriority = 'CRITICAL' | 'ACTION_REQUIRED' | 'INFORMATIONAL';

export interface BriefingItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  priority: BriefingPriority;
  timestamp: string;
  actionAvailable?: string;
  triaged?: boolean;
}

export interface SessionContext {
  workspace: WorkspaceOption | null;
  persona: PersonaOption | null;
  bootCompletedAt?: string;
}
