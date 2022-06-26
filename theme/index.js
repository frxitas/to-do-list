const theme = {};

const themeKeyMap = {
  borderRadius: "border-radius",
  colors: "color",
  fonts: "font",
  fontSizes: "fontSize",
  fontWeights: "fontWeight",
  lineHeights: "lineHeight",
  sizes: "size",
  spaces: "space",
  zIndices: "zIndex",
};

const getFormattedKey = (key) => {
  if (Number(key) && Number(key) !== Math.floor(key)) {
    return `${parseInt(key)}-half`;
  }

  return key;
};

export const generateCSSVarsFromTheme = (
  { icons = null, ...themeObj },
  previousKey = null
) => {
  const cssVarsArr = Object.entries(themeObj).map(([key, val]) => {
    if (val && isObject(val)) {
      return generateCSSVarsFromTheme(
        val,
        previousKey
          ? `${themeKeyMap[previousKey] || previousKey}-${getFormattedKey(key)}`
          : getFormattedKey(key)
      );
    } else {
      if (previousKey) {
        return `--${snakeCase(themeKeyMap[previousKey] || previousKey).replace(
          "_",
          "-"
        )}-${getFormattedKey(key)}: ${val};`;
      }

      return `--${snakeCase(getFormattedKey(key)).replace("_", "-")}: ${val};`;
    }
  });

  return cssVarsArr.flat().join("\n");
};

export default theme;
