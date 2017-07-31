<template>
	<div>
		<div class="pic-ad">
			<div v-if="a">
				<p>您查询的防伪码为：</p>
			</div>
			<div v-if='b'>
				<p>防伪验证信息：</p>
				
			</div>
			<div v-if='c'>
				<div>
					扫码明细
				</div>
			</div>
		</div>
		
		<div class="border">
			
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		computed:{
			a:{
				get(){
					return this.$store.state.banner1.verifyData.cell.a
				}
			},
			b:{
				get(){
					return this.$store.state.banner1.verifyData.cell.b
				}
			},
			c:{
				get(){
					return this.$store.state.banner1.verifyData.cell.c
				}
			},
		}
	}
</script>

<style scoped>
	.pic-ad{
		width: 100%;
		height: 140px;
		border-left: 1px solid #e5e5e5;
		border-right: 1px solid #e5e5e5;
	}
	.border{
		width: 100%;
		position: absolute;
		top: 0;
		height: 140px;
		border: 2px dashed transparent;
	}
	.border:hover{
		border-color: rgba(255,0,0,0.5);
	}
</style>