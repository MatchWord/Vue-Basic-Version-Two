/**
 * BASE PER FIX URL
 */
const baseUrl = {
  dev: 'http://192.168.10.25:9090',
  prod: 'http://192.168.10.25:9090'
}
//
export const BASE_PER_FIX_URL = process.env.NODE_ENV === 'production' ? baseUrl.prod : baseUrl.dev
// export const BASE_PER_FIX_URL = baseUrl.dev