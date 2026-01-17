# /fix: Debug, Compile & Error Handling

Fix issues efficiently. Start with the simplest explanations first.

## 1. Debug (Minimal Fix)
- Validate if the bug is worth fixing (cost vs impact).
- Test assumptions one by one: check nulls, typos, and variable names.
- Use console.log for key variables; only use debugger for complex logic (>3 files).

## 2. Compilation (Get it Running)
- Fix syntax, missing imports, and type mismatches immediately.
- Stop at complex architectural issues—those need design changes, not quick fixes.

## 3. Error Handling (Practicality)
- Handle obvious errors that actually occur; wrap external calls (network, I/O) in try-catch.
- Prioritize clear messages for users over complex internal logging.
- Prefer crashing fast over complex recovery when appropriate.