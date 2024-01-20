import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  console.log({ command, mode, process: process.cwd() });
  const env = loadEnv(mode, process.cwd());
  console.log({ env });

  return {
    server: {
      port: env.VITE_PORT,
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          about: resolve(__dirname, "about", "index.html"),
        },
      },
    },
  };
});
