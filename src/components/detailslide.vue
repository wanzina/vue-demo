<template>
    <figure class="swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <a href="#">
                    <img :src="msg.url"/>
                </a>
            </li>
            <li class="swiper-slide">
                <a href="#">
                   <img :src="msg.url"/>
                </a>
            </li>
            <li class="swiper-slide">
                <a href="#">
                   <img :src="msg.url"/>
                </a>
            </li>
            <li class="swiper-slide">
                <a href="#">
                    <img src="@/assets/images/detail-ban04.png"/>
                </a>
            </li>
        </ul>
        <div class="swiper-pagination">
        </div>
    </figure>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper' 
export default {
   
    props:['msg'],
    methods: {
      abc:()=>{
          console.log(this.msg)
      }
    },
    mounted () {
        let swiper  =  new Swiper('.swiper-container', {
                autoplay: true,
        })
    }
}
</script>

