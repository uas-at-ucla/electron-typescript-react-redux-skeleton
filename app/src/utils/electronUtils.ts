import type pathImport from "path";
import type fsImport from "fs";

export const path = window.require
  ? (window.require("path") as typeof pathImport)
  : undefined;
export const fs = window.require
  ? (window.require("fs") as typeof fsImport)
  : undefined;

const appPath = window.process ? window.process.argv.slice(-2)[0] : undefined; // Passed from additionalArguments in electron.ts
export const userDataPath = window.process
  ? window.process.argv.slice(-1)[0]
  : undefined;
// The userData directory is the appData directory appended with the app name, where appData is:
//   - %APPDATA% on Windows
//   - $XDG_CONFIG_HOME or ~/.config on Linux
//   - ~/Library/Application Support on macOS

export function relativePath(p: string) {
  return path && appPath ? path.join(appPath, p) : undefined;
}
