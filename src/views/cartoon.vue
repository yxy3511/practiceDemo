<template>
  <div class="cartoon_container">
    <div class="pos_fixed">
      <div class="cartoon_music" @click='playMusic'>
        <!-- <img src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_music.png"> -->
        <img src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon_music.png">
        <audio
          src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon_bgmusic.mp3"
          id="bgmusic"
          loop
          autoplay
        ></audio>
        <audio id="click-audio" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon02_voied.mp3" style="display:none"></audio>
      </div>
    </div>
    <div class="bg_div_imgs">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_01.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_02.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_03.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_04.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_05.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_06.jpg">
    </div>
    <div class="bg_div bg_div_01" @click='changeTxt(1)'>
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_07.jpg">
      <img class="bg_light bg_light_01" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_07.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_02" @click='changeTxt(2)'>
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_08.jpg">
      <img class="bg_light bg_light_02" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_08.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_03" @click='changeTxt(3)'>
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_09.jpg">
      <img class="bg_light bg_light_03" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_09.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_04" @click='changeTxt(4)'>
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_10.jpg">
      <img class="bg_light bg_light_04" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_10.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div_imgs">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_11.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_12.jpg">
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_13.jpg">
    </div>
    <div class="bg_div bg_div_14" @click='changeTxt(5)'>
      <img class="bg" style="pointer-events: none;" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_14.jpg">
      <img class="bg_light bg_light_14" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_14.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <div class="txt_content goup">继续向上滑 ⇡</div>
    </div>
    <div class="bg_div_imgs bg_buy">
      <a href="https://m.tb.cn/h.V7bPoAb?sm=75424b">
        <img src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon02_buy.jpg">
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
      // let audio = document.querySelector('audio')[0]
      let audio = $('#bgmusic')[0]
      let musicEle = $('.cartoon_music')[0]
      audio.addEventListener('play', function(){
        musicEle.style.animationPlayState = "running"
      })
    },
    methods:{
      randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      },
      playMusic(){
        // let audio = document.querySelector('audio')[0]
        let audio = $('#bgmusic')[0]
        let musicEle = $('.cartoon_music')[0]
        if(audio.paused){
          audio.play()
          musicEle.style.animationPlayState = "running"
        }else{
          audio.pause()
          musicEle.style.animationPlayState = "paused"
        }

      },
      changeTxt(num){
        let animation = $($($('.bg_div')[num-1]).children('.animation_light'))
        let light = $($($('.bg_div')[num-1]).children('.bg_light'))
        if(light.css('display') == 'block' && animation.css('display') == 'none') return
        let audio = $('#click-audio')[0]
        audio.volume = 0.005
        audio.play()
        // let parent = $($($('.bg_div')[num-1]).children('.txt_content'))
        // let before = parent.children('.before')
        // before.css('display', 'none')
        light.css('display', 'block')
        // let after = parent.children('.after')
        // after.css('display', 'block')
        animation.css('display', 'none')
        if(num == 5){
          // let goup = $('.goup')[0]
          // goup.style.animationPlayState = "running"
          $('.goup').animate({opacity:1},5000)
          $('.bg_buy').css('display', 'block')
        }
      }
    }
  }
</script>
<style scoped lang='stylus'>
$max-width = 677px
.cartoon_container
  // max-width 1024px
  max-width $max-width
  margin 0 auto
img
  width 100%
  vertical-align bottom
// .bg_div_imgs 
//   overflow hidden
//   img
//     float left
.pos_fixed
  position fixed
  left 0
  right 0
  top 10px
  display flex
  justify-content center
  padding-left calc(100vw*.86)
  z-index 3
.cartoon_music
  // position absolute
  // right 20px
  // top 20px
  width 25px
  height 25px
  animation: rotate 5s 0s infinite linear;
  animation-play-state: paused;
  &:hover
    cursor pointer
  &:focus
    outline none
  img
    width 100%
    &:focus
      outline none
@keyframes rotate{
  0% {
    transform rotate(0deg)
  }
  // 60%{
  //   opacity .6
  // }
  100%{
    transform rotate(360deg)
  }
}
@keyframes fadein{
  0% {
    opacity 0
  }
  // 60%{
  //   opacity .6
  // }
  100%{
    opacity 1
  }
}
@keyframes halo {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.05rem rgba(202,220,255,0.8);
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.6;
    box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.8);
  } 
}
@keyframes halo2 {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.2rem rgba(202,220,255,0.6); 
    width: .8rem; 
    height: .8rem; 
    margin-top: -0.4rem; 
    margin-left: -0.4rem;
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.3;
    box-shadow: 0 0 1px 0.25rem rgba(202,220,255,0.6); 
    width: 1rem; 
    height: 1rem; 
    margin-top: -0.5rem; 
    margin-left: -0.5rem;
  } 
}
@keyframes halo3 {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.05rem rgba(202,220,255,0.4); 
    width: 1rem; 
    height: 1rem; 
    margin-top: -0.5rem; 
    margin-left: -0.5rem;
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.3;
    box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.4); 
    width: 2rem; 
    height: 2rem; 
    margin-top: -1rem; 
    margin-left: -1rem;
  } 
}
.sing-com {
  position: absolute; 
  border-radius: 50%; 
  top: 30%; 
  left: 50%; 
  opacity: 0; 
}
.one { 
  width: .4rem; 
  height: .4rem; 
  background-color: rgba(202,220,255,0.8);
  box-shadow: 0 0 1px 0.08rem rgba(202,220,255,0.8); 
  margin-top: -0.2rem;
  margin-left: -0.2rem; 
  z-index: 2;
  animation: halo 1s 0.5s infinite ease-out;
}

.two { 
  width: .8rem; 
  height: .8rem; 
  background-color: rgba(202,220,255,0.6);
  box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.6); 
  margin-top: -0.4rem; 
  margin-left: -0.4rem; 
  z-index: 2;
  animation: halo2 1s 0.5s infinite ease-out;
}

.three { 
  width: 1rem; 
  height: 1rem; 
  background-color: rgba(202,220,255,0.4);
  box-shadow: 0 0 1px 0.2rem rgba(202,220,255,0.4); 
  margin-top: -0.5rem; 
  margin-left: -0.5rem; 
  z-index: 2;
  animation: halo3 1s 0.5s infinite ease-out;
}

.bg_div{
  font-size: 14px;
  position: relative;
}
// .bg_div img.bg, video{
//   width: 100%;
//   display: block;
// }

.bg_div .bg_light{
  display: none;
  opacity: 0;
  animation: fadein .5s linear;
  animation-fill-mode: forwards;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
    
.bg_div .before{
  display: block;
}
    
.bg_div .after{
  display: none;
}
    
// .bg_div .txt_content{
//   font-family: FZYanSJW_Xian;
//   position: absolute;
//   color: #fff;
//   top: 35%;
//   left: 0;
//   right: 0;
//   text-align: center;
// }

.bg_div_01 .sing-com{
  // top: 28%;
  // top: calc(100vh*0.58)
  top: calc(100vw*1.02)
}
// .bg_div_01 .txt_content{
//   top: 23%;
// }

.bg_div_02 .sing-com{
  // top: 31%;
  // top: calc(100vh*0.58)
  top: calc(100vw*1.05)
}
// .bg_div_02 .txt_content{
//   top: 26%;
// }

.bg_div_03 .sing-com{
  // top: 43%;
  // top: calc(100vh*0.64)
  top: calc(100vw*1.15)
}
// .bg_div_03 .txt_content{
//   top: 38%;
// }

.bg_div_04 .sing-com{
  // top: 52%;
  // top: calc(100vh*0.68)
  top: calc(100vw*1.2)
}
// .bg_div_04 .txt_content{
//   top: 47%;
// }

.bg_div_14 .sing-com{
  // top: 7%;
  // top: calc(100vh*0.28)
  top: calc(100vw*.5)
}
.bg_div_14 .txt_content{
  font-size 20px
  font-family HYRuiYiSongJ
  position absolute
  bottom 50px
  color #9fa6ac
  left 0
  right 0
  text-align center
  opacity 0
  // animation: fadein .5s linear;
  // animation-fill-mode: forwards;
  // animation-play-state: paused;
}
.bg_buy{
  display none
}
@media screen and (min-width $max-width){
  .pos_fixed {
    padding-left calc(677px*.86)
  }
  .bg_div_01 .sing-com{
    top: calc(677px*1.02)
  }
  .bg_div_02 .sing-com{
    top: calc(677px*1.05)
  }

  .bg_div_03 .sing-com{
    top: calc(677px*1.15)
  }
  .bg_div_04 .sing-com{
    top: calc(677px*1.2)
  }

  .bg_div_14 .sing-com{
    top: calc(677px*.5)
  }
}
</style>