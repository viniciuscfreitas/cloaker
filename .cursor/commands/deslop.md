# /deslop: Refactor, Optimize & Deslop

Apply the simplicity filter to existing code. Prioritize maintainability over cleverness.

## 1. Deslop (Locality of Behavior Focus)
- Check diffs and strip AI-generated redundant comments or defensive fluff.
- **Aggressive LoB**: If a utility function or component is used in only one place, move it inside that specific file and delete the original source/utility file.
- Remove unnecessary type casts or "clever" abstractions that don't solve a proven problem.

## 2. Refactor (The 2x Value Rule)
- Only refactor if code is hard to understand (>3 files to track logic).
- Only extract functions/classes if it reduces cognitive load by at least 50%.
- Apply Chesterton’s Fence: Understand why code is there before changing it.

## 3. Optimize (Only if Measured)
- Don't optimize unless you have real performance data.
- Fix algorithmic inefficiencies (O(n²) -> O(n)) before micro-optimizing.
- Stop when performance is "good enough".

**Report**: 1-2 sentence summary of what was simplified or deleted.