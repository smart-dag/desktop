# desktop

安装 electron
```
npm install -g electron electron-packager
```

克隆
```
git clone https://github.com/smart-dag/desktop.git
```

安装
```
cd desktop
npm install
```

启动
```
npm start
```

打包

```
electron-packager . 'wallet' --platform=win32 --arch=x64 --icon=icon.ico --out=./out --asar --app-version=0.0.1
```