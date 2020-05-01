<template>
  <div class="index">
    <div class="content">
      <st-row class="common-header" align="center" v-show="isShowFlag">
        <a class="logo" :class="lang" href="javascript:;" ></a>
        <div class="blank"></div>
        <a class="portrait" :style="backgroundDiv" :href="apiConfig.userDomain+'users'"></a>
        <div class="menu" @click="openMenu"></div>
      </st-row>
      <transition name="fade">
        <st-row :class="['common-header', 'header-sliding' ]" ref="header_sliding" align="center" v-show="isShow">
          <a class="logo" :class="lang" href="javascript:;"></a>
          <div class="blank"></div>
          <a class="portrait" :style="backgroundDiv" :href="apiConfig.userDomain+'users'"></a>
          <div class="menu" @click="openMenu"></div>
        </st-row>
      </transition>
      <div class="banner-wrapper">
        <banner :lang="lang"></banner>
      </div>
      <st-row class="notice" align="center">
        <div class="horn"></div>
        <a class="notice_title" :href="notice[0] && notice[0].html_url" target="_blank"> {{ notice[0] && notice[0].title }}</a>
      </st-row>
      <div class="swiper-container notice-list">
        <div class="swiper-wrapper market">
          <div class="swiper-slide"
               v-for="(item, index) in contractList"
               @click="linkSwap(item.id)"
               :key="index"
               ref="slideEl"
          >
            <p style="margin-top: .6rem;">{{ item.name }}</p>
            <p>{{ language.productTitle2 }}</p>
            <p style="margin: .14rem 0 .18rem;" :style="{color: swapTicker[item.id].change > 0 ? '#48BA99' : swapTicker[item.id].change === 0 ? '' : '#B44268'}">{{ swapTicker[item.id].last | splitFormat(2) }}</p>
            <p :style="{color: swapTicker[item.id].change > 0 ? '#48BA99' : swapTicker[item.id].change === 0 ? '' : '#B44268'}">{{ swapTicker[item.id].change > 0 ? '+' : '' }}{{ swapTicker[item.id].change }}%</p>
          </div>
        </div>
        <a class="moveRight" @click="moveRight"></a>
      </div>
      <!--<st-row class="notice-list" >-->
        <!--&lt;!&ndash;<a class="moveLeft" @click="moveLeft"></a>&ndash;&gt;-->
        <!--<st-row class="market" justify="between">-->
          <!--<div v-for="(item, index) in swapDataLB"-->
               <!--@click="linkSwap(item.id)"-->
               <!--:key="index"-->
          <!--&gt;-->
            <!--<p style="margin-top: .6rem;">{{ item.name }} </p>-->
            <!--<p>{{ language.productTitle2 }}</p>-->
            <!--<p style="margin: .14rem 0 .18rem;">{{ swapTicker[item.id].last | splitFormat(2) }}</p>-->
            <!--<p :style="{color: swapTicker[item.id].change > 0 ? '#48BA99' : swapTicker[item.id].change === 0 ? '' : '#B44268'}">{{ swapTicker[item.id].change > 0 ? '+' : '' }}{{ swapTicker[item.id].change }}%</p>-->
          <!--</div>-->
        <!--</st-row>-->
        <!--&lt;!&ndash;<a class="moveRight" @click="moveRight"></a>&ndash;&gt;-->
      <!--</st-row>-->
      <div class="product">
        <st-row class="product-title" justify="between" align="center">
          <div class="title-content" :class="signifier === 1 ?  'bgStyle' : ''" @click="move(1)" align="center">
            <span></span>
            <div>
              <em >{{ language.productTitle1 }}</em>
              <!--<p >{{ language.productTitle1_c_1 }}</p>-->
            </div>
          </div>
          <div class="title-content" :class="signifier === 2 ?  'bgStyle' : ''" @click="move(2)" align="center">
            <span></span>
            <div>
              <em >{{ language.productTitle2 }}</em>
              <!--<p >{{ language.productTitle2_c_1 }}</p>-->
            </div>
          </div>
          <div class="title-content" :class="signifier === 3 ?  'bgStyle' : ''" @click="move(3)" align="center">
            <span></span>
            <div>
              <em >{{ language.productTitle3 }}</em>
              <!--<p >{{ language.productTitle3_c_1 }}</p>-->
            </div>
          </div>
          <div class="title-content" :class="signifier === 4 ?  'bgStyle' : ''" @click="move(4)" align="center">
            <span></span>
            <div>
              <em>{{ language.productTitle4 }}</em>
              <!--<p>{{ language.productTitle4_c_1 }}</p>-->
            </div>
          </div>
          <div class="title-content" :class="signifier === 5 ?  'bgStyle' : ''" @click="move(5)" align="center">
            <span></span>
            <div>
              <em>{{ language.productTitle5 }}</em>
              <!--<p>{{ language.productTitle5_c_1 }}</p>-->
            </div>
          </div>
        </st-row>
        <st-row class="product-content" justify="between">
          <div :class="signifier === 1 ? 'product-left' : 'product-left dis'">
            <h2>
              {{ language.productTitle1_c_1 }}
            </h2>
            <st-row>
              <ul>
                <li>
                  <span></span>{{ language.productTitle1_c_2 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle1_c_3 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle1_c_4 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle1_c_5 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle1_c_6 }}
                </li>
              </ul>
            </st-row>
            <a :href="apiConfig.loanDomain">
              {{ language.btn }}
            </a>
          </div>
          <div :class="signifier === 2 ? 'product-left' : 'product-left dis'">
            <h2>
              {{ language.productTitle2_c_1 }}
            </h2>
            <st-row>
              <ul>
                <li>
                  <span></span>{{ language.productTitle2_c_2 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle2_c_3 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle2_c_4 }}
                </li>
                <li>
                  <!--<span></span>{{ language.productTitle2_c_5 }}-->
                </li>
                <li>
                  <span></span>{{ language.productTitle2_c_6 }}
                </li>
              </ul>
            </st-row>
            <a :href="apiConfig.swapsDomain">
              {{ language.btn }}
            </a>
          </div>
          <div :class="signifier === 3 ? 'product-left' : 'product-left dis'">
            <h2>
              {{ language.productTitle3_c_1 }}
            </h2>
            <st-row>
              <ul>
                <li>
                  <span></span>{{ language.productTitle3_c_2 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle3_c_3 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle3_c_4 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle3_c_5 }}
                </li>
              </ul>
            </st-row>
            <a :href="apiConfig.labsDomain">
              {{ language.btn }}
            </a>
          </div>
          <div :class="signifier === 4 ? 'product-left' : 'product-left dis'">
            <h2>
              {{ language.productTitle4_c_1 }}
            </h2>
            <st-row>
              <ul>
                <li>
                  <span></span>{{ language.productTitle4_c_2 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle4_c_3 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle4_c_4 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle4_c_5 }}
                </li>
              </ul>
            </st-row>
            <a :href="apiConfig.spotDomain">
              {{ language.btn }}
            </a>
          </div>
          <div :class="signifier === 5 ? 'product-left' : 'product-left dis'">
            <h2>
              {{ language.productTitle5_c_1 }}
            </h2>
            <st-row>
              <ul>
                <li>
                  <span></span>{{ language.productTitle5_c_2 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle5_c_3 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle5_c_4 }}
                </li>
                <li>
                  <span></span>{{ language.productTitle5_c_5 }}
                </li>
              </ul>
            </st-row>
            <a :href="apiConfig.otcDomain">
              {{ language.btn }}
            </a>
          </div>
          <div class="product-right">
            <div :class="signifier === 1 ? '' : 'dis'"></div>
            <div :class="signifier === 2 ? '' : 'dis'"></div>
            <div :class="signifier === 3 ? '' : 'dis'"></div>
            <div :class="signifier === 4 ? '' : 'dis'"></div>
            <div :class="signifier === 5 ? '' : 'dis'"></div>
          </div>
        </st-row>
      </div>
      <div class="service-platform">
        <h2>{{ language.serviceTitle }}</h2>
        <st-row class="service-inner">
          <div class="service-content">
            <div class="picture picture1"></div>
            <h3>{{ language.service_title1 }}</h3>
            <p>{{ language.service_title1_content1 }}</p>
            <p>{{ language.service_title1_content2 }}</p>
          </div>
          <div class="service-content">
            <div class="picture picture2"></div>
            <h3>{{ language.service_title2 }}</h3>
            <p>{{ language.service_title2_content1 }}</p>
            <p>{{ language.service_title2_content2 }}</p>
          </div>
        </st-row>
        <st-row class="service-inner" style="margin: 1.2rem 0 1.1rem 0;" justify="center">
          <div class="service-content">
            <div class="picture picture3"></div>
            <h3>{{ language.service_title3 }}</h3>
            <p>{{ language.service_title3_content1 }}</p>
            <p>{{ language.service_title3_content2 }}</p>
          </div>
          <div class="service-content">
            <div class="picture picture4"></div>
            <h3>{{ language.service_title4 }}</h3>
            <p>{{ language.service_title4_content1 }}</p>
            <p>{{ language.service_title4_content2 }}</p>
          </div>
        </st-row>
      </div>
      <div class="down-load">
        <h2>{{ language.down_load_title }}</h2>
        <p>{{ language.down_load_content1 }}</p>
        <p>{{ language.down_load_content2 }}</p>
        <a class="download-btn" :href="apiConfig.downURL">{{ language.down_load }}</a>
        <img class="iphone" :src=phoneURL alt="">
      </div>
      <st-row class="footerBlank footer" align="center" justify="between" v-if="footerBlank">
        <p>Copyright © 2018 58COIN. All rights reserved.</p>
        <div class="language" @click="openLanguage">
          <img :src=imgURL ref="img" alt="">
          <p>{{language.languages}}</p>
          <span></span>
        </div>
      </st-row>
      <st-row class="footer" align="center" justify="between">
        <p>Copyright © 2018 58COIN. All rights reserved.</p>
        <div class="language" @click="openLanguage">
          <img :src=imgURL ref="img" alt="">
          <p>{{language.languages}}</p>
          <span></span>
        </div>
      </st-row>
    </div>
    <navigation :callback="close"  :lang="lang" v-if="isNavigation"></navigation>
    <language :callback="close" :lang="lang" v-on:languageChild="MsgFromChild" v-if="isLanguage"></language>
  </div>
</template>

<script>
  import Banner from '../components/index/banner.vue'
  import languageData from "../assets/js/laguague"
  import ApiConfig from '../../myConfig/api.config'
  import service from '../server/index'
  import homeapi from '../server/home'
  import navigation from '../components/index/menu.vue'
  import Language from '../components/index/language.vue'

  export default {
    name: 'index',
    components: {
      Banner,
      navigation,
      Language
    },
    data () {
      return {
        apiConfig: ApiConfig,
        swapDataLB: [],
        language:languageData['cn'],
        lang: 'cn',
        signifier: 1,
        swapTicker: {},
        swapTickerTimer: null,
        pagesize: 3,
        contractList: [],
        isNavigation: false,
        isLanguage: false,
        imgURL: require('../assets/img/zh@2x.png'),
        notice: '',
        isShow: false,
        isShowFlag: true,
        phoneURL: require('../assets/img/zh-down@2x.png'),
        footerBlank: true,
        backgroundDiv: {
          background: 'url(' + require('../assets/img/weidenglu@2x.png') + ')',
          backgroundSize: "100% 100%"
        }
      }
    },
    watch: {
      'lang' () {
        this.getList()
        console.log(this.lang)
        let language = ''
        if (this.lang === 'cn') {
          language = 'zh'
        } else {
          language = this.lang
        }
        this.imgURL = require('../assets/img/' + language + '@2x.png')
        this.phoneURL = require('../assets/img/' + language + '-down@2x.png')
        document.documentElement.scrollTop = 0
      }
    },
    methods: {
      //获取通知列表
      getList () {
        let zendeskLocal;
        if (this.lang === 'cn') {
          // debugger
          zendeskLocal = 'zh-cn'
        } else if (this.lang === 'en') {
          zendeskLocal = 'en-us'
        } else {
          zendeskLocal = this.lang
        }
        homeapi.getAnnouncement(zendeskLocal || 'en-us', '360000038673')
          .then(res => {
            res.articles && (this.notice = res.articles.slice(0, 4))
          })
          .catch(err => {
            console.log(err)
          })
      },
      move (signifier) {
        this.signifier = signifier
      },
      moveLeft () {
        if (this.pagesize === 3) {
          return
        }
        this.pagesize-=3
        if (this.pagesize <=3) {
          // this.$refs.up.style.opacity = '0.5'
          // this.$refs.down.style.opacity = '1'
          this.swapDataLB = this.contractList.slice(0, 3)
        } else {
          // this.$refs.up.style.opacity = '1'
          // this.$refs.down.style.opacity = '1'
          this.swapDataLB = this.contractList.slice(this.pagesize-3, this.pagesize)
        }
      },
      moveRight1 () {
        if (this.pagesize >= this.contractList.length) {
          return
        }
        this.pagesize+=3
        if (this.pagesize >= this.contractList.length) {
          this.swapDataLB = this.contractList.slice(this.contractList.length - 3, this.contractList.length)
          // this.$refs.down.style.opacity = '0.5'
          // this.$refs.up.style.opacity = '1'
        } else {
          // this.$refs.up.style.opacity = '1'
          // this.$refs.down.style.opacity = '1'
          this.swapDataLB = this.contractList.slice(this.pagesize - 3, this.pagesize)
        }
      },
      moveRight () {
        let index = this.contractList.length-3
        document.getElementsByClassName('swiper-slide')[index].style.transform = 'translate3d(0px, 0px, 0px)'
      },
      linkSwap (id) {
        window.location.href = ApiConfig.swapsDomain + 'trade/' + id
      },
      close() {
        this.isNavigation = false
        this.isLanguage = false
        this.isShow = true
      },
      openMenu () {
        this.isNavigation = true
        this.isShow = false
      },
      MsgFromChild (data) {
        this.language = languageData[data]
        this.lang = data
        this.setCookie('locale',this.lang,10, ApiConfig.domain)
      },
      openLanguage () {
        this.isLanguage = true
        this.isShow = false
      },
      isShowHeader: function (el, flag, height, type) {

        !height && (height = el.offsetHeight)
        !type && (type = 'bottom')
        let pageHeight = 0
        let scrollTop = 0
        let html = window.document.documentElement
        let body = window.document.body
        scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (html) {
          pageHeight = scrollTop + html.clientHeight
        } else if (body) {
          pageHeight = scrollTop + body.clientHeight
        }
        if (scrollTop > 110) {
          this.footerBlank = false
        } else {
          this.footerBlank = true
        }
        // 顶部位置
        if (type === 'top') {
          if (flag && scrollTop >= height) {
            setTimeout(function () {
              if (el && el.classList) {
                el.classList.add('no-transiton')
              }
            }, 0)
          }
          return scrollTop >= height
        }
        if (flag && pageHeight >= el.offsetTop + height && scrollTop < el.offsetHeight + el.offsetTop - height) {
          setTimeout(function () {
            if (el.classList) {
              el.classList.add('no-transiton')
            }
          }, 0)
        }
        return pageHeight >= el.offsetTop + height && scrollTop < el.offsetHeight + el.offsetTop - height
      },
      show (firstEnter) {
        this.isShow = this.isShowHeader(this.$refs.header_sliding, firstEnter, 61, 'top')
        this.isShowFlag = !this.isShow
      },
      getContractList () {
        service.getContractList()
          .then(res => {
            this.contractList = res.data.contractList
            // setTimeout(() => {
            //   this.swapDataLB = this.contractList.slice(0, 3)
            // },500)
            // console.log(this.contractList)
            // this.getSwapTicker()
          })
          .catch(err => {
            console.log(err)
          })
      },
      getSwapTicker () {
        service.getSwapAllTicker()
          .then(res => {
            if (res.data && res.data.ticker_all) {
              for (let i=0;i<res.data.ticker_all.length;i++){
                this.swapTicker[i+1] = res.data.ticker_all[i]
              }
            }
            this.swapTickerTimer = setTimeout(() => {
              this.getSwapTicker()
            }, 5000)
          })
          .catch(err => {
            console.log(err)
            this.swapTickerTimer = setTimeout(() => {
              this.getSwapTicker()
            }, 10000)
          })
      },
      getCookie (c_name)
      {
        if (document.cookie.length>0)
        {
          let c_start = document.cookie.indexOf(c_name + "=")
          if (c_start != -1)
          {
            c_start = c_start + c_name.length+1
            let c_end = document.cookie.indexOf(";",c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
          }
        }
        return ""
      },
      setCookie (c_name, value, expiredays, domain) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        var stDomain = ''
        if (domain) {
          stDomain = ';domain=' + domain
        }
        document.cookie = c_name+ "=" + escape(value)+
          ((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) + stDomain
      },
      checkCookie (token) {
        let locale = this.getCookie(token)
          if (locale != null && locale != "") {
            this.backgroundDiv = {
              background: 'url(' + require('../assets/img/yidenglu@2x.png') + ')',
                backgroundSize: "100% 100%"
            }
          } else {
            // locale=prompt('Please enter your name:',"")
            // if (locale != null && locale!= "")
            // {
            //   this.setCookie('locale',this.lang,10)
            // }
            this.backgroundDiv = {
              background: 'url(' + require('../assets/img/weidenglu@2x.png') + ')',
              backgroundSize: "100% 100%"
            }
          }
        }
     },
    mounted () {
      //获取通知
      this.getList()
      //header
      let firstEnter = true
      this.show(firstEnter)
      window.onscroll = (e) => {
        // console.log(e)
        this.show(firstEnter)
        firstEnter = false
      }
      setTimeout(() => {
        var Zswiper = new Swiper('.swiper-container',{
          slidesPerView : 3,
          slidesPerGroup : 1,
          observer:true,
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          // loop : true,
          // loopedSlides :8,
        })
      },50)
      // 获取语言
      if (this.getCookie('locale')) {
        this.lang = this.getCookie('locale')
        this.language = languageData[this.getCookie('locale')]
      }
    },
    created () {
      this.getSwapTicker()
      this.getContractList()
      this.checkCookie('token')
    },
    beforeDestroy () {
      window.onscroll = null
      clearTimeout(this.swapTickerTimer)
      this.swapTicker = null
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/index";
  @import "../assets/css/theme";
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  .index {
    width: 100%;
    height: 100%;
    background: #1A1A36;
    position: relative;
  }
  .content {
    /*overflow: hidden;*/
  }
  .common-header {
    width: 100%;
    height: 1.2rem;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    .logo {
      display: block;
      width: 2.02rem;
      height: 0.55rem;
      margin-left: .33rem;
      background: url('../assets/img/logozh@2x.png');
      background-size: 100% 100%;
    }
    .en {
      background: url('../assets/img/logoen@2x.png');
      background-size: 100% 100%;
    }
    .ko {
      background: url('../assets/img/logoen@2x.png');
      background-size: 100% 100%;
    }
    .ru {
      background: url('../assets/img/logoen@2x.png');
      background-size: 100% 100%;
    }
    .ja {
      background: url('../assets/img/logoen@2x.png');
      background-size: 100% 100%;
    }
    .portrait {
      display: block;
      width: .4rem;
      height: .4rem;
    }
    .menu {
      width: .44rem;
      height: .44rem;
      margin: 0 .3rem 0 .34rem;
      background: url('../assets/img/menu@2x.png');
      background-size: 100% 100%;
    }
  }
  .header-sliding {
    background: #11112C;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: transform 1s;*/
  /*}*/
  /*.fade-enter, .fade-leave-to {*/
    /*transform: translateY(0);*/
  /*}*/
  .blank {
    .flex-grow();
  }
  .notice {
    width: 100%;
    height: .74rem;
    padding-right: 1rem;
    border-bottom: 1px solid #212649;
    .horn {
      width: .24rem;
      height: .24rem;
      margin: 0 .18rem 0 .41rem;
      background: url('../assets/img/trumpet@2x.png');
      background-size: 100% 100%;
    }
    .notice_title {
      display: block;
      font-size: .26rem;
      font-weight: 200;
      color: #CBD7F0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap
    }
  }
  .swiper-container {
    width: 100%;
    height: 2.84rem;
  }
  .notice-list{
    width: 100%;
    height: 2.74rem;
    position: relative;
    /*a {*/
      /*display: block;*/
      /*width: .3rem;*/
      /*height: .6rem;*/
      /*margin-top: 1.1rem;*/
    /*}*/
    .market {
      /*width: 100%;*/
      /*height: 2.84rem;*/
      /*padding: 0 .3rem 0;*/
      /*overflow: hidden;*/
      div {
        width: 33.3%;
        p {
          font-family: PingFangSC-Regular;
          text-align: center;
          &:nth-child(1) {
            line-height: .22rem;
            font-size: .22rem;
            color: #CBD7F0;
          }
          &:nth-child(2) {
            margin-top: 2px;
            line-height: .22rem;
            font-size: .22rem;
            color: #CBD7F0;
          }
          &:nth-child(3) {
            line-height: .36rem;
            font-size: .36rem;
            color: #32B28F;
          }
          &:nth-child(4) {
            font-family: Helvetica;
            line-height: .28rem;
            font-size: .28rem;
            color: #32B28F;
          }
        }
      }

    }
    .moveRight {
      display: block;
      width: .3rem;
      height: .6rem;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background: url('../assets/img/sliding.svg');
      background-size: 100% 100%;
      z-index: 100;
    }
    /*.moveLeft {*/
      /*transform: rotate(180deg);*/
      /*background: url('../assets/img/sliding.svg');*/
      /*background-size: 100% 100%;*/
    /*}*/
  }
  .product {
    width: 100%;
    height: 10.1rem;
    .product-title {
      height: 1.2rem;
      width: 100%;
      .title-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          display: block;
          width: .6rem;
          height: .6rem;
          /*margin: 0 .1rem 0 .3rem;*/
        }
        &:first-child {
          margin-left: .3rem;
          span {
            background: url('../assets/img/daikuang@2x.png');
            background-size: 100% 100%;
          }
        }
        &:nth-child(2) {
          span {
            background: url('../assets/img/yongxu@2x.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        &:nth-child(3) {
          span {
            background: url('../assets/img/rongbi@2x.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        &:nth-child(4) {
          span {
            background: url('../assets/img/bb@2x.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        &:nth-child(5) {
          margin-right: .3rem;
          span {
            background: url('../assets/img/OTC@2x.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        em {
          display: none;
          word-wrap: break-word;
        }
        p {
          display: none;
        }
      }
      .bgStyle {
        width: 3rem;
        height: 1.2rem;
        background: url('../assets/img/selected@2x.png');
        background-size: 100% 100%;
        text-align: left;
        border-bottom: 1px solid #7E9EFD;
        span {
          display: block;
          width: .6rem;
          height: .6rem;
          margin: 0 .3rem 0 .3rem;
        }
        div {
          width: 1.8rem;
          em {
            display: block;
            font-family: PingFangSC-Regular;
            font-size: .26rem;
            color: #CBD7F0;
          }
          p {
            display: block;
            font-family: PingFangSC-Light;
            font-size: .2rem;
            color: #CBD7F0;
            word-wrap: break-word;
          }
        }
        &:first-child {
          margin-left: 0;
        }
        &:nth-child(5) {
          margin-right: 0;
        }
      }
    }
    .product-content {
      width: 100%;
      height: 8.9rem;
      position: relative;
      background: #1A1A36;
      a {
        display: block;
        width: 1.8rem;
        height: .58rem;
        margin: .52rem 0 0 .54rem;
        text-align: center;
        line-height: .58rem;
        border: 1px solid #3F496A;
        border-radius: 3px;
        font-family: PingFangSC-Light;
        font-size: .24rem;
        color: #667AA0;
      }
      .product-left {
        background: none;
        z-index: 10;
        h2 {
          margin: .7rem 0 .4rem .54rem;
          font-family: PingFangSC-Light;
          font-size: .36rem;
          color: #CBD7F0;
        }
        ul {
          margin-left: .54rem;
          li {
            line-height: .56rem;
            /*font-family: PingFangSC-Light;*/
            font-size: .26rem;
            color: #CBD7F0;
            span {
              display: inline-block;
              margin-right: .19rem;
              width: .05rem;
              height: .05rem;
              border-radius: 50%;
              background: #7E9EFD;
              vertical-align: middle;
            }
          }
        }
      }
      .product-right {
        position: absolute;
        bottom: .4rem;
        right: 0;
        div {
          width: 6rem;
          height: 6rem;
          &:nth-child(1) {
            position: relative;
            top: .2rem;
            background: url('../assets/img/pic-mortgageloan.png');
            background-size: 100% 100%;
          }
          &:nth-child(2) {
            background: url('../assets/img/pic-swap.png');
            background-size: 100% 100%;
          }
          &:nth-child(3) {
            background: url('../assets/img/pic-labs.png');
            background-size: 100% 100%;
          }
          &:nth-child(4) {
            background: url('../assets/img/pic-spot.png');
            background-size: 100% 100%;
          }
          &:nth-child(5) {
            background: url('../assets/img/pic-otc.png');
            background-size: 100% 100%;
          }
        }
      }
      .dis {
        display: none;
      }
    }
  }
  .service-platform {
    width: 100%;
    /*height: 8.9rem;*/
    /*background: #11112C;*/
    border-top: 1px solid #11112C;
    border-bottom: 1px solid #11112C;
    background: url('../assets/img/line.png') #11112C;
    background-size: 100% 100%;
    h2 {
      width: 100%;
      margin: 1rem auto .97rem;
      text-align: center;
      font-family: PingFangSC-Light;
      font-size: .36rem;
      color: #CBD7F0;
    }
    .service-inner {
      justify-content: space-around;
      .service-content {
        width: 50%;
        text-align: center;
        .picture {
          width: .68rem;
          height: .78rem;
          margin: 0 auto;
        }
        .picture1 {
          background: url('../assets/img/chanyan@2x.png');
          background-size: 100% 100%;
        }
        .picture2 {
          background: url('../assets/img/zijin@2x.png');
          background-size: 100% 100%;
        }
        .picture3 {
          background: url('../assets/img/jishu@2x.png');
          background-size: 100% 100%;
        }
        .picture4 {
          background: url('../assets/img/phone@2x.png');
          background-size: 100% 100%;
        }
        h3 {
          margin: .24rem auto .12rem;
          padding: 0 .3rem 0;
          font-family: PingFangSC-Light;
          font-size: .28rem;
          color: #CBD7F0;
        }
        p {
          font-family: PingFangSC-Light;
          font-size: .22rem;
          color: #7183A9;
          padding: 0 .3rem 0;
        }
      }
    }

  }
  .down-load {
    width: 100%;
    /*height: 8.9rem;*/
    background: url('../assets/img/map@2x.png') #1A1A36;
    background-size: 100% 100%;
    border-top: 1px solid #11112C;
    h2 {
      width: 100%;
      margin: .64rem 0 .16rem;
      text-align: center;
      font-family: PingFangSC-Light;
      font-size: .36rem;
      color: #CBD7F0;
    }
    p {
      width: 100%;
      text-align: center;
      padding: 0 .3rem 0;
      font-family: PingFangSC-Light;
      font-size: .24rem;
      color: #7183A9;
    }
    .download-btn {
      display: block;
      width: 1.8rem;
      height: .58rem;
      line-height: .58rem;
      margin: .25rem auto .5rem;
      border: 1px solid #3F496A;
      border-radius: 3px;
      text-align: center;
      font-family: PingFangSC-Light;
      font-size: .24rem;
      color: #7183A9;
    }
    .iphone {
      width: 5.07rem;
      height: 5.64rem;
      display: block;
      margin: 0 auto;
    }
  }
  .footerBlank {

    position: fixed;
    bottom: 0;
    z-index: 150;
  }
  .footer {
    width: 100%;
    height: 1.1rem;
    background: #11112C;
    p {
      margin-left: .3rem;
      opacity: 0.8;
      font-family: PingFangSC-Regular;
      font-size: .2rem;
      color: #7183A9;
    }
    .language {
      width: 1.6rem;
      height: .44rem;
      margin-right: .3rem;
      padding: 0 .1rem 0 .1rem;
      border: 1px solid #3F496A;
      border-radius: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      img {
        width: .24rem;
        height: .16rem;
      }
      p {
        margin-left: 0;
        font-family: PingFangSC-Light;
        font-size: .2rem;
        color: #7183A9;
      }
      span {
        display: block;
        width: .12rem;
        height: .08rem;
        background: url('../assets/img/triangle.svg');
        background-size: 100% 100%;
      }
    }
  }

</style>
