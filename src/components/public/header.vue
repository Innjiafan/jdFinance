<template>
  <div :class="$style.header">
    <div :class="$style.left">< </div>
    <div :class="$style.center">{{title}}</div>
    <div :class="$style.right">...</div>
  </div>
</template>

<script>
export default {
  props:{
    title :{
      type:String,
      default:""
    }
  }
}
</script>

<style lang="scss" module>
  .header{
    color:#333;
    min-height: 44px;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    background: #fff;
    z-index: 100;
    border-bottom: 1px solid #eee;
    margin-bottom: 44px;
    .left{
      position: absolute;
      top: 12px;
      left: 10px;
      bottom: 12px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      box-sizing: border-box;
      //background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFW…3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat 50%;
      //background-position: 0 0;
      //background-size: contain;
    }
    .center{
    //  position: absolute;
      //left: 32px;
      text-align: center;
    }
    .right{
      position: absolute;
      top: 12px;
      right: 10px;
      bottom: 12px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAAG2I8urAAAAAXNSR…jDF716iTbdQ8b4AZxJwb2qZlv2Rn3vOs9L5C/z9d95fwDELzC7i+rQHQAAAABJRU5ErkJggg==) no-repeat 50%;
      // background-size: 20px;
    }
  }
</style>
