<template lang="html">
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'home'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90" alt="">
                    <p class="blue">首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'money'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60" alt="">
                    <p>赚钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'borrow'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60" alt="">
                    <p>借钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'save'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60" alt="">
                    <p>省钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'person'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60" alt="">
                    <p>金融会员</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .panel{
    @include panel;
    z-index: 101;
    position: fixed;
    left:0;
    right: 0;
    bottom: 0;
    height: 50px;
    margin: 0;
    >h4{
      display: none;
    }
    .content{
      @include flex(row);
      justify-content: space-around;
      li{
        text-align: center;
        a{
          text-decoration: none;
        }
        img{
          width: 22px;
          height: 22px;
          margin: 6px 0 3px 0;
        }
        p{
          color:#B1B4BB;
          font-size: 11px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;

        }
      }
    }
  }
</style>
