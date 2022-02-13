import path from "path";
import fs from "fs";
const sassResourcesLoader = require('craco-sass-resources-loader');

// APP DIRECTORY
const appDirectory = fs.realpathSync(process.cwd());

// GET ABSOLUTE PATH OF FILE WITHIN APP
const resolveAppPath = (relativePath: string) => path.resolve(appDirectory, relativePath);

// HOST
const host = process.env.HOST || "localhost";

module.exports = {
  mode: "develpoment",
  webpack: {
    alias: {
      '@': resolveAppPath('src'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    },
    performance: {
      hints: 'warning',
    },
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
    devServer: {
      compress: true,
      hot: true,
      host,
      open: true,
      port: 3055,
      allowedHosts: 'all',
      client: {
        reconnect: true,
        progress: true,
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          include: resolveAppPath("src"),
          use: [
            "babel-loader",
            {
              loader: "awesome-typescript-loader",
              options: {
                transpileOnly: true,
                presets: ['@babel/preset-env', '@babel/preset-react']
              },
            },
            {
              loader: "eslint-loader",
            }
          ],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: ['file-loader'],
        }
      ],
    },
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/assets/scss/_colors.scss',
          './src/assets/scss/_utilities.scss',
          './src/assets/scss/_mixins.scss',
          './src/assets/scss/_breakpoints.scss'
        ],
      },
    }
  ],
}

