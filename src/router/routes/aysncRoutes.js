import Layout from "@/views/Layout";

// const _import_ = file => () => import("@/views/" + file + ".vue");
/**
 * 静态路由表配置
 *
 * 可根据{role}字段来模拟权限访问. 用户登录后必须含有{role}字段, 与之匹配的路由会被最终过滤出来供访问.
 * 不匹配的则不会包含在内.
 *
 */
export const aysncRoutesMap = [
  {
    path: "/menuManagement",
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: "菜单管理", icon: "iconfont icon-caidan" },
    children: [
      {
        path: "/menuOne",
        name: "MenuOne",
        redirect: '/menuOne/menuTelephone',
        component: () => import("@/views/menuManagement/menuOne/index"),
        meta: { title: "菜单一", icon: "iconfont icon-caidan1" },
        children: [
          {
            path: "menuTelephone",
            name: "MenuTelephone",
            component: () => import("@/views/menuManagement/menuOne/menuTelephone"),
            meta: { title: "菜单电话", icon: "iconfont icon-caidan_dianhua" }
          },
          {
            path: "menuAccount",
            name: "MenuAccount",
            component: () => import("@/views/menuManagement/menuOne/menuAccount"),
            meta: { title: "菜单账单", icon: "iconfont icon-978caidan_zhanghu" }
          }
        ]
      },
      {
        alwaysShow: true,
        path: "/menuTwo",
        name: "menuTwo",
        redirect: '/menuTwo/menuMoney',
        component: () => import("@/views/menuManagement/menuTwo/index"),
        meta: { title: "菜单二", icon: "iconfont icon-caidan1" },
        children: [
          {
            path: "menuMoney",
            name: "MenuMoney",
            component: () => import("@/views/menuManagement/menuTwo/menuMoney"),
            meta: { title: "菜单钱包", icon: "iconfont icon-957caidan_qianbao" }
          }
        ]
      }
    ]
  },
  {
    path: "/formManagement",
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: "表单管理", icon: "iconfont icon-biaodan" },
    children: [
      {
        path: "formLabel",
        name: "FormLabel",
        component: () => import("@/views/formManagement/formLabel"),
        meta: { title: "表单标签", icon: "iconfont icon-biaodanbiaoqian" },
      },
      {
        path: "formUpdate",
        name: "FormUpdate",
        component: () => import("@/views/formManagement/formUpdate"),
        meta: { title: "表单更新", icon: "iconfont icon-icon_bgapplication" },
      }
    ]
  }
];