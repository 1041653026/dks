<template>
	<div class='shop'>
		<div class="header">
			<h1>{{data.title}}</h1>
		    <p>
		    	<img :src="'img/' + data.logo" alt="" v-if="data.logo">
		    	<span>{{data.info}}</span>
		    </p>
		</div>
		<nav>
			<router-link :to="'/shop/' + data.store + '/' + item.id" v-for='(item, index) in data.menu' :key="">{{item.text}}</router-link>
		</nav>
	    <router-view/>
	    <div class="shopping-cart">
	    	<span class="account">共￥{{$store.state.num}}元</span>
	    	<span class="buy">确认购买</span>
	    </div>
	</div>
</template>
<style type="text/css" lang='less' scoped>
.shop{
	.header {
		background-color: darkorange;
		padding-bottom: 20px;
		color:white;
		h1 {
			text-align: center;
			font-size: 20px; 
			line-height: 80px;
		}
		p {
	    	font-size: 14px;
	    	line-height: 14px;
	    	padding-left: 20px;
	    	span {
	      		vertical-align:top;
	      		margin-left: 10px;
	    	}
	    	img {
	     		width: 50px;
	      		height: 50px;
	      		border: 1px solid #fff;
	      		border-radius: 50%;
	   		}
		}
	}
	nav {
		background-color: #f9fdff;
		padding: 0 20px;
		border-bottom: 1px solid #ccc;
		a {
			display: inline-block;
			width: 33%;
			height: 50px;
			color:#666;
			text-decoration: none;
			line-height: 50px;
			text-align: center;
			&.router-link-active {
				border-bottom: 2px solid red;
			}
		}
	}
	.shopping-cart {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #333;
		span {
			display: inline-block;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: #fff;
			&.account {
				width: 70%;
			}
			&.buy {
				width: 30%;
				background-color: red;
			}
		}
	}
}
</style>
<script type="text/javascript">
	export default {
		data() {
		    return {
		      data: {}
		    }
		 },
		 created() {
		    this.$http.get('data/' + this.$route.params.shopName + '.json').then(({data}) => {
		      if(!data.erron) {
		        this.data = data.data;
		      }
		    });
		 }
	}
</script>