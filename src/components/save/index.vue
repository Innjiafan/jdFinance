<template>
    <div>
        <Head title="省钱"/>
        <Slider />
        <Zfyh />
        <Qy />
        <Blsh />
        <Zsjn />
        <Navbar />
    </div>
</template>

<script>
import Head from "../public/header.vue"
import Slider from "./slider.vue"
import Zfyh from "./zfyh.vue"
import Qy from "./qy.vue"
import Blsh from "./blsh.vue"
import Zsjn from "./zsjn.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Head,
        Slider,
        Zfyh,
        Qy,
        Blsh,
        Zsjn,
        Navbar
    },
}
</script>
