import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  define: { "process.env": {} },
  plugins: [reactRefresh()],
});
