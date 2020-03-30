const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");
    const { ipcMain } = require('electron')
    let mainWindow



   
    

  

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 1200,
        minWidth:800,
        height: 600,
        minHeight:600,
        webPreferences: {
          nodeIntegration: true
        },
        frame: false
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/coordinadores-app/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })

      ipcMain.on('minimizar', (event, arg) => {
        mainWindow.minimize()
      })
      ipcMain.on('maximizar', (event, arg) => {
        if(mainWindow.isMaximized()){
          mainWindow.restore()
          
        }else{
          mainWindow.maximize()
          event.reply('maximizado','true')
        }
        
      })
      ipcMain.on('cerrar', (event, arg) => {
        mainWindow.close()
        
      })

      
    }



    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })