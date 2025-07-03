#!/usr/bin/env tsx

import { AIRunestone } from '../ai-runestone';
import * as chalk from 'chalk';

console.clear();
console.log(chalk.bold.cyan(`
🏔️  AI-RUNESTONE SYSTEM VALIDATOR 🏔️
===================================
`));

async function validateSystem() {
  const workspaceRoot = process.cwd();

  console.log(chalk.yellow('📍 Workspace:'), workspaceRoot);
  console.log(chalk.yellow('🎯 Validating AI-Runestone System...\n'));

  const totalStartTime = Date.now();

  try {
    // Test 1: System Initialization
    console.log(chalk.bold('1️⃣  System Initialization'));
    const runestone = new AIRunestone(workspaceRoot);
    console.log(chalk.green('   ✓ AI-Runestone initialized\n'));

    // Test 2: State Detection
    console.log(chalk.bold('2️⃣  Architectural State Detection'));
    console.log(chalk.gray('   🔍 Analyzing codebase architecture...'));
    console.log(chalk.gray('   ⏳ This may take 30-60 seconds for large codebases...'));

    const stateStartTime = Date.now();
    const state = await runestone.queryState(undefined, workspaceRoot);
    const stateTime = ((Date.now() - stateStartTime) / 1000).toFixed(1);

    console.log(chalk.green(`   ✓ State detected successfully (${stateTime}s)`));
    console.log(chalk.gray(`   - Circular Dependencies: ${state.architecturalMetrics.circularDependencies}`));
    console.log(chalk.gray(`   - Layer Violations: ${state.architecturalMetrics.encapsulationViolations}`));
    console.log(chalk.gray(`   - Coupling Score: ${state.architecturalMetrics.couplingScore}/10`));
    console.log(chalk.gray(`   - God Files: ${state.architecturalMetrics.godFilesCount}\n`));

    // Test 3: Decision Making
    console.log(chalk.bold('3️⃣  Decision Making (Next Action)'));
    console.log(chalk.gray('   🧠 Processing state and determining optimal action...'));

    const decisionStartTime = Date.now();
    const nextAction = await runestone.getNextAction(workspaceRoot);
    const decisionTime = ((Date.now() - decisionStartTime) / 1000).toFixed(1);

    console.log(chalk.green(`   ✓ Decision engine working (${decisionTime}s)`));
    if (nextAction) {
      console.log(chalk.gray(`   - Next recommended: ${nextAction.operation} on ${nextAction.target}\n`));
    } else {
      console.log(chalk.gray('   - No actions needed (optimal state)\n'));
    }

    // Test 4: System Integrity
    console.log(chalk.bold('4️⃣  System Integrity Check'));
    console.log(chalk.gray('   🔧 Running comprehensive system validation...'));
    console.log(chalk.gray('   📋 Testing all 6 core components...'));

    const integrityStartTime = Date.now();
    const integrity = await runestone.validateSystemIntegrity();
    const integrityTime = ((Date.now() - integrityStartTime) / 1000).toFixed(1);

    console.log(chalk.green(`   ✓ Integrity check complete (${integrityTime}s)`));
    console.log(chalk.gray(`   - Success Rate: ${integrity.score}%`));
    console.log(chalk.gray(`   - Tests Passed: ${integrity.results.filter(r => r.passed).length}/${integrity.results.length}`));

    // Summary
    const totalTime = ((Date.now() - totalStartTime) / 1000).toFixed(1);

    if (integrity.success) {
      console.log(chalk.bold.green(`
✨ VALIDATION COMPLETE! ✨
========================
The AI-Runestone system is 💯% operational!

🎯 All Components Working:
  ✓ State-driven paradigm ("Where am I?" → "What can I do?" → "Do it!")
  ✓ Codebase analysis (with smart caching)
  ✓ Decision making (Holy Grail aligned)
  ✓ Atomic operations (with rollback)
  ✓ Session management (persistent state)
  ✓ Progress indicators (real-time feedback)

⏱️  Total validation time: ${totalTime}s
🚀 Ready for production use!
`));
    } else {
      console.log(chalk.bold.yellow(`\n⚠️  System Score: ${integrity.score}% - Some components need attention`));
      console.log(chalk.gray(`⏱️  Total validation time: ${totalTime}s`));

      // Show failing tests
      const failedTests = integrity.results.filter(r => !r.passed);
      if (failedTests.length > 0) {
        console.log(chalk.red('\n❌ Failed Tests:'));
        failedTests.forEach(test => {
          console.log(chalk.gray(`   - ${test.test}: ${test.details || 'Failed'}`));
        });
      }
    }

  } catch (error: any) {
    console.error(chalk.red('\n❌ Validation failed:'), error.message);
    console.error(chalk.gray(error.stack));
    process.exit(1);
  }
}

// Run validation
validateSystem().catch(console.error);