<template>
	<ul class='type':style="{ height: ($store.state.height -244) + 'px' }">
		<li v-for="item in list" :key='item.id'>
			<img :src="'img/item/' + item.img" alt="">
			<h3>{{item.title}}</h3>
			<p>
				<span class="sales">已售{{item.sales}}份</span>
			</p>
			<p>
				<span class="price">￥{{item.price}}</span>
				<span class="add changePrice" @click="$store.commit('addFood', item.price); addNum(item)">+</span>
				<span class="num" v-show="item.num >0">{{item.num}}</span>
				<span class="reduce changePrice" @click="$store.commit('reduceFood', item.price);reduceNum(item)"  v-show="item.num >0">-</span>
			</p>

		</li>
	</ul>
</template>
<style type="text/css" lang='less'>
	.type {
		padding: 0 10px;
		overflow-y: scroll;
		box-sizing:border-box;
		li {
			border-bottom: 1px solid #ccc;
			padding: 10px 0;
			overflow: auto;
			img{
				float: left;
				width: 30%;
				margin-right: 10px;
			}
		}
		h3 {
			font-size: 14px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
		}
		.sales {
			font-size: 12px;
			color: #999;
		}
		.price {
			float: left;
			font-size: 14px;
		}
		.changePrice {
			display: inline-block;
			width: 15px;
			height: 15px;
			color: red;
			font-size: 14px;
			font-weight: bold;
			line-height: 15px;
			text-align: center;
			border: 1px solid #ccc;
			border-radius: 50%;
		}
		.changePrice,.num{
			float: right;
		}
		.num {
			margin: 0 7px;
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				list: [],
				all: {}
			}
		},
		methods: {
			getData() {
				let id = this.$route.params.id;
				if (this.all[id]){
					this.list = this.all[id];
				} else {
					this.$http.get('data/' + this.$route.params.id + '.json', {
						params: {
							shopName : this.$route.params.shopName,

						}
					}).then( ({ data }) => {
						if (data.errno === 0) {
							this.list = data.data;
							this.all[id] = data.data;
						}
					})
				}
			},
			addNum(item) {
				item.num ++;
			},
			reduceNum(item) {
				item.num --;
				console.log(item.num)
			}
		},
		created() {
			this.getData();
		},
		/*updated() {
			console.log(111)
		},*/
		watch: {
			$route() {
				this.getData();
			}
		}
	}
</script>