import Org from './lib/org.vue';
import {App} from 'vue';

export function install(app) {
    app.component('Org', Org);
}

export default Org;
