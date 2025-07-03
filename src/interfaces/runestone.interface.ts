import { CodebaseState } from './codebase-state.interface';
import { RefactoringAction } from './refactoring-action.interface';
import { SessionState } from './session-state.interface';

/**
 * 🏺 CORE AI-RUNESTONE INTERFACE
 * 
 * Defines the state-driven refactoring paradigm:
 * "Where am I?" → "What can I do?" → "Do it!"
 */
export interface IRunestone {
  /**
   * 🔍 WHERE AM I? - Query current architectural state
   */
  queryState(options?: StateQueryOptions): Promise<CodebaseState>;

  /**
   * 🎯 WHAT CAN I DO? - Get next recommended action
   */
  getNextAction(projectPath?: string): Promise<RefactoringAction | null>;

  /**
   * ⚡ DO IT! - Execute atomic operation with validation
   */
  executeAndValidate(action: RefactoringAction): Promise<boolean>;

  /**
   * 📊 GET CURRENT SITUATION - Human-readable status
   */
  getCurrentSituation(projectPath?: string): Promise<string>;

  /**
   * ✅ VALIDATE COMMANDS - Run validation suite
   */
  validate(commands: string[]): Promise<Record<string, boolean>>;

  /**
   * 🎮 SESSION MANAGEMENT
   */
  createSession(): Promise<SessionState>;
  getSessionState(): Promise<SessionState>;
  updateSession(updates: Partial<SessionState>): Promise<SessionState>;

  /**
   * 📍 CHECKPOINT MANAGEMENT
   */
  createCheckpoint(operation: string): Promise<void>;

  /**
   * 🔄 FAILURE RECOVERY
   */
  getFallbackStrategy(failedAction: RefactoringAction): Promise<RefactoringAction | null>;
  analyzeFailure(failedAction: RefactoringAction): Promise<FailureAnalysis>;
}

/**
 * State query options for filtering analysis
 */
export interface StateQueryOptions {
  includeMetrics?: boolean;
  includeValidation?: boolean;
  includeDependencies?: boolean;
  includeComplexity?: boolean;
  skipCache?: boolean;
}

/**
 * Failure analysis result
 */
export interface FailureAnalysis {
  reason: string;
  affectedFiles: string[];
  validationFailures: string[];
  suggestedFixes: string[];
  rollbackCompleted: boolean;
}