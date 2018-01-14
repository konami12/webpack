const PATH = require("path");

//configuracion de webpack
const CONFIG_WEBPACK = {
    //archivo de entrada
    entry: PATH.resolve(__dirname, "index.js"),
    output: {
        //ruta donde quedara el archivo de salida
        path: PATH.resolve(__dirname, "dist"),
        //nombre del archivo de salida
        filename: "bundle.js",
    }
};

module.exports = CONFIG_WEBPACK;