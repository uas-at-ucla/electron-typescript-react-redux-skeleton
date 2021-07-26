import { app, BrowserWindow, Menu, MenuItem } from "electron";
import path from "path";
import isDev from "electron-is-dev";
import type * as electronDevtoolsInstaller from "electron-devtools-installer";
import contextMenu from "electron-context-menu";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null;

function createWindow() {
  // Install helpful Chrome Extensions for debugging
  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require("electron-devtools-installer") as typeof electronDevtoolsInstaller;

    const RESELECT_DEVTOOLS = "cjmaipngmabglflfeepmdiffcijhjlbb"; // Chrome store ID

    [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS, RESELECT_DEVTOOLS].forEach(
      (extension) => {
        installExtension(extension)
          .then((name: string) => console.log(`Added Extension: ${name}`))
          .catch((err: string) => console.log("An error occurred: ", err));
      }
    );
  }

  contextMenu(); // Create right-click menu, including Inspect Element in development mode

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      // Warning: These settings create a security vulnerability if the app loads remote content (See https://www.electronjs.org/docs/tutorial/security#checklist-security-recommendations)
      nodeIntegration: true, // Expose Node.js require() as window.require() in web app
      contextIsolation: false, // Also needed to get access to window.require()
      enableRemoteModule: true, // Get access to the Electron remote module via window.require("electron").remote
      // webSecurity: false, // This would allow embedding content from the filesystem and other sources, but is insecure. More info: https://www.electronjs.org/docs/tutorial/security#5-do-not-disable-websecurity
    },
  });

  // and load the url of the app.
  void mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Allow viewing devtools, copying, pasting, etc. in packaged app. This can be customized later.
  if (!isDev) {
    const template = [
      new MenuItem({
        label: "Application",
        submenu: menuRoles.map((role) => {
          return { role: role };
        }),
      }),
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  app.quit();
});

// All available menu roles
const menuRoles = [
  "toggleDevTools",
  "undo",
  "redo",
  "cut",
  "copy",
  "paste",
  "pasteAndMatchStyle",
  "delete",
  "selectAll",
  "reload",
  "forceReload",
  "resetZoom",
  "zoomIn",
  "zoomOut",
  "togglefullscreen",
  "window",
  "minimize",
  "close",
  "help",
  "about",
  "services",
  "hide",
  "hideOthers",
  "unhide",
  "quit",
  "startSpeaking",
  "stopSpeaking",
  "zoom",
  "front",
  "appMenu",
  "fileMenu",
  "editMenu",
  "viewMenu",
  "shareMenu",
  "recentDocuments",
  "toggleTabBar",
  "selectNextTab",
  "selectPreviousTab",
  "mergeAllWindows",
  "clearRecentDocuments",
  "moveTabToNewWindow",
  "windowMenu",
] as const;
