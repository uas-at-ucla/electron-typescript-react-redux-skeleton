/// <reference types="vite/client" />

// Declarations for modules without their own type declarations
declare module "reselect-tools" {
  export function getStateWith(getState: () => unknown): void;
  export function registerSelectors(selectors: unknown): void;
}
