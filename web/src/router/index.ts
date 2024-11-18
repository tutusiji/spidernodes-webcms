import { createRouter, createWebHistory } from "vue-router";
// import DynamicForm from "../views/DynamicForm/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/DynamicForm',
    //   name: 'DynamicForm',
    //   component: DynamicForm
    // },
    // {
    //   path: '/drag',
    //   name: 'drag',
    //   component: () => import('../views/DynamicForm/DragPage.vue')
    // },
    // {
    //   path: '/select',
    //   name: 'CascaderSelect',
    //   component: () => import('../views/DynamicForm/formComponents/CascaderSelect.vue')
    // },
    {
      path: "/",
      name: "SpiderNodes",
      component: () => import("@/views/SpiderNodes/Index.vue"),
    },
    {
      path: "/gpt",
      name: "SpiderNodesGpt",
      component: () => import("@/views/SpiderNodes/gpt.vue"),
    },
  ],
});

export default router;
