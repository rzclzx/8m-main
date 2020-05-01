<template>
  <div id="app">
    <router-view/>
  </div>
  <!--
  <div id="app" >
      <header>
        <div class="title">58COIN</div>
        <div class="introduce">{{language.introduce}}</div>
      </header>
      <div class="_form" :class="{bigger: aliCaptcha}">
        <div class="head-pic">
          <img src="./assets/img/head.png" alt="">
        </div>
        <p class="notice">{{language.commission}}</p>
        <div class="phone-num">
          <div class="countryCode" @click = "changeCountryCode" >
            <span>+{{proCode}}</span>
            <img src="./assets/img/arrow-down.svg" :class="{'up':showCountryList,'down':showCountryList === false}" alt="">
            <div class="countryCodeList" :class="{'fadeIn':showCountryList,'fadeOut':showCountryList === false}">
              <ul>
                <li v-for = "item in countryList" :key="item.id" :class = "{'active':proCode == item.code}" @click = "selectCode(item)">
                  <span v-if = "languageType == 'zh'">{{item.nameCh}}</span>
                  <span v-if = "languageType == 'en'">{{item.nameEn}}</span>
                  <span v-if = "languageType == 'ja'">{{item.nameJa}}</span>
                  <span v-if = "languageType == 'ko'">{{item.nameKo}}</span>
                  <span v-if = "languageType == 'ru'">{{item.nameRu}}</span>
                  <span>+{{item.code}}</span>
                </li>
              </ul>
            </div>
          </div>
          <input class="tel" ref="tel" :placeholder="language.placehoder.tel" type="tel" v-model="phone" maxlength="11" @blur="checkRule('tel',phone)"/>
          <img class="clear" v-show = "isShowClear" @click="clear" src="./assets/img/clear.png" alt="">
        </div>
        <div class="code-area">
          <input class="vCode" type="text" :placeholder="language.placehoder.code"  maxlength="6" v-model="captcha" />
          <button class="send-code" @click = "sendCode" :disabled = "isSend">{{!isSend ? language.getCode : time + ' S'}}</button>
        </div>
        <div v-show="aliCaptcha" id="ali-captcha" class="nc-container"></div>
        <input class="_input" :placeholder="language.placehoder.password"   type="password" v-model="password" />
        <button class="sub" @click = "sub" :disabled = "!checked || registerFlag" :class="{'disabled':!checked || registerFlag}">{{language.register}}</button>
        <div class="agree">
          <img @click="agree" :src="imgUrl">
          <span>{{language.agree}}</span>
          <a href="https://58coin-support.zendesk.com/hc/zh-cn/articles/360000637213-%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE">{{language.agreement}}</a>
        </div>
      </div>
      <div class="empty" :class="{bigger: aliCaptcha}"></div>
      <div class="pull">
        <img src="./assets/img/pull.png" alt="">
      </div>
    <div>
      <div class="about">
        <p class="about-title">
          <span >{{language.about.title}}</span>
        </p>
        <p class="about-content">{{language.about.content}}</p>
      </div>
      <div class="business">
        <p class="business-title">{{language.business.title}}</p>
        <div class="business-content">
          <button class="business-name" v-for = "i in language.business.content" :key = 'i'>{{i}}</button>
        </div>
      </div>
      <div class="about advance">
        <p class="about-title">
          <span>{{language.advance.title}}</span>
        </p>
        <ul class="advance-content">
          <li>
            <img src="./assets/img/advance_01.png" alt="">
            <span>{{language.advance.content[0]}}</span>
          </li>
          <li>
            <img src="./assets/img/advance_02.png" alt="">
             <span>{{language.advance.content[1]}}</span>
          </li>
          <li>
            <img src="./assets/img/advance_03.png" alt="">
             <span>{{language.advance.content[2]}}</span>
          </li>
          <li>
            <img src="./assets/img/advance_04.png" alt="">
             <span>{{language.advance.content[3]}}</span>
          </li>
        </ul>
      </div>
      <p class="statement" >{{language.statement}}</p>
    </div>
    <toast :content = 'message'></toast>
    <popup v-show = "showPopup" :languageType = "languageType" ref = "child" :success = "success" v-on:sure = "popupCallback"></popup>
  </div>
  -->
</template>
<script>
// import Toast from './components/toast';
// import Popup from './components/popup';
// import languageData from "./assets/js/laguague";
// import service from "./server/index";
// const checkedUrl = require("./assets/img/agree-checked.png");
// const unCheckedUrl = require("./assets/img/agree.png");
// const qs = require("querystring");
// const second = 60;
// // 检测浏览器
// var browser = {
//   versions: (function () {
//     var u = navigator.userAgent;
//     // console.log(u)
//     return {  // 移动终端浏览器版本信息
//       trident: u.indexOf('Trident') > -1, // IE内核
//       presto: u.indexOf('Presto') > -1, // opera内核
//       webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
//       gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
//       mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Android/), //是否为移动终端
//       ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//       android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
//       iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
//       iPad: u.indexOf('iPad') > -1, // 是否iPad
//       webApp: u.indexOf('Safari') == -1 // 是否web应该程序，没有头部与底部
//     };
//   })()
// };

// export default {
//   name: 'App',
//   // components:{
//   //   Toast,
//   //   Popup
//   // },
//   data(){
//     return{
//       message:"",
//       showToast:false,
//       phone:"",
//       password:"",
//       captcha:"",
//       time:second,
//       timeInterval:"",
//       isSend:false,
//       showPopup:false,
//       aliCaptcha: false,
//       success:false,
//       checked:true,
//       imgUrl:checkedUrl,
//       language:languageData['zh'],
//       languageType:'zh',
//       nc_lang: 'cn',
//       countryId: "211",//目标id
//       countryList:[],
//       showCountryList:"",
//       proCode: 86,//国家码
//       purpose: 21,//21为注册
//       once:false,
//       shareid:"",
//       rules:"",
//       ticket:"",
//       registerFlag:false,
//       scene:"nc_register",
//       appKey: 'FFFF0N00000000006910',
//       nc_token: null,
//       NC_Opt: {},
//       nc: {},
//     }
//   },
//   computed:{
//     //输入手机号是否显示清空按钮
//     isShowClear:function(){
//       if(this.phone){
//         return true;
//       }else{
//         return false;
//       }
//     }
//   },
//   watch: {
//     // 替换非法输入
//     phone: function () {
//       this.phone = this.phone.replace(/\D/g, '')
//     },
//     captcha: function () {
//       this.captcha = this.captcha.replace(/\D/g, '')
//     },
//     password: function () {
//       this.password = this.password.replace(' ', '')
//     },
//   },
//   created:function(){
//     this.getLanguage();
//     this.getCountryList();
//     this.rules = this.getRules();
//     var search = window.location.search;
//     if (search) {
//       search = search.slice(1);
//       this.shareid = qs.parse(search).shareid;
//     }
//     // 判断是否是移动设备打开。
//     if (!browser.versions.mobile) {
//       document.documentElement.style.fontSize = 375/15 + 'px';
//     }
//     // 移动端打开
//     if (browser.versions.mobile) {
//       this.scene = "nc_register_h5"
//     }
//   },
//   mounted:function(){
//     // 初始化滑块
//     this.initNoCaptcha()
//     if(!browser.versions.mobile){//设置浏览器打开时的样式`
//       $("#app").width("375").addClass("center");
//       $("html").css("background","none");
//       $(".modal-content").css({"marginTop":0,"top":"25%"})
//     }
//     window.addEventListener("click",()=>{//隐藏国家码下拉列表
//       if(this.showCountryList){
//         this.showCountryList = false;
//       }
//     },false)
//   },
//   methods:{
//     initNoCaptcha: function() {
//       let self = this
//       this.nc_token = [this.appKey, (new Date()).getTime(), Math.random()].join(':')
//       this.NC_Opt = {
//         renderTo: '#ali-captcha',
//         appkey: this.appKey,
//         scene: this.scene,
//         token: this.nc_token,
//         // 表示web
//         deviceIdentify: 4,
//         trans: {'key1': 'code0'},
//         elementID: ['usernameID'],
//         is_Opt: 0,
//         // 滑块语言
//         language: this.nc_lang,
//         isEnabled: true,
//         timeout: 3000,
//         times: 5,
//         apimap: {},
//         callback: function (data) {
//           let initData = {
//             purpose: self.purpose,
//             sessionId: data.csessionid,
//             deviceIdentify: self.NC_Opt.deviceIdentify,
//             ticket: self.ticket,
//             sig: data.sig,
//             token: self.NC_Opt.token,
//             scene: self.NC_Opt.scene
//           };
//           service.aliCaptcha(initData)
//             .then(res => {
//               if (res.data.ticket) {
//                 self.ticket = res.data.ticket
//               }
//               // 再次调用短信接口
//               self.sendCode()
//             })
//             .catch(err => {
//               console.log(err)
//             })
//         }
//       }
//       // 初始化
//       this.nc = new noCaptcha(this.NC_Opt)
//     },
//     // 刷新滑块
//     reload () {
//       this.nc.reload()
//     },
//     init:function(){
//       this.phone = "";
//       this.password = "";
//       this.captcha = "";
//       this.isSend = false;
//       this.time = second;
//       this.ticket = "";
//       clearInterval(this.timeInterval);
//     },
//     getRules:function(){
//       let self = this;
//       var rule =  {
//         tel: function (value) {
//           if (self.countryId == 211) {
//             if (!(/^1(([34578]\d{9}$)|(((99)|(98)|(66))\d{8}$))/.test(value))) return self.language.error.telError
//             else {
//               return ''
//             }
//           } else {
//             if (!(/^\d{1,14}$/.test(value))) return self.language.error.telError
//             else {
//               return ''
//             }
//           }
//         },
//         code: function (value) {
//           if (!(/^\d{6}$/.test(value))) return self.language.error.codeError
//           else {
//             return ''
//           }
//         },
//         password: function (value) {
//           if (value.length < 8 || value.length > 20) return self.language.error.passwordError
//           else {
//             return ''
//           }
//         }
//       }
//       return rule;
//     },
//     getCountryList:function(){
//       service.getCountryList().then((res) =>{
//         this.countryList = res.data.countryList;
//       })
//     },
//     changeCountryCode:function(e){
//       e.stopPropagation();
//       this.showCountryList = !this.showCountryList;
//     },
//     selectCode:function(obj){
//       if(obj.available == 1){
//         this.proCode = obj.code;
//         this.countryId = obj.id;
//       }else{
//         // this.showToast = true;
//         // this.message = "该国家尚未开通此业务";
//       }
//     },
//     //获取当前浏览器语言
//     getLanguage:function(){
//       let localLanguage = (navigator.language || navigator.browerLanguage).toLowerCase();
//       // let language =  navigator.userAgent;
//       if(localLanguage.indexOf('zh') != -1){//中文
//         this.languageType = 'zh';
//         this.countryCode = 211;
//       }else if(localLanguage.indexOf('en') != -1){//英文
//         this.languageType = 'en';
//       }else if(localLanguage.indexOf('ko') != -1){//韩文
//         this.languageType = 'ko';
//       }else if(localLanguage.indexOf('ja') != -1){//日文
//         this.languageType = 'ja';
//       }else if(localLanguage.indexOf('ru') != -1){//俄文
//         this.languageType = 'ru';
//       }
//       this.language = languageData[this.languageType];
//       // 根据系统语言指定滑块语言
//       switch (this.languageType) {
//         case 'zh':
//           this.nc_lang = 'cn'
//           break
//         case 'en':
//           this.nc_lang = 'en'
//           break
//         case 'ko':
//           this.nc_lang = 'ko_KR'
//           break
//         case 'ja':
//           this.nc_lang = 'ja_JP'
//           break
//         case 'ru':
//           this.nc_lang = 'ru_RU'
//           break
//         default:
//           this.nc_lang = 'cn'
//       }
//     },
//     //判断输入时候符合规则
//     checkRule:function(type,val){
//       if(this.rules[type](val)){
//         this.showToast = true;
//         this.message = this.rules[type](val);
//         return false;
//       }else{
//         return true;
//       }
//     },
//     //点击发送验证码按钮
//     sendCode:function(){
//       this.success = false;
//       if(!this.checkRule("tel",this.phone)){
//         return;
//       }else{
//         this.isSend = true;
//         this.countDown();
//         this.getCode();
//       }
//     },
//     //获取短信验证码
//     getCode:function(flag){
//       let self = this;
//       let data = {
//         purpose: self.purpose,
//         nation: self.countryId,
//         mobile: self.phone,
//         ticket: self.ticket,
//         channel: 1
//       };
//       if(flag){
//         self.time = 60;
//         self.isSend = true;
//         self.countDown();
//       };
//       service.sendSMS(data).then((res)=>{
//         if (res && res.code === 0) {
//           self.showToast = true;
//           self.ticket = res.data.ticket;
//           self.message = self.language.message.sendSuccessMessage;
//         } else {
//           if (res.data.pre_verify && res.data.pre_verify == "afsCaptcha"){
//             // 显示滑块
//             self.reload()
//             self.showAliCaptcha()
//           }else{
//             // 关闭滑块
//             self.aliCaptcha = false
//             // 并重置滑块
//             self.reload()
//             if (res.code === 1) {
//               self.message = self.language.message.code1;
//             } else if (res.code === 2) {
//               self.message = self.language.message.code2;
//             } else if (res.code === 90) {
//               self.message = self.language.message.code90;
//             } else if (res.code === 92) {
//               self.message = self.language.message.code92;
//             } else if (res.code === 95) {
//               self.message = self.language.message.code95;
//             } else if (res.code === 100) {
//               self.message = self.language.message.code100;
//             } else if (res.code === 300) {
//               self.message = self.language.message.code300;
//             } else {
//               self.message = res.message;
//             }
//             self.showToast = true;
//             self.time = 60;
//             self.isSend = false;
//             clearInterval(self.timeInterval);
//           }
//         }
//       })
//     },
//     showAliCaptcha: function() {
//       this.aliCaptcha = true;
//       this.time = 60;
//       this.isSend = false;
//       clearInterval(this.timeInterval);
//     },
//     //显示图形验证码
//     // showCapcha:function(){
//     //   this.showPopup = true;
//     //   this.time = 60;
//     //   this.isSend = false;
//     //   clearInterval(this.timeInterval);
//     //   setTimeout(()=>{
//     //     if(this.$refs.child){
//     //         this.$refs.child.refreshCaptcha()
//     //     }
//     //   })
//     // },
//     //60s倒计时
//     countDown:function(){
//       var self = this;
//       clearInterval(self.timeInterval)
//       self.timeInterval = setInterval(function(){
//         if (self.time <= 0) {
//           clearInterval(self.timeInterval)
//           self.isSend = false
//           self.time = second;
//           return
//         }
//         self.time = self.time - 1
//       }, 1000);
//     },
//     //点击注册
//     sub:function(){
//       // this.showPopup = true;
//       // this.success = true;
//       if(!this.checkRule("tel",this.phone)){
//         return;
//       }
//       if(!this.checkRule("code",this.captcha)){
//         return;
//       }
//       if(!this.checkRule("password",this.password)){
//         return;
//       };
//       if(!this.ticket){
//         this.showToast = true;
//         this.message = this.language.message.sendMessage;
//         return;
//       }
//       this.registerFlag = true;
//       this.verifyCode();
//     },
//     //验证短信验证码
//     verifyCode:function(){
//       let verifyData = {
//         code: this.captcha,
//         ticket: this.ticket,
//         channel: 1
//       };
//       service.verifyCode(verifyData).then((res)=>{
//         let self = this;
//         if (res.code === 0) {
//           this.register();
//         } else {
//           if (res.code === 302) {
//             // 短信码错误
//             if (res.data.lastCount && res.data.lastCount >= 1) {
//               self.message = self.language.message.errorDesc1 + res.data.lastCount + self.language.message.errorDesc2
//             }
//           } else {
//             // 关闭滑块
//             self.aliCaptcha = false;
//             if (res.code === 111) {
//               //处理无效的ticket错误提示
//               self.message = self.language.error.textError;
//             } else if (res.code === 300) {
//               // 短信码失效
//               self.message = self.language.message.code300;
//             } else {
//               self.message = res.message;
//             }
//           }
//           // 显示Toast
//           self.showToast = true;
//           // 置亮按钮
//           this.registerFlag = false;
//         }
//       })
//     },
//     //注册
//     register:function(){
//       this.success = false;
//       let self = this;
//       let data = {
//         password: self.password,
//         ticket: self.ticket,
//         inviterId: self.shareid,//邀请人、推荐人，市场销售人员id加密字符串,可选
//         channel: 2//可选
//       };
//       service.register(data).then((res)=>{
//         self.init();
//         self.registerFlag = false;
//         if (res.code === 0) {
//           self.showPopup = true;
//           // 显示注册成功
//           self.success = true;
//         } else {
//           self.isNeedCaptcha(res);
//         }
//       })
//     },
//     //是否需要验证
//     isNeedCaptcha:function(res){
//       if(res.code == 111){
//         this.message = this.language.error.textError;//处理无效的ticket错误提示
//       }else{
//         this.message = res.message;
//       }
//       this.showToast = true;
//     },
//     //弹窗的传值处理
//     popupCallback:function(data){
//       this.showPopup = data.close;
//       if(data.ticket){
//         this.ticket = data.ticket;
//         this.getCode(1);
//       }else if(data.callback){
//         if(browser.versions.mobile){
//           window.location.href = 'https://wap.58coin.com';
//         }else{
//           window.location.href = 'https://www.58coin.com'
//         }
//       }
//     },
//     //清空手机号
//     clear:function(){
//       this.once = true;
//       this.$refs.tel.focus();
//       this.phone = "";
//       setTimeout(()=>{
//         this.once = false;
//       },100)
//     },
//     //关闭弹窗
//     close:function(data){
//       this.showPopup = data;
//     },
//     //是否同意协议
//     agree:function(){
//       if(this.checked){
//         this.checked = false;
//         this.imgUrl = unCheckedUrl;
//       }else{
//         this.checked = true;
//         this.imgUrl = checkedUrl;
//       }
//     }
//   }
// }
</script>

<!--<style lang = "less">-->
 <!--@import "./assets/css/index.less";-->
  <!--.center{-->
    <!--position: relative;-->
    <!--margin:80px auto 0;-->
    <!--.bg()-->
  <!--}-->
  <!--html{-->
    <!--min-height: 100%;-->
    <!--.bg()-->
  <!--}-->
  <!--.bg{-->
    <!--background: url("./assets/img/bg.png") no-repeat center center;-->
    <!--background-size: cover;-->
  <!--}-->
  <!--header{-->
    <!--background: url("./assets/img/figure_bg.png") no-repeat center -2%;-->
    <!--background-size: 100%;-->
    <!--text-align: center;-->
    <!--color: #fff;-->
    <!--height: 590/@rem;-->
    <!--position: relative;-->
    <!--padding-top:15/@rem;-->
    <!--box-sizing: border-box;-->
    <!--overflow: hidden;-->
    <!--.title{-->
      <!--font-size: 36/@rem;-->
      <!--font-weight: 100;-->
    <!--}-->
    <!--.introduce{-->
      <!--font-size: 44/@rem;-->
      <!--margin:10/@rem;-->
      <!--margin-top:0;-->
      <!--margin-bottom: 0;-->
    <!--}-->
    <!--&::before{-->
      <!--content: "";-->
      <!--width: 100%;-->
      <!--top:90/@rem;-->
      <!--left: 0;-->
      <!--position: absolute;-->
      <!--height: 100%;-->
      <!--background:url("./assets/img/figure.png") no-repeat center center;-->
      <!--background-size: 90%;-->
    <!--}-->
  <!--}-->

  <!--._form{-->
    <!--height: 730/@rem;-->
    <!--width:700/@rem;-->
    <!--background: url('./assets/img/input_bg.png') no-repeat center center;-->
    <!--background-size: contain;-->
    <!--z-index: 1;-->
    <!--position: absolute;-->
    <!--left: 50%;-->
    <!--margin-left: -700/2/@rem;-->
    <!--top:410/@rem;-->
    <!--.flex-box(column,flex-start);-->
    <!--&.bigger {-->
      <!--height: 838/@rem;-->
      <!--background: url('./assets/img/input_bg_bigger.png') no-repeat center center;-->
      <!--background-size: contain;-->
    <!--}-->
    <!--.head-pic{-->
      <!--width: 100/@rem;-->
      <!--height: 100/@rem;-->
      <!--border-radius: 50%;-->
      <!--overflow: hidden;-->
      <!--margin-top: 20/@rem;-->

      <!--img{-->
        <!--width: 100%;-->
        <!--height: 100%;-->
      <!--}-->
    <!--}-->
    <!--.phone-num{-->
      <!--position: relative;-->
      <!--.flex-box();-->
      <!--.input-style(620,#fff,#1D2140);-->
      <!--padding-left: 0;-->
      <!--.countryCode{-->
        <!--position: relative;-->
        <!--width: 120/@rem;-->
        <!--height: 100%;-->
        <!--.flex-box();-->
        <!--span{-->
          <!--margin-right: auto;-->
          <!--padding-left: 15/@rem;-->
          <!--font-size: 30/@rem;-->
          <!--color: #2D395B ;-->
        <!--}-->
        <!--img{-->
          <!--width: 16/@rem;-->
          <!--height: 16/@rem;-->
          <!--margin-right:20/@rem;-->
        <!--}-->
        <!--&:before{-->
          <!--content:"";-->
          <!--position:absolute;-->
          <!--background: #9DACC9;-->
          <!--width: 2/@rem;-->
          <!--height: 40/@rem;-->
          <!--right: 0;-->
          <!--top:50%;-->
          <!--margin-top:-20/@rem;-->
          <!--opacity: .3;-->
        <!--}-->
        <!--.countryCodeList{-->
          <!--position:absolute;-->
          <!--display: none;-->
          <!--width: 350/@rem;-->
          <!--height: 440/@rem;-->
          <!--background: #f5f5fb;-->
          <!--border-radius: 6px;-->
          <!--overflow-x:hidden;-->
          <!--bottom:-446/@rem;-->
          <!--left: -3px;-->
          <!--overflow-y: scroll;-->
          <!--padding:20/@rem 0;-->
          <!--box-sizing: border-box;-->
          <!--ul li{-->
            <!--.flex-box(row,left);-->
            <!--height: 72/@rem;-->
            <!--font-size: 24/@rem;-->
            <!--color: #2D395B;-->
            <!--line-height: 72/@rem;-->
            <!--padding-left: 20/@rem;-->
            <!--span{-->
              <!--padding:0;-->
            <!--}-->
            <!--span:nth-of-type(1){-->
              <!--display: inline-block;-->
              <!--max-width: 60%;-->
              <!--overflow: hidden;-->
              <!--text-overflow: ellipsis;-->
              <!--white-space: nowrap;-->
              <!--margin-right: 10/@rem-->

            <!--}-->
          <!--}-->
          <!--ul .active{-->
            <!--background:#e9edf6;-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.tel{-->
        <!--width:470/@rem;-->
        <!--height:100%;-->
        <!--margin-left: 20/@rem-->
      <!--}-->
      <!--.clear{-->
        <!--position: absolute;-->
        <!--width: 32/@rem;-->
        <!--height: 32/@rem;-->
        <!--right: 20/@rem;-->
        <!--bottom: 28/@rem;-->

      <!--}-->
    <!--}-->

    <!--.username{-->
      <!--font-size: 28/@rem;-->
      <!--color: #fff;-->
    <!--}-->
    <!--.notice{-->
      <!--font-size: 22/@rem;-->
      <!--margin-top:20/@rem;-->
      <!--color: #D0D3DF;-->
      <!--text-align: center;-->
      <!--padding:0 20/@rem;-->
      <!--height: 48/@rem;-->
    <!--}-->
    <!--._input {-->
      <!--.input-style(620,#fff,#1D2140);-->
    <!--}-->
    <!--.code-area{-->
      <!--width: 620/@rem;-->
      <!--height: 88/@rem;-->
      <!--.flex-box(row,space-between);-->
      <!--margin-top: 25/@rem;-->
    <!--}-->
    <!--.vCode{-->
      <!--.input-style(330,#fff,#1D2140);-->
      <!--margin-top: 0;-->
      <!--height: 100%;-->
    <!--}-->
    <!--.send-code{-->
      <!--.input-style(264,url("./assets/img/btn.png"));-->
      <!--padding-left: 0;-->
      <!--margin-top: 0;-->
      <!--height: 100%;-->
    <!--}-->
    <!--#ali-captcha {-->
      <!--width: 620/@rem;-->
      <!--height: 88/@rem;-->
      <!--margin-top: 25/@rem;-->
      <!--border-radius: 3px;-->
      <!--display: flex;-->
    <!--}-->
    <!--#captcha{-->
      <!--width: 620/@rem;-->
    <!--}-->
    <!--.sub{-->
      <!--/* color: #fff; */-->
      <!--.input-style(620,url("./assets/img/btn.png"));-->
      <!--padding-left: 0;-->
    <!--}-->
    <!--.disabled{-->
      <!--.input-style(620,#D0D3DF);-->
      <!--padding-left: 0;-->
      <!--color: #fff;-->
    <!--}-->

    <!--.agree{-->
      <!--margin-top:30/@rem;-->
      <!--.flex-box();-->
      <!--font-size: 22/@rem;-->
      <!--img{-->
        <!--width: 24/@rem;-->
        <!--height: 24/@rem;-->
        <!--margin-right: 20/@rem;-->
        <!--border-radius: 2px;-->
        <!--margin-bottom: 2px;-->
      <!--}-->
      <!--span{-->
        <!--color: #fff;-->
      <!--}-->
      <!--a{-->
        <!--color:#697FD5;-->
      <!--}-->
    <!--}-->

  <!--}-->
  <!--.empty{-->
    <!--height: 535/@rem;-->
    <!--width: 100%;-->
    <!--&.bigger {-->
      <!--height: 643/@rem;-->
    <!--}-->
  <!--}-->
  <!--.pull{-->
    <!--text-align: center;-->
    <!--padding: 12/@rem 0;-->
    <!--position: relative;-->
    <!--img{-->
      <!--width: 24/@rem;-->
      <!--height: 36/@rem;-->
      <!--animation: fade 3s linear infinite;-->
      <!-- -webkit-animation: fade 3s linear infinite;-->
    <!--}-->
    <!--&:before{-->
      <!--.border(0)-->
    <!--}-->
  <!--}-->
  <!--/* 关于58COIN */-->
  <!--.about{-->
    <!--.about-title{-->
      <!--/* width: 400/@rem; */-->
      <!--color:#fff;-->
      <!--font-size:32/@rem;-->
      <!--margin:60/@rem auto 40/@rem;-->
      <!--text-align: center;-->
      <!--span{-->
        <!--padding:0 70/@rem;-->
        <!--background: url("./assets/img/title-line.png") no-repeat center center;-->
        <!--background-size:100%;-->
      <!--}-->
    <!--}-->
    <!--.about-content{-->
      <!--font-size: 24/@rem;-->
      <!--color: #B1C0DF;-->
      <!--letter-spacing: 0;-->
      <!--line-height: 39/@rem;-->
      <!--margin: 0 32/@rem 20/@rem;-->
    <!--}-->
  <!--}-->
  <!--.business-title{-->
    <!--font-size: 26/@rem;-->
    <!--color: #E9EDF6;-->
    <!--letter-spacing: 0;-->
    <!--text-align: center;-->
    <!--margin-top:40/@rem;-->
  <!--}-->
  <!--.business-content{-->
    <!--margin-top:-45/@rem;-->
    <!--width: 100%;-->
    <!--height:370/@rem;-->
    <!--background: url("assets/img/business.jpg") no-repeat center center;-->
    <!--background-size: 100%;-->
    <!--position: relative;-->
    <!--&::before{-->
      <!--.border(-60)-->
    <!--}-->
  <!--}-->
  <!--.business-name{-->
    <!--width: 140/@rem;-->
    <!--height: 46/@rem;-->
    <!--position: absolute;-->
    <!--font-size: 20/@rem;-->
    <!--color: #B1C0DF;-->
    <!--letter-spacing: 0;-->
    <!--text-shadow: 0 0 4px #1890FF;-->
    <!--background: none;-->
  <!--}-->
  <!--.business-name:nth-of-type(1){-->
    <!--left:23/@rem;-->
    <!--top:256/@rem;-->
  <!--}-->
  <!--.business-name:nth-of-type(2){-->
    <!--left:166/@rem;-->
    <!--top:336/@rem;-->
  <!--}-->
  <!--.business-name:nth-of-type(3){-->
    <!--left:308/@rem;-->
    <!--top:256/@rem;-->
  <!--}-->
  <!--.business-name:nth-of-type(4){-->
    <!--left:450/@rem;-->
    <!--top:336/@rem;-->
  <!--}-->
  <!--.business-name:nth-of-type(5){-->
    <!--left:590/@rem;-->
    <!--top:256/@rem;-->
  <!--}-->
  <!--.advance{-->
    <!--margin-top:110/@rem;-->
    <!--margin-bottom: 46/@rem;-->

    <!--.advance-content{-->
      <!--overflow: hidden;-->
      <!--li{-->
        <!--float: left;-->
        <!--width: 25%;-->
        <!--.flex-box(column);-->
        <!--font-size: 22/@rem;-->
        <!--color: #B1C0DF;-->
        <!--span{-->
          <!--display: block;-->
          <!--margin:0 2%;-->
          <!--overflow: hidden;-->
          <!--width: 96%;-->
          <!--text-align: center;-->
        <!--}-->
        <!--img{-->
          <!--width: 74/@rem;-->
          <!--height: 87/@rem;-->
          <!--margin-bottom: 21/@rem;-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.statement{-->
    <!--font-size: 18/@rem;-->
    <!--color: #ADBCDC;-->
    <!--text-align: center;-->
    <!--margin-bottom: 30/@rem;-->
    <!--margin-top:80/@rem;-->
  <!--}-->
 <!--/*阿里滑块验证*/-->
 <!--#ali-captcha .nc_wrapper {-->
   <!--width: 100%;-->
 <!--}-->
 <!--#ali-captcha .nc_wrapper .nc_scale {-->
   <!--height: 100%;-->
   <!--box-sizing: border-box;-->
 <!--}-->
 <!--#ali-captcha .nc_scale .btn_slide {-->
   <!--width: 88/@rem;-->
   <!--height: 88/@rem;-->
   <!--line-height: 88/@rem;-->
   <!--box-sizing: border-box;-->
   <!--border-radius: 6/@rem;-->
   <!--border: 1px solid #DEE6F3;-->
   <!--background-color: #fff;-->
   <!--left: -1px;-->
   <!--color: #94A1B9;-->
 <!--}-->
 <!--#ali-captcha .nc_scale .btn_ok {-->
   <!--width: 88/@rem;-->
   <!--height: 88/@rem;-->
   <!--line-height: 88/@rem;-->
   <!--box-sizing: border-box;-->
   <!--color: #46C089;-->
   <!--border-top-right-radius: 3px;-->
   <!--border-bottom-right-radius: 3px;-->
 <!--}-->
 <!--#ali-captcha .nc_scale {-->
   <!--border-radius: 3px;-->
   <!--background: #FAFAFC;-->
   <!--border: none;-->
 <!--}-->
 <!--#ali-captcha .nc_scale .scale_text {-->
   <!--height: 88/@rem;-->
   <!--line-height: 88/@rem;-->
 <!--}-->
 <!--#ali-captcha .nc_scale .nc-align-center.scale_text2 {-->
   <!--text-indent: -10px;-->
 <!--}-->
 <!--/*滑块背景色*/-->
 <!--#ali-captcha .nc_scale .nc_ok, #ali-captcha .nc_scale .nc_bg {-->
   <!--background: #32B28F;-->
   <!--box-sizing: border-box;-->
   <!--border: 1px solid #32B28F;-->
   <!--height: 88/@rem;-->
   <!--line-height: 88/@rem;-->
   <!--border-top-left-radius: 3px;-->
   <!--border-bottom-left-radius: 3px;-->
 <!--}-->
 <!--/*显示文字*/-->
 <!--#ali-captcha .nc_scale span.nc-lang-cnt {-->
   <!--font-size: 14px;-->
 <!--}-->
 <!--#ali-captcha .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"] {-->
   <!--line-height: 88/@rem;-->
   <!--font-size: 26/@rem;-->
 <!--}-->
 <!--#ali-captcha .errloading {-->
   <!--border-radius: 3px;-->
   <!--width: 100%;-->
   <!--padding: 8px 5px;-->
   <!--line-height: 20px;-->
   <!--font-size: 13px;-->
   <!--color: #F0696D;-->
   <!--border-color: #F0696D;-->
   <!--background: #fff;-->
 <!--}-->
 <!--#ali-captcha .errloading .icon_warn {-->
   <!--margin-top: -2px;-->
 <!--}-->
 <!--#ali-captcha .errloading span {-->
   <!--display: inline-block;-->
   <!--padding-top: 2px;-->
 <!--}-->
 <!--#ali-captcha .errloading a {-->
   <!--color: #597AB9;-->
   <!--margin: 0 2px;-->
 <!--}-->
 <!--/*阿里滑块结束*/-->
 <!--@-webkit-keyframes fade{-->
    <!--0%{-->
      <!--opacity: 1;-->
    <!--}-->
    <!--50%{-->
      <!--opacity: 0;-->
    <!--}-->

    <!--100%{-->
      <!--opacity: 1;-->
    <!--}-->
  <!--}-->
  <!--@keyframes fade{-->
    <!--0%{-->
      <!--opacity: 1;-->
    <!--}-->
    <!--50%{-->
      <!--opacity: 0;-->
    <!--}-->

    <!--100%{-->
      <!--opacity: 1;-->
    <!--}-->
  <!--}-->
  <!--.fadeIn{-->
    <!--display: block !important;-->
    <!-- -webkit-animation: fadeIn 1s forwards;-->
    <!--animation: fadeIn 1s forwards;-->
  <!--}-->
  <!--.fadeOut{-->
    <!--/* display: none; */-->
    <!-- -webkit-animation: fadeOut 1s forwards;-->
    <!--animation: fadeOut 1s forwards;-->
  <!--}-->
  <!--@-webkit-keyframes fadeIn{-->
    <!--0%{-->
      <!--opacity: 0;-->
    <!--}-->
    <!--100%{-->
      <!--opacity: 1;-->
    <!--}-->
  <!--}-->
  <!--@keyframes fadeIn{-->
    <!--0%{-->
      <!--opacity: 0;-->
    <!--}-->
    <!--100%{-->
      <!--opacity: 1;-->
    <!--}-->
  <!--}-->
  <!--@-webkit-keyframes fadeOut{-->
    <!--0%{-->
      <!--opacity: 1;-->
    <!--}-->
    <!--100%{-->
      <!--opacity: 0;-->
    <!--}-->
  <!--}-->
  <!--@keyframes fadeOut{-->
    <!--0%{-->
      <!--opacity: 1;-->
    <!--}-->
    <!--100%{-->
      <!--opacity: 0;-->
    <!--}-->
  <!--}-->
  <!--.down{-->
    <!--transform-origin: 50% 50%;-->
    <!-- -webkit-animation: down 1s forwards;-->
    <!--animation: down 1s forwards;-->
  <!--}-->
  <!--.up{-->
    <!--transform-origin: 50% 50%;-->
    <!-- -webkit-animation: up 1s forwards;-->
    <!--animation: up 1s forwards;-->
  <!--}-->
  <!--@-webkit-keyframes down{-->
    <!--0%{-->
      <!--transform: rotate(180deg)-->
    <!--}-->
    <!--100%{-->
      <!--transform: rotate(0)-->
    <!--}-->
  <!--}-->
  <!--@keyframes down{-->
    <!--0%{-->
      <!--transform: rotate(180deg)-->
    <!--}-->
    <!--100%{-->
      <!--transform: rotate(0)-->
    <!--}-->
  <!--}-->
  <!--@-webkit-keyframes up{-->
    <!--0%{-->
      <!--transform: rotate(0)-->
    <!--}-->
    <!--100%{-->
      <!--transform: rotate(180deg)-->
    <!--}-->
  <!--}-->
  <!--@keyframes up{-->
    <!--0%{-->
      <!--transform: rotate(0)-->
    <!--}-->
    <!--100%{-->
      <!--transform: rotate(180deg)-->
    <!--}-->
  <!--}-->
<!--</style>-->
