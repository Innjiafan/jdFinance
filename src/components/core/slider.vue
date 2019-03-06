<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletClass : 'my-bullet',
                        bulletActiveClass: 'my-bullet-active',
                    },

                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="css">
  @import "~swiper/dist/css/swiper.css";
  .my-bullet{
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 0.2;
    margin-right: 4px;
  }
  .my-bullet-active{
    opacity: 1;
  }
</style>
