'use strict'
const {app} = require('electron')
const Window = require('./pages/js/Window')

function main () {

  let mainWindow = new Window({
    file : './pages/html/index.html'
  })
}

app.on('ready', main)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})