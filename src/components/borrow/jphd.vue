<template lang="html">
  <Panel title="精品活动" :class="$style.panel">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/11683/4/3169/62437/5c1b2ddcEf8a48b38/ccab51775dd74d0b.png?width=730&height=264" alt="">
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components:{
    Panel,
  },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    @include panel;

    >h4{
      text-align: left
    }
    width: 100%;
    img{
      width: 100%;
      padding: 0  0 30px 0;
    }
    margin-bottom: 48px;
    &:after{
      content: '';
      display: block;
      height: 4px;
      width: 100%;
      background-color: #f3f5f7;
    }
  }
</style>
