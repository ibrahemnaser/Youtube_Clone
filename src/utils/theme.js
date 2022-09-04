export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            light: "#484848",
            main: "#212121",
            dark: "#000000",
            contrastText: "#ffffff",
          },
          secondary: {
            light: "#ff5231",
            main: "#d80000",
            dark: "#9e0000",
            contrastText: "#ffffff",
          },
        }
      : {
          primary: {
            light: "#efefef",
            main: "#bdbdbd",
            dark: "#8d8d8d",
            contrastText: "#000000",
          },
          secondary: {
            light: "#ff5231",
            main: "#d80000",
            dark: "#9e0000",
            contrastText: "#ffffff",
          },
        }),
  },
});
