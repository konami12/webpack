const PATH = require("path");

//importamos el plugin 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//configuracion de webpack
const CONFIG_WEBPACK = {
    //archivo de entrada
    entry: PATH.resolve(__dirname, "./src/js/index.js"),
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", //este va primero ya que es necesrtio entender el arhivo css
                    use: "css-loader", // este es el interptete
                }),
            },
            //se carga nuevo loader
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env",
                            "flow",
                        ],
                    },
                }
            },
            //Soporte para fuentes
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 500000,//esto nos permite indicar el size maximo de la imagen
                    }
                }
            },
        ],
    },
    //cargando los plugin
    plugins : [
        // se extrae el css y todo el css entra en el archivo que se indica 
        // al realizar la instancia del plugin
        new ExtractTextPlugin("styles.css"),//de esta manera podemos personazlizar el nombre del archivo de salida
        new ExtractTextPlugin("[name].css"),//de esta manera toma el nombre el entry point
    ]
};

module.exports = CONFIG_WEBPACK;