const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  target: ["web", "es5"], // asegúrate de que el código glue de Webpack sea también compatible con ES5
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      // esto es un array de reglas
      // añádele un objeto que contenga reglas para Babel
      {
        // una expresión regular que busca todos los archivos js
        test: /\.js$/,
        // todos los archivos deben ser procesados por babel-loader
        loader: "babel-loader",
        // excluye la carpeta node_modules, no necesitamos procesar archivos en ella
        exclude: "/node_modules/",
      },
    ],
  },
};
