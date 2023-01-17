import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import {exec, execFile} from "child_process";
import path from "path";
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
  // execFile(
  //     path.join(app.getAppPath(), 'win-api/api.exe'),
  //     {
  //       windowsHide: true,
  //     },
  //     (err, stdout, stderr) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       if (stdout) {
  //         console.log(stdout);
  //       }
  //       if (stderr) {
  //         console.log(stderr);
  //       }
  //     }
  // )

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
  exec(`taskkill /f /t /im app.exe`, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
