const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const config = {
    resolver:{
        blacklistRE: blacklist([
            /packages\/rnv\/node_modules\/react-native\/.*/,
            /Sample\/.*/,
            /nodejs-assets\/.*/,
            /android\/.*/,
            /ios\/.*/
        ])
    },
    projectRoot: path.resolve(__dirname),
    watchFolders: [path.resolve(__dirname)],
    modulePaths: [path.resolve(__dirname)],
};

module.exports = config;
