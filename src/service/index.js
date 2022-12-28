export const BASE_URL = "http://103.183.74.5:8000";

export const UUID = '916392d0-b730-4896-9bc5-294406d3f7fe'

export const url = {
  auth: {
    getProfile: "/api/v1/auth/profile",
    login: "/api/v1/user/login",
    logout: "/api/v1/auth/logout",
    register: "/api/v1/user/register",
    update: "/api/v1/auth/update-profile",
  },
  product: "/api/v1/user/product",
  merchant: "/api/v1/user/merchant",
  cart: "/api/v1/user/cart",
  balance: {
    topup: "/api/v1/user/balance/topup",
    log: "/api/v1/user/balance/logs",
    total: "/api/v1/user/balance/total",
  },
  address: "/api/v1/user/address",
};
