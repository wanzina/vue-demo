<template>
<div class="contaniner">
    	<footer class="page-footer fixed-footer">
		<ul>
			<router-link  to="/home" tag='li' active-class="active">
				<a href="javaScript:;">
					<img src="@/assets/images/footer01.png"/>
					<p>首页</p>
				</a>
			</router-link>
			
			<router-link to="/assort" tag='li' active-class="active">
				<a href="javaScript:;">
					<img src="@/assets/images/footer002.png"/>
					<p>分类</p>
				</a>
			</router-link>
			<router-link tag='li' to="/shopcar" active-class="active">
				<a href="javaScript:;">
					<img src="@/assets/images/footer003.png"/>
					<p>购物车</p>
				</a>
			</router-link>
			
			<router-link  to="/self" tag='li' active-class="active">
				<a href="javaScript:;">
					<img src="@/assets/images/footer004.png"/>
					<p>个人中心</p>
				</a>
			</router-link>
			
		</ul>
	</footer>
</div>
</template>
<style scoped>
	footer{
		z-index: 111;
		
	}
</style>

<script>
export default {
	
}
</script>

