<template>
    <div>
        <Head title="赚钱"/>
        <Slider/>
        <Item />
        <Navbar />
    </div>
</template>

<script>
import Head from "../public/header.vue"
import Slider from "./slider.vue"
import Item from "./item.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Head,
        Slider,
        Item,
        Navbar
    },
}
</script>
