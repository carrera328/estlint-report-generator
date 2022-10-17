const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const { shell } = require('electron')
const path = require('path')

async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog({
        properties: ['openDirectory'],
    })
    if (canceled) {
        throw new Error('fuck mane')
    } else {
        return filePaths[0]
    }
}

app.on('ready', () => {
    ipcMain.handle('dialog:openFile', handleFileOpen)

    const mainWindow = new BrowserWindow({
        webPreferences: {
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    mainWindow.loadFile(path.join(__dirname, 'public/index.html'))
    mainWindow.webContents.openDevTools()
    shell.beep()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

try {
    require('electron-reloader')(module)
} catch (_) {
    console.log('reload')
}
