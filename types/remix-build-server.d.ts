// Ambient declaration to satisfy TypeScript during pre-commit typecheck
declare module '../build/server' {
  const build: unknown;
  export default build;
}

