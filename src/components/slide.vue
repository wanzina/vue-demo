<template>
   
    <figure class="ban swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <a href="#">
                    <img src="@/assets/images/index-ban01.png"/>
                </a>
            </li>
            <li class="swiper-slide">
                <a href="#">
                    <img src="@/assets/images/index-ban02.png"/>
                </a>
            </li>
            <li class="swiper-slide">
                <a href="#">
                    <img src="@/assets/images/index-ban03.png"/>
                </a>
            </li>
        </ul>
	</figure>
   
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper' 
export default {
    mounted () {
        let swiper  =  new Swiper('.swiper-container', {
                autoplay: true,
        })
    }
}

</script>



