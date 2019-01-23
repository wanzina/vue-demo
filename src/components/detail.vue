<template>
    <div>
        <header class="detail-header fixed-header">
            <a href="javascript:history.go(-1)"><img src="@/assets/images/detail-left.png"/></a>
            
            <router-link  to="/shopcar" class="right"><img src="@/assets/images/shopbar.png"/></router-link>
        </header>
        
        
        <div class="contaniner fixed-contb">
            <section class="detail">
                <detailslide :msg="list"></detailslide>
                <dl class="jiage">
                    <dt>
                        <h3>{{list.title}}</h3>
                        <div class="collect">
                            <img src="@/assets/images/detail-heart-hei.png"/>
                            <p>收藏</p>
                        </div>
                    </dt>
                    <dd>
                        <b>{{list.price}}</b>
                        <del>{{list.oldprice}}</del>
                        <input type="button" value="￥10.00" readonly />
                        <small>+356积分</small>
                    </dd>
                </dl>
                
                <div class="chose">
                    <ul>
                        <h3>颜色</h3>
                        <li>
                            黑色
                        </li>
                        <li class="chose-active">
                            粉色
                        </li>
                        <li>
                            灰色
                        </li>
                        <li>
                            红色
                        </li>
                    </ul>
                    <ul>
                        <h3>尺寸</h3>
                        <li>
                            L
                        </li>
                        <li class="chose-active">
                            XL
                        </li>
                        <li>
                            XXL
                        </li>
                    </ul>
                </div>
                
                <a href="#" class="seven">
                    <b>7</b>天无理由退换货
                </a>
                
                <ul class="same">
                    <a href="#">
                        <span>
                            同类推荐
                        </span>
                        <li class="one">
                            <img src="@/assets/images/detail-pp01.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp02.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp03.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp04.png"/>
                            <p>￥188.00</p>
                        </li>
                    </a>
                </ul>
                
                <article class="detail-article">
                    <nav>
                        <ul>
                            <li>商品详情</li>
                            <li class="article-active">评价</li>
                        </ul>
                    </nav>
                    <section class="talkbox">
                        <ul class="talk">
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="@/assets/images/detail-pp01.png"/>
                                        <img src="@/assets/images/detail-pp02.png"/>
                                        <img src="@/assets/images/detail-pp03.png"/>
                                        <img src="@/assets/images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="@/assets/images/detail-pp01.png"/>
                                        <img src="@/assets/images/detail-pp02.png"/>
                                        <img src="@/assets/images/detail-pp03.png"/>
                                        <img src="images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                        </ul>
                    </section>
                    
                </article>
            </section>
        </div>
        
        
            <footer class="detail-footer fixed-footer">
                <a href="#" class="go-car">
                    <input type="button" value="加入购物车"/>
                </a>
                <a href="buy.html" class="buy">
                    立即购买
                </a>
            </footer>
     </div>
</template>
<script>
import detailslide from '@/components/detailslide.vue'
export default {
    data(){
        return {
            list:''
        }
    },
    components: {
        detailslide
    },
    mounted () {
        
        axios({
            url:'data/product.data'
        }).then((res)=>{
          this.list=res.data[this.$route.params.id-1]
        })
    }
}
</script>

