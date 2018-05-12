const PATH = require("path");

// importamos el plugin
const webpack = require("webpack");

// configuracion de webpack
const CONFIG_WEBPACK = {
    // archivo de entrada
    entry: {
        modules: [
            "react",
            "react-dom",
        ],
    },
    // salida
    output: {
        // ruta donde quedara el archivo de salida
        path: PATH.resolve(__dirname, "dist"),
        // nombre del archivo de salida
        filename: "bundle-[name].js",
        library: "[name]",
    },
    // carga de modulos
    /* los modulos no son necesrtios ya que la mayoria de paquetes tiene su codigo transpilado
    module: {},
    */
    // cargando los plugin
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: PATH.join(__dirname, "dist/[name]-manifest.json"), // Slida de mi dll
        }),
    ],
};

module.exports = CONFIG_WEBPACK;
