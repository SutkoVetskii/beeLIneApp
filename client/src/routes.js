import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ORDERS_ROUTE } from './utils/constants'
import { Admin, Auth, Basket, Shop, Orders } from './pages'

export const authRoutes = [
    { path: ADMIN_ROUTE, component: Admin },
    { path: ORDERS_ROUTE, component: Orders },
]

export const publicRoutes = [
    { path: SHOP_ROUTE, component: Shop },
    { path: LOGIN_ROUTE, component: Auth },
    { path: BASKET_ROUTE, component: Basket },
]
