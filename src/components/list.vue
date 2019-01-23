<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="@/assets/images/left.png"/>
                </a>
            <h3>男装专区</h3>
                
                <a class="iconb" href="shopcar.html">
                    <img src="@/assets/images/shopbar.png"/>
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <section class="list">
                <figure><img src="@/assets/images/list-ban01.png"/></figure>
                <div class="search">
                    <input type="search" placeholder="韩版卫衣" />
                    <label><img src="@/assets/images/list-search.png"/></label>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <span>全部</span>
                            </a>
                        </li>
                        <li class="list-active">
                            <a href="#">
                                <span>销量</span>
                                <img src="@/assets/images/up-red.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>价格</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>评价</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="wall">
                    <li  class="pic" v-for="(item,index) of list" :key='index' :id=item.id>
                        <router-link  :to="{name:'detail',params:{id:item.id}}">
                            <img :src=item.url />
                            <p>{{item.title}}</p>
                            <b>{{item.price}}</b><del>{{item.oldprice}}</del>
                        </router-link>
                    </li>
                   
                </ul>
            </section>
        </div>
	
    </div>
</template>
<style scoped>

</style>

<script>
export default {
    data(){
        return {
            list:''
        }
    },
    mounted () {
        axios({
            url:'/data/product.data'
        }).then((res)=>{
            console.log(res.data)
            this.list=res.data
        })
    }
}
</script>

