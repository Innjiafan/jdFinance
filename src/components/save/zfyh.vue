<template lang="html">
  <Panel title="支付优惠" :class="$style.panel">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components:{
    Panel,
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-bottom: 0;
  >h4{
    text-align: left;
  }
  img{
    width: 100%;
  }
}
</style>
