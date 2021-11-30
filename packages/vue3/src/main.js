import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from './plugins/element-plus';
import VXETable from './plugins/vxe-table';

createApp(App).use(ElementPlus).use(VXETable).mount('#app')
