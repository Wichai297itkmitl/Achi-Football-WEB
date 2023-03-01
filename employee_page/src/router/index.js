import {createWebHistory, createRouter} from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
//import navBar from "@/components/navBar.vue";
import employeeSelect from "@/components/employeeSelect.vue";
import emCon from "@/components/employeesConfirm.vue";
import emSelecttrue from "@/components/employeeSelecttrue.vue";
import emCondetail from "@/components/employeeProductdetail.vue";
import emChangePro from "@/components/employeeChangePro.vue";
import emAddPro from "@/components/employeeAddpro.vue";
import test from "@/components/Test-medel.vue";
import Enployee_Info from "@/components/Employee-information.vue";
// saasdas
const routes = [
    {
        path:"/",
        name:"test",
        component: test
    },
    {
        path:"/employeeSelect",
        name:"emSelect",
        component:employeeSelect
    },
    {
        path:"/emCon",
        name:"emConfirm",
        component:emCon
    },
    {
        path:"/emSelecttrue",
        name:"emSelecttrue",
        component:  emSelecttrue
    },
    {
        path:"/emProde",
        name:"emProde",
        component: emCondetail
    },
    {
        path:"/emChangePro",
        name: "emchangeProduct",
        component:emChangePro
    },
    {
        path:"/emAddPro",
        name:"emAddProduct",
        component:emAddPro
    },
    {
        path:"/emInfo",
        name: "Enployee_Info",
        component: Enployee_Info
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;