<template>
    <div>
        <Head title="借钱"/>
        <Adverse />
        <Ycyq />
        <Ycyq />
        <Jphd />
        <Navbar />
    </div>
</template>

<script>
import Head from "../public/header.vue"
import Adverse from "./adverse.vue"
import Ycyq from "./ycyq.vue"
import Jphd from "./jphd.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Head,
        Navbar,
        Ycyq,
        Jphd,
        Adverse
    },
}
</script>
