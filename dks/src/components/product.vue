<template>
	<div class='product'>
		<div class="content">
			<div class="menu" :style="{ height: menuHeight }">
				<router-link v-for='(item, index) in menu' :to="'/shop/' + $route.params.shopName + '/product/type/' + item.id" :style="{ height: countedHeight, 'line-height': countedHeight }">{{item.text}}</router-link>
			</div>
		</div>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>
<style type="text/css" lang='less'>
	.product{
		.content {
			float: left;
			overflow: hidden;
			width: 30%;
			background-color: #ebedf0;
			padding-bottom: 40px;
			.menu {
				width: 105%;
				padding-right: 5%;
				box-sizing:border-box;
				overflow-y: scroll;
				a {
					display: block;
					/*height: 40px;*/
					/*line-height: 40px;*/
					text-align: center;
					text-decoration: none;
					color: #666;
					bod-sizing:border-box;
					border-left: 2px solid transparent;
					&.router-link-active {
						color: red;
						border-left-color: red;
						background: #fff;
					}
				}
			}
		}
		.show {
			float: left;
			width: 70%;
			overflow: hidden;
			padding-bottom: 40px;
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				menu: []
			}
		},
		computed: {
			countedHeight() {
				return (this.getHeight() - 244) / 7 + 'px';
			},
			menuHeight() {
				return this.getHeight() - 244 + 'px';
			}
		},
		methods: {
			// 获取页面高度
			getHeight() {
				var height = document.documentElement.clientHeight;
				this.$store.commit('changeHeight', height);
				return height;
			},
		},
		created() {
			this.$http.get('data/menu.json', {
				params: {
					shopName: this.$route.params.shopName
				}
			}).then(({data}) => {
				if(data.errno === 0) {
					this.menu = data.data;
				}
			})
		},
		/*beforeRouteUpdate(n, o, next) {
			console.log(arguments)
			next();
		}*/
	}
</script>