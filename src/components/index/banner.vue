<template>
  <st-row class="banner">
    <transition name='image'>
      <a class="carousel"
         :href="apiConfig.loanDomain"
         direction="column"
         v-show="0===mark"
         @touchstart='touchStart'
         @touchmove='touchMove'
         @touchend='touchEnd'
      >
        <div class="carousel-content">
          <h1>{{language.officially}}<span class="icon"></span></h1>
          <h3>{{language.officially_content}}</h3>
        </div>
        <div class="picture1"></div>
      </a>
    </transition>
    <transition name='image1'>
      <a class="carousel"
         :href="apiConfig.mainDomain+'agent/index'"
         direction="column"
         v-show="1===mark"
         @touchstart='touchStart'
         @touchmove='touchMove'
         @touchend='touchEnd'
      >
        <div class="carousel-content">
          <h1>{{language.global}}&nbsp;&nbsp;<span class="hot">{{language.hot}}</span><span class="icon"></span></h1>
          <h3>{{language.rebate1}}  {{language.rebate2}}  {{language.rebate3}}</h3>
        </div>
        <div class="picture2"></div>
      </a>
    </transition>
    <st-row class="bullet" justify="between" align="center">
      <span v-for='(item, index) in imgList.length' :key="index" :class="{'active':index===mark}" @click='change(index)'></span>
    </st-row>
  </st-row>
</template>

<script>
  import ApiConfig from '../../../myConfig/api.config'
  import languageData from "../../assets/js/laguague";
  export default {
    name: 'banner',
    props: {
      lang: String
    },
    data () {
      return {
        mark: 0,
        timer: null,
        imgList: [1, 2],
        apiConfig: ApiConfig,
        language:languageData['cn'],
        startX:0,//开始触摸的位置
        moveX:0,//滑动时的位置
        endX:0,//结束触摸的位置
        disX:0,//移动距离
      }
    },
    watch: {
      'lang' () {
        this.language = languageData[this.lang]
      }
    },
    methods: {
      change (i) {
        clearInterval(this.timer)
        this.mark = i
        setTimeout(this.play(), 5000)
      },
      autoPlay () {
        if (this.mark === 0) this.mark = 1
        else if (this.mark === 1) this.mark = 0
      },
      play () {
        this.timer = setInterval(this.autoPlay, 5000)
      },
      touchStart (ev) {
        ev = ev || event;
        // ev.preventDefault();

        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = ev.touches[0].clientX; // 记录开始位置
        }
      },
      touchMove (ev) {
        ev = ev || event;
        // ev.preventDefault();
      },
      touchEnd (ev) {
        ev = ev || event;
        // ev.preventDefault();
        if(ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;
          this.disX = endX-this.startX;
          // console.log(this.disX,'this.disX')
          if (this.disX > 50) {
            if (this.mark === 0) {
              this.mark = 1
              this.change(this.mark)
            } else {
              this.mark = 0
              this.change(this.mark)
            }
          }
          else {
            if (this.disX < -50) {
              if (this.mark === 0) {
                this.mark = 1
                this.change(this.mark)
              } else {
                this.mark = 0
                this.change(this.mark)
              }
            }
          }
        }
      }
    },
    mounted () {

    },
    created () {
      this.play()
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    /*height: 8.65rem;*/
    height: 9rem;
    position: relative;
  }
  .swiper-container1 {
    width: 100%;
    height: 8.65rem;
  }
  .carousel {
    display: block;
    .carousel-content {
      width: 100%;
      /*height: 1.75rem;*/
      h1 {
        font-size: .52rem;
        color: #CBD7F0;
        margin: .4rem .3rem .2rem .3rem;
        .icon {
          display: inline-block;
          width: .4rem;
          height: .4rem;
          margin-left: .16rem;
          background: url('../../assets/img/jin.svg');
          background-size: 100% 100%;
        }
      }
      h3 {
        font-size: .24rem;
        color: #E2E6ED;
        margin: 0 .3rem 0 .3rem;
      }
    }
    .picture1 {
      width: 7.5rem;
      height: 6.9rem;
      background: url('../../assets/img/banner@2x.png');
      background-size: 100% 100%;
    }
    .picture2 {
      width: 7.5rem;
      height: 6.9rem;
      background: url('../../assets/img/banner2@2x.png');
      background-size: 100% 100%;
    }

  }
  .bullet {
    width: .7rem;
    height: .16rem;
    position: absolute;
    bottom: .36rem;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: block;
      width: .1rem;
      height: .1rem;
      background: #555686;
      border-radius: 50%;
      cursor: pointer;
    }
    .active {
      width: .16rem;
      height: .16rem;
      border: 1px solid #697FD5;
      background: none;
    }
  }
  .image-enter-active {
    opacity: 1;
    transition: opacity 1s linear;
  }
  .image-leave-active {
    opacity: 1;
  }
  .image-enter {
    opacity: 0;
  }
  .image-leave {
    opacity: 0;
  }
  .image1-enter-active {
    opacity: 1;
    transition: opacity 1s linear;
  }
  .image1-leave-active {
    opacity: 1;
  }
  .image1-enter {
    opacity: 0;
  }

  .image1-leave {
    opacity: 0;
  }
</style>
