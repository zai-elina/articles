import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
};
