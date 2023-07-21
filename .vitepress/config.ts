import {defineConfig} from 'vitepress'
import * as fs from 'fs' // https://vitepress.dev/reference/site-config
import * as path from "path"
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "GraphVisExample",
    description: "A Awesome Graph",
    outDir: path.join(__dirname, '../dist'),
    srcDir: path.join(__dirname, "..", "packages"),
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/event'}
        ],
        sidebar: fs
            .readdirSync('packages')
            .map((pkg) => {
                return {
                    text: 'packages/' + pkg,
                    link: pkg
                }
            })
        ,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
