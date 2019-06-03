
import { aysncRoutesMap as asyncRoutes } from '@/router/routes/aysncRoutes.js'
import { constantRouterMap as constantRoutes } from '@/router/routes/staticRoutes.js'
/**
 * Use meta.role to determine if the current user has permission
 * 通过meta.role 判断当前用户是否有权限
 * @param roles 用户权限列表
 * @param route 当前用户权限对象
 */
function hasPermission(roles, route) {
 // 跳转路由不包含meta.role,则表示不需要验证权限
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * 通过权限过滤出可供访问的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [], // 静态路由表或和动态路由表合并后的总路由表
  addRoutes: [] // 动态添加的路由表
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
