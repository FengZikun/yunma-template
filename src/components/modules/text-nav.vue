<template>
	<div>
		<div class="pic-ad" style="margin-bottom: 12px;padding: 0 10px;">
			<div class="messageBox" v-if="a">
				<p>您查询的防伪码为：</p>
			</div>
			<div class="messageBox" v-if='b'>
				<p>防伪验证信息：</p>
				
			</div>
			<div class="messageBox" v-if='c'>
				<div>
					扫码明细：
				</div>
			</div>
		</div>
		<div class="pic-ad" style="margin-bottom: 12px;padding: 0 10px;" v-if='d'>
			<div class="messageBox" v-if="e">
				<p>企业名称：</p>
			</div>
			<div class="messageBox" v-if='f'>
				<p>组织机构代码：</p>
			</div>
			<div class="messageBox" v-if='g'>
				<div>
					营业执照号码：
				</div>
			</div>
			<div class="messageBox" v-if='h'>
				<div>
					企业地址：
				</div>
			</div>
			<div class="messageBox" v-if='i'>
				<div>
					客服热线：
				</div>
			</div>
		</div>
		
		<div class="border hidelist">
			<input class="modulerRedactButton" type="button" name="" value="编辑" @click='showDel=true;'>
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delTextNav'>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				showDel:false
			}
		},
		methods:{
			...mapMutations([
				'delThis2'
				]),
			delTextNav(){
				this.delThis2();
				$('.box').removeClass('detail');
			}
		},
		computed: mapState({
			a:state=>state.banner1.verifyData.cell.a,
			b:state=>state.banner1.verifyData.cell.b,
			c:state=>state.banner1.verifyData.cell.c,
			d:state=>state.banner1.verifyData.cell.d,
			e:state=>state.banner1.verifyData.cell.e,
			f:state=>state.banner1.verifyData.cell.f,
			g:state=>state.banner1.verifyData.cell.g,
			h:state=>state.banner1.verifyData.cell.h,
			i:state=>state.banner1.verifyData.cell.i,
		})
	}
</script>

<style scoped>
	.pic-ad:first-child{
		margin-bottom: 12px;
	}
	.messageBox{
		min-height: 36px;
		line-height: 36px;
	}
</style>