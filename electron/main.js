const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.resolve(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
    
}

// create window
app.on("ready", createWindow);

// close window
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})