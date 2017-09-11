const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/login',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
}, {
    path: '/register',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/register.vue'], resolve)
}, {
    path: '/adminManage',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/adminManage.vue'], resolve)
},{
    path: '/doem',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/doem.vue'], resolve)
}];
export default routers;