<template lang="html">
  <Panel title="白条服务" :class="$style.panel">
    <section :class="$style.ycyqImg">
      <div :class="$style.imgItem" v-for="item in imgItems" :key="item.img">
          <router-link :to="{ name: item.href}">
              <img :src="item.img">
          </router-link>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components:{
    Panel,
  },
  data(){
    return{
      imgItems:[{
        href: "borrow",
        img: require("../../assets/whiteCard.png")},
        {href: "borrow",
        img: require("../../assets/whiteCircle.png")
        }]
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
      padding: 0 10px 10px 10px;
      box-sizing: border-box;
      .imgItem:first-child{
          width: 63.5%;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
      }
      .imgItem:nth-child(2){
          width: 36%;
          float: left;
          img{
            width: 100%;
            height: 100%;
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
