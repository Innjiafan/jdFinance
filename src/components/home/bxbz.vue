<template lang="html">
    <Panel title="保险保障" :class="$style.panel">
        <section :class="$style.content">
            <Slider :options="options" :items="items" cname="bxbz-slider"/>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home1",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260",
            }, {
                href: "home2",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260",
            }, {
                href: "home3",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260",
            }, {
                href: "home4",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260",
            },{
                href: "home5",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260",
            }],
            options: {
                slidesPerView: 2.6,
                spaceBetween: 12,
                freeMode: true,
            },
        }
    },
}
</script>

<style lang="scss">
  .bxbz-slider{
    .swiper-container{
      box-sizing: border-box;
      padding:0 16px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 125px;
          img{
            width: 125px;
            display: block;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../../css/element.scss";
  .panel{
    @include panel;
    .content{
      padding-bottom: 40px;
    }
  }
</style>
