
<template>
	<div>
	<!-- 轮播图 -->
		<div class="mudule" v-if='showModule'>
			<div class="header">
				图片轮播
			</div>
			<p>建议上传图片尺寸为640*280</p>
			<div class="picture">
				<input class="hidelist" id="productImg1" type="file" name="productImg" @change='change($event)'>
				<label v-if='a==null' class="productImg" for="productImg1"></label>
				<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc}" for="productImg1"></label>
				<span>链接：</span>
				<input type="text" name="">
			</div>
			<div class="picture" v-if='picNum>=2'>
				<input class="hidelist" id="productImg2" type="file" name="productImg" @change='change($event)'>
				<label v-if='b==null' class="productImg" for="productImg2"></label>
				<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc2}" for="productImg2"></label>
			</div>
			<div class="addPicture">
				<a href="javascript:void(0)" @click='addPicNum'>添加图片</a>
				
			</div>
		</div>

	<!-- 防伪验证 -->
		<div class="mudule" v-if='showModuleVerify'>
			<div class="header">
				防伪验证与企业信息设置：
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
				imgSrc2:'',
			}
		},
		methods:{
			...mapActions([
				'setPic',
				'changeState',
				'addPicNum'
				]),
			//同步显示图片
			change:function(eImg){
				const reader = new FileReader();
				if($(eImg.target).attr('id')=='productImg1'){
					reader.onloadend = (e) =>
					{
						var url=`${e.target.result}`
						this.imgSrc = `url('${e.target.result}')`;
						this.setPic({url:url,type:1});
					}
				}
				if($(eImg.target).attr('id')=='productImg2'){
					reader.onloadend = (e) =>
					{
						var url=`${e.target.result}`
						this.imgSrc2 = `url('${e.target.result}')`;
						this.setPic({url:url,type:2});
					}
				}
				;
				reader.readAsDataURL(eImg.target.files[0]);
			},
			add:function(){
				this.addPicNum();
			},
			confirm:function(){
				
			}
		},
		computed:mapState({
			showModule:state=>state.banner1.data.showModule,
			showModuleVerify:state=>state.banner1.verifyData.showModule,
			picNum:state=>state.banner1.data.picNum,
			a:state=>state.banner1.data.bannerPic.a,
			b:state=>state.banner1.data.bannerPic.b,
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
		margin-top: 10px;
	}
	.addPicture{
		padding: 10px 15px;
		width: 450px;
		background: #fff;
		margin: 10px 0;
	}
	.productImg{
		display: inline-block;
		width: 86px;
		height: 86px;
		background: url(../../assets/img/group7.png) no-repeat;
		background-size: contain;
	}
</style>