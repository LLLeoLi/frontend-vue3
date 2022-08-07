import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/team/:teamID",
    name: "team",
    component: () => import('../views/team/index.vue'), 
    children:[
      {path:'' , 
      component: () => import("../views/team/TeamInfoView.vue")
    },
      {path:'teamInfo' ,
      name:'teamInfo',
       component: () => import("../views/team/TeamInfoView.vue")
      },
      {
        path: "projectManage",
        name: "projectManage",
        component: () => import("../views/team/projectManage.vue"),
      },
      {
        path: "documentCenter",
        name: "documentCenter",
        component: () => import("../views/team/documentCenter.vue"),
      },
    ]
  },
  {
    path: "/teamInvite/:code",
    name: "teamInvited",
    component: () => import("../views/team/TeamInvitedView.vue"),
  },
  {
    path: "/team/create",
    name: "teamCreate",
    component: () => import("../views/team/TeamCreateView.vue"),
  },
  {
    path: "/team/list",
    name: "teamList",
    component: () => import("../views/team/TeamListView.vue"),
  },
  {
    path: "/project/recycle",
    name: "projectRecycle",
    component: () => import("../views/project/projectRecycle.vue"),
  },
  {
    path: "/project/myProject",
    name: "myProjectList",
    component: () => import("../views/project/MyProjectList.vue"),
  },
  {
    path: "/project/detail",
    name: "ProjectDetail",
    component: () => import("../views/project/ProjectDetail.vue"),
  },
  {
    path: "/editor/:id",
    name: "editor",
    component: () => import("../components/tiptop/NewEditor.vue"),
  },
  {
    path: "/user/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/user/register",
    name: "register",
    component: () => import("../views/login/Register.vue"),
  },
  // {
  //   path: "/example/:id",
  //   name: "example",
  //   component: () => import("../views/newproto/Home.vue"),
  // },
  {
    path: "/prototype/:id",
    name: "prototype",
    component: () => import("../views/newproto/Home.vue"),
  },
  {
    path: "/user/profile",
    name: "profile",
    component: () => import("../views/account/Profile.vue"),
  },
  {
    path: "/uml",
    name: "UML",
    component: () => import("../views/UML.vue"),
  },
  {
    path: "/user/docList",
    name: "userDocList",
    component: () => import("../views/user/userDocList.vue"),
  },
  {
    path: "/user/umlList",
    name: "userUMLList",
    component: () => import("../views/user/userUMLList.vue"),
  },
  {
    path: "/user/protoList",
    name: "userProtoList",
    component: () => import("../views/user/userProtoList.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/message/list",
    name: "MessageList",
    component: () => import("../views/message/MessageList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
