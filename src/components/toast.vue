<template>
    <div >
        <transition name="fade">
             <div class="toast" v-if="hide">
                 <img v-if = "error" src="../assets/img/delete.jpg" alt="">
                {{content}}
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props:["content",'error'],
        computed:{
            hide:function(){
                if(this.$parent.showToast){
                    setTimeout(()=>{
                        this.$parent.showToast = false;
                    },2000)
                    return true;
                }
            }
        }
    }
</script>

<style scoped lang = "less">
    @import "../assets/css/index";
    .toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 1000;
        width: 310/@rem;
        min-height:70/@rem;
        background: rgba(17,21,34,.7);
        font-size: 28/@rem;
        text-align: center;
        line-height: 40/@rem;
        color: #fff; 
        border-radius: 4px;
        padding:20/@rem;
        box-sizing: border-box;

        img{
            width: 50/@rem;
            height: 50/@rem;
            vertical-align: middle;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
   
</style>