import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://sosomarket-api.bubaum.dev",
                changeOrigin: true,
                secure: false,
                ws: true,
            },
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});
