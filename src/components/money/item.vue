<template lang="html">
      <section :class="$style.list">
          <div :class="$style.item" v-for="item in items" :key="item.img">
              <router-link :to="{ name: item.href}">
                  <img :src="item.img" :alt="item.title">
                  <h4>{{ item.title }}</h4>
              </router-link>
          </div>
          <div :class="$style.imgBox">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/22342/8/9403/35551/5c7e11ccEe94fb087/bed170e52548506a.jpg?width=750&height=200" alt="">
            <swiper :options="options" :not-next-tick="options.notNextTick" :class="$style.slider">
                <swiper-slide v-for="item in itemImgs" :key="item.href">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.src" alt="">
                    </router-link>
                </swiper-slide>
            </swiper>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/24958/23/5984/66824/5c466c74Eefe11794/234f78a6487d9130.jpg?width=750&height=200" alt="">
          </div>
      </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    data() {
          return {
            options: {
                autoplay: true,
                loop: true,
                direction:"vertical",
                notNextTick: false,

            },
            items: [{
                    href:"save",
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t28189/232/289098066/5076/dfe2d74f/5bee6bb4N4ec4cede.png?width=90&height=90",
                    title:"领红包"
                  },{
                    href:"save",
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t27334/12/1829630702/5159/f8133cd6/5bee6bbdN8606cfbb.png?width=90&height=90",
                    title:"领福利"
                  },{
                    href:"save",
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90",
                    title:"领券"
                  },{
                    href:"save",
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90",
                    title:"领京豆"
                  },{
                    href:"save",
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90",
                    title:"全部"
                  }],
              itemImgs: [{
                      href:"home2",
                      src:"//img12.360buyimg.com/jrpmobile/jfs/t1/11521/24/9922/39391/5c7cbb4eE0d439ba7/bcfdaa5cb9f1df78.jpg?width=750&height=320"
                    },{
                      href:"home3",
                      src:"//img12.360buyimg.com/jrpmobile/jfs/t1/29056/15/9174/139307/5c7cbb78Ea734a6a5/90c17f43c155e332.jpg?width=750&height=320"
                    },{
                      href:"home4",
                      src:"//img12.360buyimg.com/jrpmobile/jfs/t1/14617/36/9123/46685/5c7cbba1Eb575f83f/4eb34653c2f82864.jpg?width=750&height=320"
                    }]
        }
    },
}
</script>
<style lang="scss">
    .swiper-container-vertical {
      height: 160px;
      overflow: hidden;
    }
</style>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 20px;
    padding: 0 10px;
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-around;
    min-height: 64px;
    margin-bottom: 44px;
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
        display: block;
        color: #666;
        font-weight: 300;
        margin-top: 6px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .imgBox{
      width: 100%;
      img{
        padding-top:20px;
        width: 100%;
      }
    }
  }
</style>
