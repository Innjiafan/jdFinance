<template lang="html">
  <div title="" :class="$style.panel">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&height=420" alt="">
    <div :class="$style.rImgBox">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10835/30/6723/11247/5c244816E1faf5ca3/0982f1ffc9388654.png?width=335&height=200" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/19865/25/9369/14064/5c7e163fE001fbaca/c3b410f6da987650.png?width=335&height=200" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.panel{
  margin-bottom: 10px;
  overflow: auto;
  img{
    width: 50%;
    float: left;
  }
  .rImgBox{
    width: 50%;
    float: left;
    img{
      width: 100%;
      padding-bottom: 6px;
      background-color: #fff;
    }
  }
}

</style>
