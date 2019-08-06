const routes = [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
          {
            name: 'list',
            path: '/list/table/list',
            icon: 'container',
            component: './list/table/list',
          },
          {
            name: 'map',
            path: '/map',
            icon: 'global',
            component: './map',
          },
          {
            path: '/production',
            name: 'production',
            icon: 'build',
            routes: [
              {
                path: '/production/newtasks',
                name: 'newtasks',
                icon: 'file-add',
                component: './production/newtasks',
              },
              {
                path: '/production/taskslist',
                name: 'taskslist',
                icon: 'file',
                component: './production/taskslist',
              },
              {
                path: '/production/allottasks',
                name: 'allottasks',
                icon: 'funnel-plot',
                component: './production/allottasks',
              },
              {
                path: '/production/currenttask',
                name: 'currenttask',
                icon: 'hdd',
                component: './production/currenttask',
              },
              {
                path: '/production/taskrecord',
                name: 'taskrecord',
                icon: 'database',
                component: './production/taskrecord',
                hideChildrenInMenu: true,
                routes: [
                  {
                    path: '/production/taskrecord/treatment',
                    name: 'treatment',
                    component: './production/taskrecord/treatment',
                  },
                ]
              },
              {
                path: '/production/taskrelease',
                name: 'taskrelease',
                icon: 'interaction',
                component: './production/taskrelease',
              },
            ],
          },
          {
            name: '403',
            path: '/exception/403',
            hideInMenu: true,
            component: './exception/403',
          },
          {
            name: 'settings',
            path: '/account/settings',
            hideInMenu: true,
            component: './account/settings',
          },
          {
            name: 'welcome',
            component: './Welcome',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ]
  },
]


export default routes