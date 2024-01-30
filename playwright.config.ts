export default {
  use: {
    baseURL: `http://127.0.0.1:61000`,
  },
  webServer: {
    command: process.env.TYPE === "dev" ? "pnpm serve" : "pnpm build",
    url: `http://127.0.0.1:61000`,
    retries: 2,
    workers: 1,
  },
};
