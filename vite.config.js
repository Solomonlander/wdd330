import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/wdd330/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                listing: resolve(__dirname, "src/product_listing/index.html"),
                details: resolve(__dirname, "src/product_details/index.html"),
            },
        },
    },
});