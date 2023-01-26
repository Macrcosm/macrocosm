import {ipcRenderer} from "electron";

export const setupMainEventHandlersOnce = (eventname, callback) => {
    if (!ipcRenderer.listeners(eventname).length) {
        ipcRenderer.once(eventname, callback);
    }
}
export const setupMainEventHandlers = (eventname, callback) => {
    if (!ipcRenderer.listeners(eventname).length) {
        ipcRenderer.on(eventname, callback);
    }
}
export const removeAllListeners = (eventname) => {
    ipcRenderer.removeAllListeners(eventname)
}