import {createWebHistory, createRouter} from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
//import navBar from "@/components/navBar.vue";
import HomePage from "@/components/Customers/HomePage.vue";
import List_Product from "@/components/Customers/List-Product.vue";
import Login from "@/components/Customers/Login-user.vue";
import Register from "@/components/Customers/Register-user.vue";
import Cart from "@/components/Customers/Cart-Page.vue";
import ProductDetail from "@/components/Customers/Product-Detail.vue";
import employeeSelect from "@/components/Employees/employeeSelect.vue";
import emCon from "@/components/Employees/employeesConfirm.vue";
// saasdas
const routes = [
    {
        path: "/",
        name: "intro",
        component:HomePage
    },
    {
        path: "/product",
        name: "list_product",
        component:List_Product
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path:"/register",
        name: "register",
        component: Register
    },
    {
        path:"/cart",
        name: "cart",
        component: Cart
    },
    {
        path:"/info",
        name:"ProductDetail",
        component: ProductDetail
    },
    {
        path:"/emSelect",
        name:"emSelect",
        component:employeeSelect
    },
    {
        path:"/emCon",
        name:"emConfirm",
        component:emCon
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;