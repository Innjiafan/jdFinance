import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/index.vue"
import Borrow from "../components/borrow/index.vue"
import Save from "../components/save/index.vue"
import Money from "../components/money/index.vue"
import Person from "../components/person/index.vue"
import "../css/reset.scss"

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },{
            path: "/borrow",
            name: "borrow",
            component: Borrow,
        },{
            path: "/save",
            name: "save",
            component: Save,
        },{
            path: "/money",
            name: "money",
            component: Money,
        },{
            path: "/person",
            name: "person",
            component: Person,
        }
    ]
})
