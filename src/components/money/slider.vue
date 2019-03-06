<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
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
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/29551/36/9358/28128/5c7e108fEa4fa7593/f81206e0d93e9716.jpg?width=750&height=400"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/14504/8/9396/65838/5c7e3d8dEb944fc37/06fea802658ac774.jpg?width=750&height=400"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/32144/15/4441/105785/5c7cc9d7E1d5763bd/debe8907a6ac002e.png?width=750&height=400"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/28859/18/9187/135074/5c7cb0d8E13407e55/8ac363b3ad80666a.jpg?width=750&height=400"
                  },{
                    href:"save",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/14504/8/9396/65838/5c7e3d8dEb944fc37/06fea802658ac774.jpg?width=750&height=400"
                  }
                ]
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

</style>
