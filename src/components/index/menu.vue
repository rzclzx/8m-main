<template>
  <div class="navigation" >
    <div class="navigation-content" @touchmove.prevent>
      <st-row class="header" justify="between" align="center">
        <div class="logo" :class="lang"></div>
        <div class="close" @click="close"></div>
      </st-row>
      <div class="menu">
        <a class="menu-content" @click="close">{{language.index}}</a>
        <a class="menu-content" :href="apiConfig.otcDomain">{{language.productTitle5}}</a>
        <a class="menu-content" :href="apiConfig.spotDomain">{{language.productTitle4}}</a>
        <a class="menu-content" :href="apiConfig.swapsDomain">{{language.productTitle2}}<span></span></a>
        <a class="menu-content" :href="apiConfig.loanDomain">{{language.productTitle1}}<span></span></a>
        <a class="menu-content" :href="apiConfig.labsDomain">{{language.productTitle3}}</a>
        <a class="menu-content" :href="apiConfig.userDomain+'account'">{{language.wallet}}</a>
        <a class="menu-content" :href="apiConfig.userDomain+'users'">{{language.userInfo}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import languageData from "../../assets/js/laguague";
  import ApiConfig from '../../../myConfig/api.config'

  export default {
    name: 'navigation',
    props: {
      callback: {
        type: Function,
        required: true
      },
      lang: String
    },
    data () {
      return {
        language:languageData['cn'],
        apiConfig: ApiConfig
      }
    },
    watch: {
      'lang' () {
        this.language = languageData[this.lang]
      }
    },
    methods: {
      close () {
        this.callback()
      }
    },
    created () {
      this.language = languageData[this.lang]
    }
  }


</script>

<style lang="less" scoped>
  .navigation-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    overflow: hidden;
    z-index: 200;
    color: #fff;
    .header {
      height: 1.2rem;
      .logo {
        width: 2.02rem;
        height: .55rem;
        margin-left: .32rem;
        background: url('../../assets/img/logozh@2x.png');
        background-size: 100% 100%;
      }
      .en {
        background: url('../../assets/img/logoen@2x.png');
        background-size: 100% 100%;
      }
      .ko {
        background: url('../../assets/img/logoen@2x.png');
        background-size: 100% 100%;
      }
      .ru {
        background: url('../../assets/img/logoen@2x.png');
        background-size: 100% 100%;
      }
      .ja {
        background: url('../../assets/img/logoen@2x.png');
        background-size: 100% 100%;
      }
      .close {
        width: .44rem;
        height: .44rem;
        background: url('../../assets/img/x@2x.png');
        background-size: 100% 100%;
        margin-right: .3rem;
      }
    }
    .menu {
      .menu-content {
        display: block;
        height: 1.2rem;
        line-height: 1.2rem;
        padding-left: .72rem;
        font-family: PingFangSC-Light;
        font-size: .34rem;
        color: #CBD7F0;
        span {
          display: inline-block;
          width: .28rem;
          height: .32rem;
          position: relative;
          left: .1rem;
          top: -.15rem;
          background: url('../../assets/img/hot.svg');
          background-size: 100% 100%;
        }
      }
    }
  }
</style>
