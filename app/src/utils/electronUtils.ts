import type pathImport from "path";
import type fsImport from "fs";

const electron = window.require ? window.require("electron") : undefined;
export const path = window.require
  ? (window.require("path") as typeof pathImport)
  : undefined;
export const fs = window.require
  ? (window.require("fs") as typeof fsImport)
  : undefined;

const app = electron ? electron.app : undefined;
const appPath = app ? app.getAppPath() : undefined;

export const userDataPath = app ? app.getPath("userData") : undefined;
// The userData directory is the appData directory appended with the app name, where appData is:
//   - %APPDATA% on Windows
//   - $XDG_CONFIG_HOME or ~/.config on Linux
//   - ~/Library/Application Support on macOS

export function relativePath(p: string) {
  return path && appPath ? path.join(appPath, p) : undefined;
}
