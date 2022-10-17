const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const { shell } = require('electron')
const path = require('path')

async function handleFileOpen() {
    let x = 'sal'

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
    console.log('i am invoked')
    ipcMain.handle('dialog:openFile', handleFileOpen)
    ipcMain.handle('fuckem', () => 'fuck you')

    const mainWindow = new BrowserWindow({
        webPreferences: {
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    // let folder = dialog.showOpenDialog({
    //     properties: ['openDirectory']
    // }).then(result => console.log('res', result));

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
