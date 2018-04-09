module.exports = {
  cache: {
    cacheId: "wis-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "wis-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
