<template>
    <div> 
        <section class="shop" v-for="(item,index) of list" :key="index">
			<h3>
				<a href="#">
					{{item.pinlei}}
					<span><img src="@/assets/images/right.png"/></span>
				</a>
			</h3>
			<dl >
				<dd v-for="(val,i) in item.list" :key='i'>
					<router-link to="/list">
						<img :src=val.url />
						<b>{{val.title}}</b>
					</router-link>
				</dd>
				
			</dl>
		</section>
    </div>
</template>
<script>


export default {
    data(){
      return {
          list:''
          }
    },
    mounted () {
        
        //this.$root.bloading=true;
        this.$http({
             url:'/data/index.data'
        }).then((res)=>{
            /*  setTimeout(()=>{
                this.$root.bloading=false;
                this.list = res.data
            },300) */
           this.list=res.data;
           console.log(res.data)
           
        })

    }

}
</script>

