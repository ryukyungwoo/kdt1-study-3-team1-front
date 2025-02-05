import Vue from "vue";
import VueRouter from "vue-router";

import ProductListPage from "@/views/product/ProductListPage.vue"
import ProductRegisterPage from "@/views/product/ProductRegisterPage.vue"
import ProductModifyPage from "@/views/product/ProductModifyPage.vue"
import ProductReadPage from "@/views/product/ProductReadPage.vue"

Vue.use(VueRouter);

const productRoutes = [
    {
        path: "/product-list-page",
        name: "ProductListPage",
        component: ProductListPage,
      },
      {
        path: "/product-register-page",
        name: "ProductRegisterPage",
        component: ProductRegisterPage,
      },
      {
        path: "/product-modify-page",
        name: "ProductModifyPage",
        components: {
          default: ProductModifyPage,
          },
          props: {
              default: true,
          }    
      },
      {
        path: "/product-read-page",
        name: "ProductReadPage",
        components: {
            default: ProductReadPage,
        },
        props: {
            default: true,
        }
      },
]

export default productRoutes