import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
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
    console.log('**********************************************************');
    console.log(link);
    if (link.includes('macrocosm://callback/')) {
      const port = process.argv[2];
      await mainWindow.loadURL(`http://localhost:${port}/${link.split('macrocosm://callback/')[1]}`);
    }
    console.log('**********************************************************');
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
