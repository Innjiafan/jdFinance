<template lang="html">
  <section :class="$style.container">
    <div :class="$style.borrowBox">
      <img src="../../assets/goldCard.png" alt="">
      <p :class="$style.txt1">最高可借</p>
      <p :class="$style.txt2"><span>¥</span>300,000</p>
      <Button  :class="$style.btn">立即登录</Button>
    </div>
    <Slider :items="items" :cname="$style.slider"/>
  </section>
</template>

<script>
import Slider from "../core/slider.vue"
import Button from "../core/btn.vue"
export default {
    components: {
        Slider,
        Button,
    },
    options:{
        speed:2000,
        effect : 'fade',
    },
    data() {
        return {
          items:[{
            href:"borrow",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t1/6758/25/12426/30531/5c3327b7Ea2d96add/3cbcac830338b901.png?width=1080&height=240"
          },{
            href:"borrow",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t1/26962/32/8709/86856/5c793513E7b0e9f90/fe79bbc067e90a38.png?width=1080&height=240"
          },{
            href:"borrow",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240"
          }]
        }
    },
}

</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .container{
    width: 100%;
    margin-top: 44px;
    background: url('../../assets/timg.jpeg') 0 0 no-repeat;
    background-size: 100% 100%;
    .borrowBox{
      padding: 27px 15px 0 15px;
      position: relative;
      color: #fff;
      img{
        width: 100%;
      };
      .txt1{
        position: absolute;
        top: 26%;
        left: 12%;
        font-size: 16px;
      };
      .txt2{
        position: absolute;
        top: 36%;
        left: 12%;
        font-size: 43px;
        font-family: DINAlternate-Bold;
        text-shadow: 0 10px 10px rgba(63,39,0,.2);
        span{
          font-size: 30px;
          margin-right: 4px;
        }
      };
      .btn{
        @include btn;
        position: absolute;
        top: 60%;
        left: 12%;
        font-size: 14px;
        font-weight: 500;
        width: 106px;
        height: 26px;
        line-height: 24px;
        text-align: center;
        background: url('../../assets/btnBj.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    .slider{
      img{
        width: 100%;
      }
    }
  }
</style>
