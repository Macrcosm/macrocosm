import {app, dialog, ipcMain} from 'electron';
import serve from 'electron-serve';
import {createWindow} from './helpers';
import {exec, execFile} from "child_process";
import path from "path";
import * as fs from "fs-extra";
import {v4 as uuidv4} from 'uuid';

const {Deeplink} = require('electron-deeplink');

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
    serve({directory: 'app'});
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
    await app.whenReady();

    const mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
    });
    const deeplink = new Deeplink({app, mainWindow, protocol: 'macrocosm', isDev: !isProd});
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
ipcMain.on('create-project', async (evt, args) => {
    const data = await dialog.showOpenDialog({
        properties: ['openDirectory'],
        title: 'Choose Folder',
    });
    const selections = data.filePaths;
    if (selections.length) {
        const userDataPath = app.getPath('userData');
        const myProjectsPath = userDataPath + "/myProjects.json";
        const fileExists = fs.existsSync(myProjectsPath);
        const id = uuidv4();
        const file = await writeFile(selections[0], "Untitled.build", {id, images: []});
        if (!fileExists) {
            fs.writeFileSync(myProjectsPath, JSON.stringify({
                projects: [{
                    id,
                    path: file.path,
                    name: file.filename
                }]
            }));
        } else {
            const fileContent = fs.readFileSync(myProjectsPath).toString();
            const parsedProjects = JSON.parse(fileContent);
            parsedProjects.projects.push({id, path: file.path, name: file.filename});
            fs.writeFileSync(myProjectsPath, JSON.stringify(parsedProjects));
        }
    }
    getProjects(evt);
});
function getNewFileName(fileName){
    const [name, ext] = fileName.split('.');
    const nameParts = name.split('_');
    let suffixNumber: number;
    if(nameParts.length > 1){
        const n = Number(nameParts.pop());
        suffixNumber = n+1;
        fileName = nameParts.pop()+'_'+suffixNumber;
    }
    else{
        suffixNumber = 1;
        fileName = nameParts.pop()+'_'+suffixNumber;
    }
    return fileName + "." + ext;
}

const writeFile = async (selectedPath, filename, data, increment = 0) => {
    let fileNameFinal = filename;
    while (fs.existsSync(path.join(selectedPath, fileNameFinal))) {
        fileNameFinal = getNewFileName(fileNameFinal);
    }
    await fs.promises.writeFile(path.join(selectedPath, fileNameFinal), JSON.stringify({...data, name: fileNameFinal}), {encoding: 'utf8', flag: 'wx'});
    return {path: path.join(selectedPath, fileNameFinal), filename: fileNameFinal};
}
ipcMain.on('get-projects', (evt, data) => {
    getProjects(evt);
});
const getProjects = (evt) => {
    const userDataPath = app.getPath('userData');
    const myProjectsPath = userDataPath + "/myProjects.json";
    const fileExists = fs.existsSync(myProjectsPath);
    if (fileExists) {
        const fileContent = fs.readFileSync(myProjectsPath).toString();
        const parsedProjects = JSON.parse(fileContent);
        const finalProjects = [];
        for (let project of parsedProjects.projects) {
            const projectExists = fs.existsSync(project.path);
            if (projectExists) {
                const projectContent = fs.readFileSync(project.path).toString();
                const parsedProjectContent = JSON.parse(projectContent);
                finalProjects.push({id: parsedProjectContent.id, src: parsedProjectContent.images.pop(), name: parsedProjectContent.name})
            }
        }
        evt.sender.send('get-projects', {projects: finalProjects});
    }
}
ipcMain.on('delete-project', (evt, data) => {
    //delete project
});
ipcMain.on('add-images-to-project', (evt, data) => {
    const userDataPath = app.getPath('userData');
    const myProjectsPath = userDataPath + "/myProjects.json";
    const fileContent = fs.readFileSync(myProjectsPath).toString();
    const parsedProjects = JSON.parse(fileContent);
    const project = parsedProjects.projects.find(p => p.id === data.id);
    const projectContent = fs.readFileSync(project.path).toString();
    const parsedProject = JSON.parse(projectContent);
    parsedProject.images = data.images;
    fs.writeFileSync(project.path, JSON.stringify(parsedProject));
    //add images to project
});
ipcMain.on('get-project-images', (evt, data) => {
    console.log(data);
    const userDataPath = app.getPath('userData');
    const myProjectsPath = userDataPath + "/myProjects.json";
    const fileContent = fs.readFileSync(myProjectsPath).toString();
    const parsedProjects = JSON.parse(fileContent);
    const project = parsedProjects.projects.find(p => p.id === data.id);
    const projectContent = fs.readFileSync(project.path).toString();
    const parsedProject = JSON.parse(projectContent);
    console.log(parsedProject);
    evt.sender.send('get-project-images', {project: parsedProject});
});
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
