
<template>
	<div>
	<div class="mudule" v-if='showModule'>
		<div class="header">
			图片轮播
		</div>
		<p>建议上传图片尺寸为640*280</p>
		<div class="picture">
			<!-- <span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgSrc!=""'  v-bind:style="{backgroundImage: imgSrc}"></span> -->
			<input class="hidelist" type="file" id="productImg" name="productImg" @change='change($event)'>
			<label v-if='a==null' class="productImg" for="productImg"></label>
			<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc}" for="productImg"></label>
		</div>
	</div>
		
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				imgSrc:'',
			}
		},
		methods:{
			...mapActions([
				'setPic',
				'changeState'
				]),
			//同步显示图片
			change:function(eImg){
				// $(event.target).next().removeClass('productImg');
				const reader = new FileReader();
				reader.onloadend = (e) =>
				{
					var url=`${e.target.result}`
					this.imgSrc = `url('${e.target.result}')`;
					this.setPic(url);
				}
				;
				reader.readAsDataURL(eImg.target.files[0]);
			},
			confirm:function(){
				
			}
		},
		computed:mapState({
			showModule:state=>state.banner1.data.showModule,
			a:state=>state.banner1.data.bannerPic.a,
		})
	}
</script>

<style scoped>
	.mudule{
		width: 95%;
		margin: auto;
	}
	.header{
		height: 31px;
		width: 100%;
		border-bottom: 1px solid #d1d1d1;
		margin-top: 20px;
	}
	.picture{
		width: 450px;
		height: 105px;
		background: #fff;
		padding: 10px 15px;
	}
	.productImg{
		display: inline-block;
		width: 86px;
		height: 86px;
		background: url(../../assets/img/group7.png);
	}
</style>