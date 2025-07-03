import * as fs from 'fs-extra';
import * as path from 'path';
import { MysticalErrorAnalyzer, RefactoringContext } from './core/mystical-error-analyzer';
import { AIInterface } from './core/ai-interface';
import { IterativeSessionManager } from './core/iterative-session-manager';
import { BespokeOracle } from './core/bespoke-oracle';
import { ScryingStone } from './core/scrying-stone';
import { AngelChimeraDetector } from './core/angel-chimera-detector';
import { AtomicOperationsLibrary } from './core/atomic-operations';
import { runSystemTests } from './cli/test-runner';
import { RefactoringAction } from './interfaces/refactoring-action.interface';
import { SessionState } from './interfaces/session-state.interface';
import { CodebaseState } from './interfaces/codebase-state.interface';
import { StateQueryOptions } from './interfaces/runestone.interface';
import { FailureAnalysis } from './interfaces/failure-analysis.interface';

export interface ErrorInfo {
  file: string;
  line: number;
  message: string;
  code: string;
}

/**
 * 🏺 AI-RUNESTONE: The Mystical Refactoring Quest System 🏺
 *
 * Transforms refactoring from reactive debugging into strategic architectural questing.
 * Leverages existing sophisticated validation tools with psychological conditioning.
 * Provides intelligent auto-classification and persistent wisdom preservation.
 */
export class AIRunestone {
  private workspaceRoot: string;
  private questStateFile: string;
  private mysticalAnalyzer: MysticalErrorAnalyzer;
  private aiInterface: AIInterface;
  private sessionManager: IterativeSessionManager;
  private oracle: BespokeOracle;
  private scryingStone: ScryingStone;
  private detector: AngelChimeraDetector;
  private atomicOperations: AtomicOperationsLibrary;

  constructor(workspaceRoot?: string) {
    this.workspaceRoot = workspaceRoot || process.cwd();
    this.questStateFile = path.join(this.workspaceRoot, '.ai-runestone', 'quest-state.json');

    // Initialize all components
    this.mysticalAnalyzer = new MysticalErrorAnalyzer(this.workspaceRoot);
    this.aiInterface = new AIInterface(this.workspaceRoot);
    this.sessionManager = new IterativeSessionManager(this.workspaceRoot);
    this.oracle = new BespokeOracle(this.workspaceRoot);
    this.scryingStone = new ScryingStone(this.workspaceRoot);
    this.detector = new AngelChimeraDetector(this.workspaceRoot);
    this.atomicOperations = new AtomicOperationsLibrary(this.workspaceRoot);
  }

  /**
   * 📊 GET CURRENT SITUATION (State-Driven: "Where am I?")
   */
  async getCurrentSituation(projectPath: string): Promise<string> {
    if (!projectPath) {
      throw new Error('Project path is required');
    }
    return await this.aiInterface.getCurrentSituation(projectPath);
  }

  /**
   * 🎯 GET NEXT ACTION (State-Driven: "What can I do?")
   */
  async getNextAction(projectPath: string): Promise<RefactoringAction | null> {
    if (!projectPath) {
      throw new Error('Project path is required');
    }
    return await this.aiInterface.getNextAction(projectPath);
  }

  /**
   * ⚡ EXECUTE AND VALIDATE ACTION (State-Driven: "Do it!")
   */
  async executeAndValidate(action: RefactoringAction): Promise<boolean> {
    return await this.aiInterface.executeAndValidate(action);
  }

  /**
   * 🔍 QUERY CODEBASE STATE (Core State Detection)
   */
  async queryState(options?: StateQueryOptions, projectPath?: string): Promise<CodebaseState> {
    if (projectPath && !projectPath) {
      throw new Error('Project path is required');
    }
    return await this.aiInterface.queryState(options);
  }

  /**
   * ✅ VALIDATE COMMANDS
   */
  async validate(commands: string[], projectPath: string): Promise<Record<string, boolean>> {
    if (!projectPath) {
      throw new Error('Project path is required');
    }
    return await this.aiInterface.validate(commands);
  }

  /**
   * 🧪 VALIDATE SYSTEM INTEGRITY
   *
   * Comprehensive system validation implementing the state-driven paradigm
   */
  async validateSystemIntegrity(): Promise<{
    success: boolean;
    score: number;
    results: Array<{ test: string; passed: boolean; details?: string }>;
  }> {
    console.log('🎯 Validating AI-Runestone system integrity...');

    const results: Array<{ test: string; passed: boolean; details?: string }> = [];
    let passed = 0;

    // Test 1: Component Initialization
    try {
      const allComponentsExist = !!(
        this.mysticalAnalyzer &&
        this.aiInterface &&
        this.sessionManager &&
        this.oracle &&
        this.scryingStone &&
        this.detector &&
        this.atomicOperations
      );

      results.push({
        test: 'Component Initialization',
        passed: allComponentsExist,
        details: allComponentsExist ? 'All components initialized' : 'Missing components'
      });

      if (allComponentsExist) passed++;
    } catch (error) {
      results.push({
        test: 'Component Initialization',
        passed: false,
        details: `Initialization failed: ${error}`
      });
    }

    // Test 2: State Detection (core paradigm)
    try {
      const state = await this.queryState();
      const hasValidState = !!(state && state.architecturalMetrics && state.refactoringReadiness);

      results.push({
        test: 'State Detection (Where am I?)',
        passed: hasValidState,
        details: hasValidState ? 'State detection working' : 'Invalid state structure'
      });

      if (hasValidState) passed++;
    } catch (error) {
      results.push({
        test: 'State Detection (Where am I?)',
        passed: false,
        details: `State detection failed: ${error}`
      });
    }

    // Test 3: Decision Making (core paradigm)
    try {
      const nextAction = await this.getNextAction(this.workspaceRoot);
      const hasValidAction = !!(nextAction && nextAction.operation && nextAction.target);

      results.push({
        test: 'Decision Making (What can I do?)',
        passed: hasValidAction,
        details: hasValidAction ? `Next action: ${nextAction?.operation}` : 'No valid action returned'
      });

      if (hasValidAction) passed++;
    } catch (error) {
      results.push({
        test: 'Decision Making (What can I do?)',
        passed: false,
        details: `Decision making failed: ${error}`
      });
    }

    // Test 4: Atomic Operations (core paradigm)
    try {
      const backupAction = {
        operation: 'create_backup' as const,
        target: 'project-root',
        priority: 1,
        preconditions: [],
        validations: ['backup_exists'],
        estimatedTime: 30,
        riskLevel: 'minimal' as const
      };

      const result = await this.atomicOperations.executeOperation(backupAction);
      const atomicWorking = result.success;

      results.push({
        test: 'Atomic Operations (Do it)',
        passed: atomicWorking,
        details: atomicWorking ? 'Atomic operations functional' : `Operation failed: ${result.error}`
      });

      if (atomicWorking) passed++;
    } catch (error) {
      results.push({
        test: 'Atomic Operations (Do it)',
        passed: false,
        details: `Atomic operations failed: ${error}`
      });
    }

    // Test 5: Session Management
    try {
      const session = await this.sessionManager.createSession(this.workspaceRoot, 'hexagonal_architecture');
      const sessionWorking = !!(session && session.id && session.progress);

      results.push({
        test: 'Session Management',
        passed: sessionWorking,
        details: sessionWorking ? 'Session management working' : 'Session creation failed'
      });

      if (sessionWorking) passed++;
    } catch (error) {
      results.push({
        test: 'Session Management',
        passed: false,
        details: `Session management failed: ${error}`
      });
    }

    // Test 6: Mystical Analysis Integration
    try {
      const mysticalResult = await this.analyzeMysticalAnomalies();
      const mysticalWorking = typeof mysticalResult === 'string' && mysticalResult.length > 0;

      results.push({
        test: 'Mystical Analysis',
        passed: mysticalWorking,
        details: mysticalWorking ? 'Mystical analysis functional' : 'Mystical analysis failed'
      });

      if (mysticalWorking) passed++;
    } catch (error) {
      results.push({
        test: 'Mystical Analysis',
        passed: false,
        details: `Mystical analysis failed: ${error}`
      });
    }

    const totalTests = results.length;
    const score = Math.round((passed / totalTests) * 100);
    const success = passed === totalTests;

    console.log(`\n🎯 System Validation Complete:`);
    console.log(`✅ Tests Passed: ${passed}/${totalTests}`);
    console.log(`📊 Score: ${score}%`);

    if (success) {
      console.log('🎉 AI-Runestone system is 100% operational!');
      console.log('🚀 Ready for state-driven refactoring quests!');
    } else {
      console.log(`⚠️ ${totalTests - passed} components need attention.`);
    }

    return { success, score, results };
  }

  /**
   * 🔮 MYSTICAL ANALYSIS - Complete quest prompt generation
   */
  async analyzeMysticalAnomalies(context?: RefactoringContext): Promise<string> {
    const result = await this.mysticalAnalyzer.analyzeMysticalAnomalies(context);
    return result.questPrompt;
  }

  // Additional methods for quest management, session handling, etc.
  // [Rest of implementation available in full source]
}