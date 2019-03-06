<template lang="html">
    <Panel title="众筹新品" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <Slider :options="options" :items="items" cname="sjrw-slider"/>
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
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/8400/39/12559/14819/5c387a22Eb2b1d29f/70588a5a61bfdde1.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/7388/5/12769/16802/5c387a23Ee497f7d9/e593f68e29afa8b6.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t1/11417/29/6015/31505/5c387a28E3756cc25/0707389bbdefb14d.jpg?width=335&height=421",
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
  .sjrw-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 16px;
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
      position: relative;
      &>div{
        max-width: 40%;
        font-size: 14px;
        color: #999;
        height: 56px;
        margin-right: 16px;
        position: absolute;
        right:5px;
        top: -35px;
      }
    }
  }
</style>
