<template lang="html">
    <Panel title="赏金任务" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">查看更多任务 ></div>
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
                src: "//img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260",
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
