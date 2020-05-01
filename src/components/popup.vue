<template>
    <div>
        <div class="modal">
            <div class="modal-content">
                <img class="close" @click = "sure" v-if = "!success" src="../assets/img/close.png" alt="">
                <img v-if = "success" src="../assets/img/success.png" class="success" alt="">
                <p v-if = "!success" class="modal-header">{{_language.picCode}}</p>
                <div class="modal-body">
                    <div class="picCode" v-if = "!success">
                        <input type="text" v-model = "captcha" :placeholder="_language.placehoder.picCode">
                        <div>
                            <img src="../assets/img/loading.gif"  v-show = "!captchaUrl" class="loading" alt="">
                            <img class="captchaUrl" :src="captchaUrl" @click="refreshCaptcha"  v-if = "captchaUrl" alt="">
                        </div>
                    </div>
                    <p class="notice" v-if = "!success" :class="{'active':empty}">{{_language.error.emptyError}}</p>
                    <p v-if = "success" class="register-success">{{_language.registerSuccess}}</p>
                </div>
                <div class="modal-empty"></div>
                <div class="modal-footer">
                    <button class="big" @click = "verifyCaptcha" :disabled = "flag" v-if = "!success">{{_language.sure}}</button>
                    <div v-if = "success">
                        <button @click = "sure">{{_language.cancel}}</button>
                        <button @click = "sure('callback')">{{_language.mekeMoney}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../../myConfig/api.config"
    import languageData from "../assets/js/laguague";
    import service from "../server/index"
    export default {
        props:["success","languageType"],
        data(){
            return{
                captchaUrl:"",
                captcha:"",
                purpose: 21,
                ticket:"",
                empty:false,
                flag:false,
                _language:""
            }
        },
        created(){
            this._language = languageData[this.languageType];
        },
        methods:{
            sure:function(args){
                let data = {
                    close:false
                };
                if(args){
                    data[args] = args; 
                };
                this.$emit("sure",data)
            },
            refreshCaptcha: function () {//刷新图形验证码
                this.ticket = "";
                this.captchaUrl = "";
                var self = this;
                var data = {
                    purpose: this.purpose,
                    ticket: this.ticket
                };
                service.refreshCaptcha(data).then((res)=>{
                    if (res.code === 0) {
                        self.ticket = res.data.ticket;
                        self.captchaUrl = http.url+'user/security/captcha/show?ticket=' + res.data.ticket + '&rnd=' + Math.random();
                    } else {
                        self.message = res.message;
                        self.showToast = true;
                    }
                })
            },
            verifyCaptcha: function () {//验证图形验证码
                var self = this;
                if(!this.captcha){
                    this.empty = true;
                    return;
                }
                this.empty = false;
                this.flag = true;
                var data = {
                    ticket: this.ticket,
                    captcha: this.captcha
                };
                service.verifyCaptcha(data).then((res)=>{
                    self.flag = false;
                    self.captcha = "";
                    if (res.code === 0) {
                        var obj = {
                            close:false,
                            ticket:self.ticket
                        };
                        self.$emit("sure",obj)
                    } else {
                        if(res.code == 111){
                            self.$parent.message = this._language.error.textError;
                        }else{
                            self.$parent.message = res.message;
                        }
                        self.$parent.showToast = true;
                        self.refreshCaptcha()
                    }
                })
            },
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/css/index";
    .modal{
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        background:rgba(0,0,0,.2);
        z-index: 10;
        .modal-content{
            width: 630/@rem;
            min-height: 390/@rem;
            background: #fff;
            border-radius: 5px;
            position: absolute;
            left: 50%;
            top:50%;
            margin-left: -315/@rem;
            margin-top:-195/@rem;
        }
        .close{
            position: absolute;
            width: 16/@rem;
            height: 16/@rem;
            right: 0;
            top:0;
            padding:20/@rem;
        }
        .success{
            width:150/@rem;
            height: 150/@rem;
            position: absolute;
            left:50%;
            top:0;
            margin-left: -75/@rem;
            margin-top:-75/@rem
        }
        .modal-header{
            font-size: 28/@rem;
            color: #24324C;
            margin-top: 50/@rem;
            margin-left: 30/@rem;
        }
        .modal-body{
            .picCode{
                height: 80/@rem;
                .flex-box(row,space-between);
                margin: 30/@rem;
                margin-bottom: 15/@rem;
                input{
                    width: 378/@rem;
                    font-size: 22/@rem;
                    padding-left: 20/@rem;
                    box-sizing: border-box;
                    color: #7183A9;
                    height: 100%;
                    border:1px solid #ccc;
                    border-radius: 3px;
                    -webkit-appearance: none;
                    -webkit-tap-highlight-color: transparent;

                }
                div{
                    width: 172/@rem;
                    height: 100%;
                    position: relative;
                    .captchaUrl{
                        width: 100%;
                        height: 100%;
                    }
                    .loading{
                        width:50/@rem;
                        height: 50/@rem;
                        position:absolute;
                        left: 50%;
                        top:50%;
                        margin-left: -25/@rem;
                        margin-top:-25/@rem; 
                    }
                }
            }
            .notice{
                font-size: 22/@rem;
                margin-bottom: 25/@rem;
                margin-left: 32/@rem;
                color: #fff;
            }
            .active{
                color: #E74565;
            }
            .register-success{
                font-size: 36/@rem;
                color: #24324C;
                text-align: center;
                line-height: 54/@rem;
                margin-top: 130/@rem;
            }
        }
         .modal-empty{
            height: 150/@rem;
        }
        .modal-footer{
            height: 150/@rem;
            position: absolute;
            bottom:0;
            width: 100%;
            .big{
                display: block;
                margin:0 auto 60/@rem;
                margin-top:0 !important;
                .input-style(570,url("../assets/img/btn.png"));
                padding-left:0;
            }
            div{
                height: 100%;
                .flex-box();
                button{
                    margin:10/@rem;
                    margin-top:5/@rem !important;
                    margin-bottom: 30/@rem;
                    .input-style(264,url("../assets/img/btn.png"));
                    padding-left:0;
                }
                button:nth-of-type(1){
                     .input-style(264,#e9edf6);
                     color: #7183A9;
                     padding-left:0;
                }
            }
        }
    }
</style>