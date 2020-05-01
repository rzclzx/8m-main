<template>
  <div class="language" @touchmove.prevent>
    <st-row class="header" justify="between" align="center">
      <div class="logo" :class="lang"></div>
      <div class="close" @click="close"></div>
    </st-row>
    <div class="menu">
      <a class="menu-content" v-on:click="choice('cn')"><span></span>{{language.cn}}</a>
      <a class="menu-content" @click="choice('en')"><span></span>{{language.en}}</a>
      <a class="menu-content" @click="choice('ko')"><span></span>{{language.ko}}</a>
      <a class="menu-content" @click="choice('ja')"><span></span>{{language.ja}}</a>
      <a class="menu-content" @click="choice('ru')"><span></span>{{language.ru}}</a>
    </div>
  </div>
</template>

<script>
  import languageData from "../../assets/js/laguague";
  import ApiConfig from '../../../myConfig/api.config'

  export default {
    name: 'language',
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
        apiConfig: ApiConfig,
      }
    },
    methods: {
      close () {
        this.callback()
      },
      choice (cn) {
        this.$emit('languageChild', cn)
        this.close()
      }
    }
  }


</script>

<style lang="less" scoped>
  .language {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 220;
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
          width: .48rem;
          height: .32rem;
          margin: .2rem .2rem 0 0;
        }
        &:nth-child(1) {
          span {
            background: url('../../assets/img/zh@2x.png');
            background-size: 100% 100%;
          }
        }
        &:nth-child(2) {
          span {
            background: url('../../assets/img/en@2x.png');
            background-size: 100% 100%;
          }
        }
        &:nth-child(3) {
          span {
            background: url('../../assets/img/ko@2x.png');
            background-size: 100% 100%;
          }
         }
        &:nth-child(4) {
          span {
            background: url('../../assets/img/ja@2x.png');
            background-size: 100% 100%;
          }
        }
        &:nth-child(5) {
          span {
            background: url('../../assets/img/ru@2x.png');
            background-size: 100% 100%;
          }
        }

      }
    }
  }
</style>
