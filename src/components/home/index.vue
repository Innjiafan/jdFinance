<template>
    <div>
        <Head title="京东金融"/>
        <Slider />
        <Money />
        <Sjrw />
        <Bxbz />
        <Zcxp />
        <Footer />
        <Navbar />
    </div>
</template>

<script>
import Head from "../public/header.vue"
import Slider from "./hslider.vue"
import Money from "./money.vue"
import Sjrw from "./sjrw.vue"
import Bxbz from "./bxbz.vue"
import Zcxp from "./zcxp.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Head,
        Slider,
        Money,
        Sjrw,
        Bxbz,
        Zcxp,
        Footer,
        Navbar
    },
}
</script>
