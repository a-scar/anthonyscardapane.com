const config = {
  kit: {
    vite: {
      ssr: {
        noExternal: ["undici"],
      },
    },
  },
};

export default config;
