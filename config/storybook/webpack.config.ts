import webpack, { RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // if (config.module?.rules !== undefined) {
  //   config.module.rules = config.module.rules.map(
  //     (rule: false | "" | 0 | RuleSetRule | "..." | null | undefined) => {
  //       if (
  //         rule &&
  //         rule !== "..." &&
  //         rule.test instanceof RegExp &&
  //         rule.test.toString().includes("svg")
  //       ) {
  //         return { ...rule, exclude: /\.svg$/i };
  //       }
  //     }
  //   );
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ["@svgr/webpack"],
  //   });
  // }
  const imageRule = config.module?.rules?.find((rule) => {
    const test = (rule as { test: RegExp }).test;

    if (!test) {
      return false;
    }

    return test.test(".svg");
  }) as { [key: string]: RuleSetRule };

  imageRule.exclude = /\.svg$/;

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
