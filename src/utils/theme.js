export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            light: "#3c3c3c",
            main: "#161616",
            dark: "#000000",
            contrastText: "#ffffff",
            secContrast: "rgba(255 255 255 / 70%)",
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
            main: "#e0e0e0",
            dark: "#bdbdbd",
            contrastText: "#000000",
            secContrast: "rgba(0 0 0 / 70%)",
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
