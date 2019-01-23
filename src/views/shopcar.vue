<template>
    <div>
        <header class="page-header">
            <h3>购物车</h3>
        </header>
    <div class="contaniner fixed-contb">
            <section class="shopcar">
                <div class="shopcar-checkbox">
                    <label for="shopcar" onselectstart="return false"></label>
                    <input type="checkbox" id="shopcar"/>
                </div>
                <figure><img src="@/assets/images/shopcar-ph01.png"/></figure>
                <dl>
                    <dt>超级大品牌服装，现在买只要998</dt>
                    <dd>颜色：经典绮丽款</dd>
                    <dd>尺寸：L</dd>
                    <div class="add">
                        <span>-</span>
                        <input type="text" value="3" />
                        <span>+</span>
                    </div>
                    <h3>￥653.00</h3>
                    <small><img src="@/assets/images/shopcar-icon01.png"/></small>
                </dl>
            </section>
            <!--去结算-->
            <div style="margin-bottom: 16%;"></div>
            
        </div>
    </div>
</template>
