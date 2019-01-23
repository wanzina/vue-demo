<template>
    <div >
        <header class="page-header">
            <h3>商城</h3>
        </header>
        <div class="contaniner fixed-contb" >
            <slide></slide>
            <homelist></homelist>
        </div>
        
    </div>
    
</template>
<script>
import slide from '@/components/slide'
import homelist from '@/components/homelist'
export default {
    components: {
       slide,homelist
    }
}
</script>

