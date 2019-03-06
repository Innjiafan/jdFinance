<template lang="html">
  <Panel title="有车有钱" :class="$style.panel">
    <section :class="$style.ycyqImg">
      <div :class="$style.imgItem" v-for="item in imgItems" :key="item.img">
          <router-link :to="{ name: item.href}">
              <img :src="item.img">
          </router-link>
      </div>
    </section>
    <swiper :options="options">
        <swiper-slide >
          <section :class="$style.list">
              <div :class="$style.item" v-for="item in enters1" :key="item.img">
                  <router-link :to="{ name: item.href}">
                      <img :src="item.img" :alt="item.title">
                      <h4>{{ item.title }}</h4>
                  </router-link>
              </div>
          </section>
        </swiper-slide>
        <swiper-slide >
          <section :class="$style.list">
              <div :class="$style.item" v-for="item in enters2" :key="item.img">
                  <router-link :to="{ name: item.href}">
                      <img :src="item.img" :alt="item.title">
                      <h4>{{ item.title }}</h4>
                  </router-link>
              </div>
          </section>
        </swiper-slide>
    </swiper>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  components:{
    Panel,
    swiper,
    swiperSlide
  },
  props:{
    options:{
        loop:false,
        autoplay:false,

    },
  },
  data(){

    return{
      imgItems:[{
        href: "borrow",
        img: "//img12.360buyimg.com/jrpmobile/jfs/t1/26147/22/5476/26298/5c3ee5a2E89b2503e/3d31566224d39ff1.png?width=375&height=233"},
        {href: "borrow",
        img: "//img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&height=233"
        }],
      enters1:[{
           href: "borrow",
           img: "//img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90",
           title: "机票",
           },{
               href: "borrow",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88",
               title: "租房",
           },{
               href: "borrow",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90",
               title: "房抵贷",
           },{
               href: "borrow",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88",
               title: "分期用",
           },{
               href: "borrow",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90",
               title: "彩票推荐",
           }],
       enters2:[{
            href: "borrow",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90",
            title: "教育",
            },{
                href: "borrow",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90",
                title: "车险",
            },{
                href: "borrow",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88",
                title: "家装",
            },{
                href: "borrow",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                title: "驾校",
            }],
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    @include panel;

    >h4{
      text-align: left
    }
    .ycyqImg{
      width: 100%;
      overflow: hidden;
      .imgItem{
        width: 100%;
        img{
            width: 50%;
            float: left;
        }
      }
    }
    .list{
      @include list(row);
      background: #fff;
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: space-around;
      a{
        text-decoration: none;
      }
      .item{
        text-align: center;
        img{
          display: inline-block;
          width: 45px;
          height: 45px;
        }
        h4{
          font-size: 13px;
          text-align: center;
          color: #666;
          margin-top: 6px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
     }
   }
  }
</style>
