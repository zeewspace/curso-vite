import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log({ command, mode, process: process.cwd() });
  const env = loadEnv(mode, process.cwd());
  console.log({ env });

  return {
    server: {
      port: env.VITE_PORT,
    },
  };
});
