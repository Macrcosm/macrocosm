import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import {spawn} from "child_process";
import path from "path";
import {PythonShell} from "python-shell";
const { Deeplink } = require('electron-deeplink');

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });
  const deeplink = new Deeplink({ app, mainWindow, protocol: 'macrocosm', isDev: !isProd });
  deeplink.on('received', async (link) => {
    if (link.includes('macrocosm://callback/')) {
      const port = process.argv[2];
      await mainWindow.loadURL(`http://localhost:${port}/${link.split('macrocosm://callback/')[1]}`);
    }
  });
  let pyshell = new PythonShell(path.join(app.getAppPath(), 'python_scripts/api.py'));
  pyshell.on('message', function(message) {
    console.log('************************************');
    console.log(message);
    console.log('************************************');
  });
  pyshell.on('stderr', function(message) {
    console.log('------------------------------------');
    console.log(message);
    console.log('------------------------------------');
  });

  pyshell.end(function (err) {
    if (err){
      throw err;
    }
    console.log('finished');
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
