const PATH = require("path");

// importamos el plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

// configuracion de webpack
const CONFIG_WEBPACK = {
    // archivo de entrada
    entry: {
        home: PATH.resolve(__dirname, "./src/js/index.js"),
        contacto: PATH.resolve(__dirname, "./src/js/contacto.js"),
    },
    // salida
    output: {
        // ruta donde quedara el archivo de salida
        path: PATH.resolve(__dirname, "dist"),
        // nombre del archivo de salida
        filename: "bundle-[name].js",
        publicPath: PATH.resolve(__dirname, "dist") + "/", // Lugar donde tomara los js que se cargan de manera dinamica,
        chunkFilename: "js/[id].[chunkhash].js", // nombre de los archivos que estamos cargando.
    },
    // carga de modulos
    module: {
        rules: [
            {
                // indica el tipo de archivo a leer
                test: /\.css$/,
                // indica que loader se utilizara
                // puede resivir solo una cadena de texto
                // para el caso de cargar varios loader se pasa un array
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // este va primero ya que es necesrtio entender el arhivo css
                    use: [
                        {
                            loader: "css-loader", // archivos de css
                            options: { // configuracion para postcss
                                modules: true, // se indica que se permiten modulos
                                importLoaders: 1, // permite importar otros loader para que trabajen en conjunto
                            },
                        },
                        "postcss-loader",
                    ], // este es el interptete
                }),
            },
            // se carga nuevo loader
            {
                test: /\.js$/,
                exclude: /(node_module)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015",
                            "react",
                        ],
                        plugins: [
                            "syntax-dynamic-import",
                            "transform-runtime",
                        ],
                    },
                },
            },
            // Soporte para fuentes
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 500000, // esto nos permite indicar el size maximo de la imagen
                    },
                },
            },
            {
                test: /\.json$/,
                use: "json-loader",
            },
        ],
    },
    // cargando los plugin
    plugins: [
        // se extrae el css y todo el css entra en el archivo que se indica
        // al realizar la instancia del plugin
        new ExtractTextPlugin("styles.css"), // de esta manera podemos personazlizar el nombre del archivo de salida
        new ExtractTextPlugin("[name].css"), // de esta manera toma el nombre el entry point
    ],
};

module.exports = CONFIG_WEBPACK;
