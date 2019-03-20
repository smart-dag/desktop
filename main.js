const { app, BrowserWindow } = require('electron')

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({ width: 1200, height: 800 })

    // 然后加载 app 的 index.html.
    win.setMenu(null);
    win.setAutoHideMenuBar(true);
    win.setMenuBarVisibility(false);
    win.loadFile('./index.html');
    //win.webContents.openDevTools();
}

app.on('ready', createWindow);
// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})
