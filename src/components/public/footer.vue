<template lang="html">
        <ul :class="$style.content">
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
</template>

<script>
export default{
  
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
    .content{
      @include flex;
      background: #F5F5F5;
      li{
        font-size: 12px;
        line-height: 1.6;
        padding: 12px 16px;
        text-align: center;
        color: #999;
        box-sizing: border-box;
        border-top: 1px solid #eee;
      }
    }
</style>
