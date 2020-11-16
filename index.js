const electron = require('electron');
const {BrowserWindow,app ,ipcMain, remote ,protocol,session} = require('electron');
const { webviewTag } = require('electron/renderer');
const fs = require('fs');

function createWinodw(){
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    win.loadFile("daliy_work_parser.html");
    win.setMenu(null);
}
app.whenReady().then(createWinodw);
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});