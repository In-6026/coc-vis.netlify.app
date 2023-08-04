// .vitepress/theme/index.js
import type {EnhanceAppContext} from 'vitepress';
import axios from "axios";
import Org from "@vis/org";

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
        // console.log(ctx.app)
    },
};
