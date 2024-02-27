import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;
  const { entry, build } = paths;

  return {
    mode: mode,
    entry: entry,
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
};
