'use strict'
const {BrowserWindow} = require('electron')

const defultProps = {
    width: 500,
    height: 500,
    show: false
}

class Window extends BrowserWindow{
    constructor({file, ...windowSettings}){
        super({...defultProps, ...windowSettings})
        this.loadFile(file)
        this.webContents.openDevTools()
        this.setMenu(null);
        this.once('ready-to-show', () =>{
            this.show()
        }
        )
    }
}

module.exports = Window