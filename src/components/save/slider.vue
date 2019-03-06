<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
          <ul  v-for="item in imgItems" :key="item.img">
            <router-link :to="{ name: item.href}">
                <img :src="item.src">
            </router-link>
          </ul>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/31478/21/1603/51105/5c54f148Ef11343fa/678c05d4b31cfb57.jpg?width=750&height=360"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/21848/40/8618/49257/5c77ad0fE0f4e7a45/45c1d695de4cc022.jpg?width=750&height=360"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/19517/4/8521/35318/5c77a824E314d9b5d/9f5ee9955c0249f1.jpg?width=750&height=360"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/19517/4/8521/35318/5c77a824E314d9b5d/9f5ee9955c0249f1.jpg?width=750&height=360"
                  }],
            imgItems:[{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/21943/31/9368/60477/5c7e1874E47298d34/3e6c51a51f63811e.png?width=750&height=480"
                  }]
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 44px;
    img{
      width: 100%;
    }
  }
  .list{
    width: 100%;
    margin-top: 5px;
    overflow: auto;
    img{
      width: 50%;
      float: left;
    }
  }

</style>
