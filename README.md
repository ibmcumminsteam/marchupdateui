# marchupdateui

Some important points: 
1) unzip node_modules in the project folder// you will find them in the node_modules folder in this repository.
2) then change directory to current working project folder in the terminal. 
3) type npm start, to start with the expo development server, which shows a QR code. This can be scanned from the expo app on your phone.
4) if any node package related error is shown in the terminal copy the package name and install it till all the similar errors are resolved.
    e.g. npm install packagename
5) the php files in this repository should be pasted in the server's folder whose path is given in the fetch request on the screens fetching data + login screen(to validate login credentials).

-- 

apk building steps
Open the terminal and change directory to current working project folder and use command:
npm start
Open anotheer terminal and change directory to current working project folder and use command:
expo build:android (for android)
expo build:ios (for ios)

refer to following link for more details: https://docs.expo.io/versions/latest/distribution/building-standalone-apps/

--
To rebuild the apk on any changes repeat the steps given above
