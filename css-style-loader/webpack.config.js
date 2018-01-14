const PATH = require("path");

//configuracion de webpack
const CONFIG_WEBPACK = {
    //archivo de entrada
    entry: PATH.resolve(__dirname, "index.js"),
    //salida
    output: {
        //ruta donde quedara el archivo de salida
        path: PATH.resolve(__dirname, "dist"),
        //nombre del archivo de salida
        filename: "bundle.js",
    },
    //carga de modulos
    module: {
        rules : [
            //en este punto se meten los loaders
            {
                //indica el tipo de archivo a leer
                test: /\.css$/,
                //indica que loader se utilizara
                //puede resivir solo una cadena de texto
                //para el caso de cargar varios loader se pasa un array
                use: [
                    "style-loader", //este va primero ya que es necesrtio entender el arhivo css
                    "css-loader", // este es el interptete
                ],
            }
        ],
    }
};

module.exports = CONFIG_WEBPACK;