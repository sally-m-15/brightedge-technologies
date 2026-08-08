export const routes = [
    {
        path: '/',
        component: () => import("@/layouts/MainLayout.vue"),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import("@/views/HomeView.vue")
            },
            {
                path: 'about',
                name: 'about',
                component: () => import("@/views/AboutView.vue")
            },
            {
                path: 'brands',
                name: 'brands',
                component: () => import("@/views/BrandsView.vue")
            },
            {
                path: 'products',
                name: 'products',
                component: () => import("@/views/ProductsView.vue")
            },
            {
                path: 'contact',
                name: 'contact',
                component: () => import("@/views/ContactView.vue")
            }
        ]
    }
]