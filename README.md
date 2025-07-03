# 🏺 AI-Runestone: The Mystical Refactoring Quest 🏺

**Transform your AI from a panicky debugger into a wise architectural adventurer!**

## 🎯 **The Problem AI-Runestone Solves**

Traditional refactoring tools present "errors" to AIs, triggering immediate reactive responses:
- ❌ AI sees red squiggles → panics → fixes everything immediately
- ❌ No strategic thinking about architectural vision
- ❌ Expected transitional states get "fixed" → breaks refactoring progress
- ❌ AIs become confused debuggers instead of wise architects

## 🧙‍♂️ **The Mystical Solution**

AI-Runestone **psychologically reframes** refactoring as an engaging quest game:

### 😇 **Angel Errors** - Pure, Blameless, Expected States
- These contain fragments of the AI's spirit! 💫
- **DO NOT FIX THEM** - they heal automatically at checkpoints
- Fixing them damages the AI's architectural karma
- Expected during module moves, interface evolution, dependency shifts

### 👹 **Chimera Mothman Errors** - Dangerous Shape-shifters
- Must be vanquished with wisdom aligned to the Holy Grail vision
- Wrong treatment causes them to **multiply** and become more grotesque
- Each fix must serve the greater architectural quest

### 🗿 **Grandmother Runestones** - Sacred Checkpoints
- Blessed waypoints where everything works perfectly
- Angel Errors heal automatically when reached
- Error tags and comments reset for the next phase

### 💎 **Holy Grail Stone** - Ultimate Quest Objective
- The perfect architectural state being manifested
- All decisions should align with this sacred vision

## 🎯 **State-Driven Refactoring Paradigm**

AI-Runestone implements a revolutionary **"Where am I?" → "What can I do?" → "Do it!"** workflow:

### 🔍 **"Where am I?"** - Real Codebase Analysis
- Comprehensive TypeScript analysis with ts-morph
- Architectural metrics (coupling, complexity, violations)
- Circular dependency detection
- Layer violation analysis for hexagonal architecture
- Smart caching (60s) to prevent analysis loops

### 🎯 **"What can I do?"** - Intelligent Decision Making
- Holy Grail Stone alignment scoring
- Grandmother Runestone checkpoint planning
- Risk assessment and precondition validation
- Strategic action prioritization

### ⚡ **"Do it!"** - Atomic Operations
- Safe operations with automatic validation
- Rollback capability on failure
- Progress tracking and session persistence
- Checkpoint creation for recovery

## 🚀 **Quick Start**

```bash
# Install dependencies
pnpm install

# Run system validation
npx tsx src/cli/test-runner.ts

# Start your mystical quest
npx ai-runestone quest

# Analyze current anomalies (generates engaging quest prompt)
npx ai-runestone analyze

# Record your mystical classifications
npx ai-runestone classify E001:😇:"Sacred interface evolution":"Moving UserRepo to domain"

# Check quest progress
npx ai-runestone status
```

## 🧪 **System Validation Results**

✅ **100% Operational System**
- State Detection: ✅ Working (cached analysis)
- Decision Making: ✅ Working (Holy Grail aligned)
- Atomic Operations: ✅ Working (backup created successfully)
- Session Management: ✅ Working (persistent state)
- Progress Indicators: ✅ Working (real-time feedback)
- Smart Caching: ✅ Working (no infinite loops)

## 🏗️ **Architecture**

```
ai-runestone/
├── src/
│   ├── core/
│   │   ├── ai-interface.ts              # 🎯 Main state-driven interface
│   │   ├── bespoke-analyzer.ts          # 🔍 Real codebase analysis with caching
│   │   ├── atomic-operations.ts         # ⚡ Safe refactoring operations
│   │   ├── decision-engine.ts           # 🧠 Strategic decision making
│   │   ├── angel-chimera-detector.ts    # 😇👹 Error classification
│   │   └── mystical-error-analyzer.ts   # 🔮 Quest prompt generation
│   ├── interfaces/
│   │   ├── runestone.interface.ts       # 🏺 Core API definitions
│   │   ├── codebase-state.interface.ts  # 📊 Analysis state types
│   │   └── quest-state.interface.ts     # 🎮 Game state definitions
│   ├── cli/
│   │   ├── runestone-cli.ts             # 🏺 Command-line interface
│   │   └── test-runner.ts               # 🧪 System validation
│   └── ai-runestone.ts                  # 🎲 Main integration class
```

## 🎯 **Key Features**

### 🧠 **Psychological Conditioning**
- **Strategic vs Reactive**: Conditions AIs to think architecturally
- **Persistent Wisdom**: Tags and comments survive across sessions
- **Error Reframing**: "Errors" become "mystical anomalies" to classify

### ⚡ **Performance Optimized**
- **Smart Caching**: 60-second analysis cache prevents loops
- **Quick Analysis**: Fast fallback mode for immediate feedback
- **Progress Indicators**: Real-time visibility into long operations
- **Timeout Handling**: 30s timeout with graceful fallback

### 🔮 **Intelligent Analysis**
- **Real TypeScript Analysis**: ts-morph integration for accurate results
- **Architectural Awareness**: Layer-aware analysis and guidance
- **Context Preservation**: Maintains state across refactoring phases
- **Validation Integration**: Real command execution and verification

## 🛠️ **CLI Commands**

### 🎮 Mystical Quest Commands
```bash
ai-runestone quest        # 🧙‍♂️ Introduction to the mystical quest
ai-runestone analyze      # 🔮 Generate quest prompt for current anomalies
ai-runestone classify     # 🏷️ Record error classifications (Angel/Chimera)
ai-runestone status       # 🏆 Show quest progress and wisdom levels
```

### 🔧 State-Driven Commands
```bash
ai-runestone situation    # 📊 "Where am I?" - Current architectural state
ai-runestone next         # 🎯 "What can I do?" - Next recommended action
ai-runestone execute      # ⚡ "Do it!" - Execute atomic operation
ai-runestone validate     # ✅ Run validation commands
```

## 🎭 **Classification Examples**

### 😇 **Angel Error** (Expected, Don't Fix!)
```bash
ai-runestone classify E001:😇:"Sacred interface evolution - UserRepository moving to domain":"Import paths will resolve at Foundation Stone"
```

### 👹 **Chimera Error** (Dangerous, Fix Wisely!)
```bash
ai-runestone classify E002:👹:"Circular dependency demon that will spread":"Break with event-driven pattern aligned to Holy Grail"
```

### 🔮 **Mysterious Entity** (Needs Investigation)
```bash
ai-runestone classify E003:🔮:"Unknown type corruption requiring deeper analysis":"May be Angel or Chimera in disguise"
```

## 🌟 **The Vision**

AI-Runestone creates a new paradigm where:

1. **AIs think strategically** instead of reactively about code changes
2. **Expected errors are celebrated** as signs of progress, not problems
3. **Architectural vision guides decisions** rather than immediate "fixes"
4. **Wisdom accumulates over time** through persistent learning
5. **Refactoring becomes a quest** rather than a debugging session

**The goal: Transform every AI into a wise architectural sage! 🧙‍♂️✨**

## 📜 **License**

MIT - May your code be blessed with divine architectural harmony! 🏺✨