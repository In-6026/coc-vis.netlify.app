import {defineConfig} from 'vitepress'
import * as path from "path"
import Unocss from "unocss/vite"
import {presetAttributify, presetIcons, presetWind} from "unocss";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// https://vitepress.dev/reference/site-config

// @ts-ignore
export default defineConfig({
    title: "GraphVisExample",
    description: "A Awesome Graph",
    outDir: path.join(__dirname, '../dist'),
    srcDir: path.join(__dirname, "..", "packages"),
    /**@type import('vite').UserConfig*/
    vite: {
        plugins: [
            // @ts-ignore
            Unocss({
                presets: [
                    presetWind(),
                    presetIcons(),
                    presetAttributify()
                ]
            }),
            // @ts-ignore
            // add plugin
        ]
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: ' 主页 ', link: '/'},
            {text: ' 案例 ', link: '/example'}
        ],
        sidebar: [
            {
                text: '基本可视化',
                items: [
                    { text: '时序图', link: '/基本可视化/时序图' },
                    { text: '事件图', link: '/基本可视化/事件图' },
                    { text: '知识图谱', link: '/基本可视化/知识图谱' },
                ]
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
})
