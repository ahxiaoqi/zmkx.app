import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from '@/App.vue';

const app = createApp(App);
app.use(Antd);
app.use(createPinia());
app.use(createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('@/routes/About.vue'),
    },
    {
      path: '/rgb',
      name: 'rgb',
      component: () => import('@/routes/Rgb.vue'),
    },
    {
      path: '/eink',
      name: 'eink',
      component: () => import('@/routes/Eink.vue'),
    },
    {
      path: '/motor',
      name: 'motor',
      component: () => import('@/routes/Motor.vue'),
    },
  ],
}));
app.mount('#app');
