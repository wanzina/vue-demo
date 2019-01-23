<template>
    <div>
        <header class="self-header">
            <figure><img src="@/assets/images/self-tou.png"/></figure>
            <dl>
                <dt>弱小喵</dt>
                <dd>
                    <img src="@/assets/images/self-header.png"/>
                    <span>5684</span>
                    <span>炒饭大湿</span>
                </dd>
            </dl>
            <button>签到</button>
        </header>
        	<div class="contaniner fixed-contb">
                <section class="self">
                    <dl>
                        <dt>
                            <a href="order.html">
                                <img src="@/assets/images/self-icon.png"/>
                                <b>全部订单</b>
                                <span><img src="@/assets/images/right.png"/></span>
                            </a>
                        </dt>
                        <dd>
                                <ul>
                                    <li>
                                        <router-link to="/goorder">
                                            <img src="@/assets/images/order-icon01.png"/>
                                            <p>待发货</p>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/goorder">
                                            <img src="@/assets/images/order-icon03.png"/>
                                            <p>待付款</p>
                                        </router-link>
                                    </li>
                                    <li>
                                         <router-link to="/goorder">
                                            <img src="@/assets/images/order-icon02.png"/>
                                            <p>待收货</p>
                                         </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/goorder">
                                            <img src="@/assets/images/order-icon04.png"/>
                                            <p>待评价</p>
                                         </router-link>
                                    </li>
                                </ul>
                        </dd>
                    </dl>
                    
                    <ul class="self-icon">
                        <li>
                            <router-link to="/datum">
                                <img src="@/assets/images/self-icon01.png"/>
                                <p>个人信息</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/mycollect">
                                <img src="@/assets/images/self-icon02.png"/>
                                <p>我的收藏</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/integral">
                                <img src="@/assets/images/self-icon03.png"/>
                                <p>我的积分</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/addres">
                                <img src="@/assets/images/self-icon04.png"/>
                                <p>地址管理</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="self-icon">
                        <li>
                            <a href="none.html">
                                <img src="@/assets/images/self-icon05.png"/>
                                <p>我的分销</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="@/assets/images/self-icon06.png"/>
                                <p>邀请好友</p>
                                <span><img src="@/assets/images/right.png"/></span>
                            </a>
                        </li>
                        
                    </ul>
                    <router-link to="/login"><input type="button" value="退出" @click="zhuxiao" /></router-link>
                    
                </section>
                
                
            </div>
    </div>
</template>
<script>
import * as types from '../store/types';
import store from '../store'
export default {
    methods: {
        zhuxiao:function(){
            this.$store.commit(types.CHECK_USERS,false)
        }
    },
     beforeRouteEnter(to,from,next){
    // this.$store.state.count
        if(store.state.user.auth){//同步条件
           next()
        }else{
           next('/login')
        }
    },
}
</script>

