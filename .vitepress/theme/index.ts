// .vitepress/theme/index.js
import type {EnhanceAppContext} from 'vitepress';
import axios from "axios";
import Org from "@vis/org";
import Timeline from '@vis/timeline';
import DefaultTheme from "vitepress/theme";
//@ts-ignore
import CoCThemeLayout from "./CoCThemeLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: CoCThemeLayout,
    enhanceApp(ctx: EnhanceAppContext) {
        // register your custom global components
        ctx.app.config.globalProperties.$http = axios;
        ctx.app.use(Org);
        ctx.app.use(Timeline);
        // console.log(ctx.app)
    },
};
