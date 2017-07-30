<template>
	<div>
		<div class="pic-ad">
			文字导航
		</div>
		
		<div class="border">
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
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