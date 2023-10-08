/** @type {import('next').NextConfig} */

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline;

const nextConfig = {
  webpack(config) {
    const sassRules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.find(
        (rule) =>
          rule.sideEffects === false &&
          regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );

    sassRules.use = sassRules.use.map((rule) => {
      return rule.loader.includes("\\css-loader")
        ? {
            ...rule,
            options: {
              ...rule.options,
              modules: {
                ...rule.options.modules,
                getLocalIdent: (...props) => {
                  let name = rule.options.modules.getLocalIdent(...props);
                  const hash = name.split("__").pop();
                  name = name.replace(`__${hash}`, "").replace("_", "__");

                  const split = name.split("__");
                  if (split.every((s) => s === split[0])) return split[0];

                  return name;
                },
              },
            },
          }
        : rule;
    });

    return config;
  },
};

module.exports = nextConfig;
