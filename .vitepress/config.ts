import {defineConfig} from 'vitepress';
import * as fs from 'fs'; // https://vitepress.dev/reference/site-config
import * as path from "path";
import ViteConfig from "./vite.config";
import Unocss from "@unocss/vite";
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
// https://vitepress.dev/reference/site-config
//@ts-ignore
export default defineConfig({
    title: "GraphVisExample",
    description: "A Awesome Graph",
    outDir: path.join(__dirname, "..", 'dist'),
    srcDir: path.join(__dirname, "..", "docs"),
    //@ts-ignore
    vite: ViteConfig,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Start', link: '/get_start'}
        ],
        sidebar: fs
            .readdirSync('docs')
            .map((pkg) => {
                return {
                    text: 'docs/' + pkg,
                    link: pkg
                };
            })
        ,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
});
