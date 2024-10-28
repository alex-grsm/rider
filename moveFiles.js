const fs = require('fs');
const path = require('path');

// Создание директорий, если их нет, с поддержкой вложенных папок
const createDirIfNotExist = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Функция для удаления хэша из имени файла
const removeHashFromFileName = (fileName) => {
    return fileName.replace(/\.[a-f0-9]{8,}\./, '.');
}

// Перемещение файла с изменением имени
const moveFile = (file, destination) => {
    const fileName = path.basename(file);
    const newFileName = removeHashFromFileName(fileName);
    const destPath = path.join(destination, newFileName);

    fs.rename(file, destPath, (err) => {
        if (err) throw err;
        console.log(`Файл ${file} перемещен в ${destPath}`);
    });

    return newFileName;
}

// Функция для поиска файлов с определённым расширением
const findFilesByExtensions = (dir, extensions) => {
    const files = fs.readdirSync(dir);
    return files.filter(file => extensions.some(ext => file.endsWith(ext)));
}

// Папки назначения
createDirIfNotExist('./dist/js');
createDirIfNotExist('./dist/css');
createDirIfNotExist('./dist/assets/fonts');
createDirIfNotExist('./dist/assets/images');

// Поиск и перемещение JS и CSS файлов
const jsFile = findFilesByExtensions('./dist', ['.js'])[0];
const cssFile = findFilesByExtensions('./dist', ['.css'])[0];
let movedJsFile, movedCssFile;

if (jsFile) {
    movedJsFile = moveFile(`./dist/${jsFile}`, './dist/js');
} else {
    console.log('index.js файл не найден.');
}

if (cssFile) {
    movedCssFile = moveFile(`./dist/${cssFile}`, './dist/css');
} else {
    console.log('index.css файл не найден.');
}

// Поиск и перемещение шрифтов
const fontFiles = findFilesByExtensions('./dist', ['.woff2', '.woff', '.ttf', '.otf']);
fontFiles.forEach(fontFile => {
    moveFile(`./dist/${fontFile}`, './dist/assets/fonts');
});

// Поиск и перемещение изображений
const imageFiles = findFilesByExtensions('./dist', ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
imageFiles.forEach(imageFile => {
    moveFile(`./dist/${imageFile}`, './dist/assets/images');
});

// Функция для обновления путей в CSS файле
const updateCssPaths = () => {
    const cssFilePath = './dist/css/' + movedCssFile;
    let cssContent = fs.readFileSync(cssFilePath, 'utf8');

    // Обновляем пути для шрифтов в CSS
    fontFiles.forEach(fontFile => {
        const cleanFontFile = removeHashFromFileName(fontFile);
        cssContent = cssContent.replace(new RegExp(fontFile, 'g'), `../assets/fonts/${cleanFontFile}`);
    });

    // Сохраняем обновлённый файл
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
    console.log('Пути в CSS обновлены.');
}

// Функция для обновления путей в HTML файлах
const updateHtmlPaths = () => {
    // Ищем все HTML файлы в папке dist
    const htmlFiles = findFilesByExtensions('./dist', ['.html']);
    
    htmlFiles.forEach((htmlFile) => {
        const htmlFilePath = `./dist/${htmlFile}`;
        let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

        // Обновляем пути для CSS и JS файлов
        if (movedCssFile) {
            htmlContent = htmlContent.replace(/href="\/index.*\.css"/, `href="/css/${movedCssFile}"`);
        }
        if (movedJsFile) {
            htmlContent = htmlContent.replace(/src="\/index.*\.js"/, `src="/js/${movedJsFile}"`);
        }

        // Обновляем пути для шрифтов в HTML
        fontFiles.forEach(fontFile => {
            const cleanFontFile = removeHashFromFileName(fontFile);
            htmlContent = htmlContent.replace(new RegExp(fontFile, 'g'), `assets/fonts/${cleanFontFile}`);
        });

        // Обновляем пути для изображений
        imageFiles.forEach(imageFile => {
            const cleanImageFile = removeHashFromFileName(imageFile);
            htmlContent = htmlContent.replace(new RegExp(imageFile, 'g'), `assets/images/${cleanImageFile}`);
        });

        // Сохраняем обновлённый HTML файл
        fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
        console.log(`Пути в ${htmlFile} обновлены.`);
    });
}

// Удаление всех файлов с хешами
const deleteHashedFiles = (dir) => {
    const files = fs.readdirSync(dir);
    const hashedFiles = files.filter(file => /\.[a-f0-9]{8,}\./.test(file));

    hashedFiles.forEach(file => {
        fs.unlink(path.join(dir, file), (err) => {
            if (err) throw err;
            console.log(`Файл с хешем ${file} был удалён.`);
        });
    });
}

// Обновляем пути в CSS и HTML файлах
updateCssPaths();
updateHtmlPaths();

// Удаляем файлы с хешами в корневой директории dist
deleteHashedFiles('./dist');