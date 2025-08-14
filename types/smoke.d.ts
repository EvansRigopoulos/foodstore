declare module "@bijection/smoke" {
  interface SmokeMachine {
    start(): void;
    stop(): void;
    addSmoke(x: number, y: number, amount?: number): void;
  }

  function SmokeMachine(
    ctx: CanvasRenderingContext2D,
    color?: number[]
  ): SmokeMachine;
  export default SmokeMachine;
}

declare module "@bijection/smoke/smoke.js" {
  interface SmokeMachine {
    start(): void;
    stop(): void;
    addSmoke(x: number, y: number, amount?: number): void;
  }

  function SmokeMachine(
    ctx: CanvasRenderingContext2D,
    color?: number[]
  ): SmokeMachine;
  export default SmokeMachine;
}
