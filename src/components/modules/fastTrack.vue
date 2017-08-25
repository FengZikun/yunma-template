<template>
	<div>
		<div class="pic-ad">
			<div class="channel" v-if='website'>
				{{websiteVal}}
			</div>
			<div class="channel noBottom" v-if='officialAccounts'>
				{{officialAccountsVal}}
			</div>
		</div>

		<div class="pic-ad" v-if='complain'>
			<div class="channel noBottom">
				{{complainVal}}
			</div>
		</div>
		<div class="border hidelist">
			<!-- <input type="button" name="" value="删除" @click='delPicAd'> -->
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		computed:{
			...mapState({
				website:state=>state.banner1.fastTrackData.website,
				websiteVal:state=>state.banner1.fastTrackData.websiteVal,
				officialAccounts:state=>state.banner1.fastTrackData.officialAccounts,
				officialAccountsVal:state=>state.banner1.fastTrackData.officialAccountsVal,
				complain:state=>state.banner1.fastTrackData.complain,
				complainVal:state=>state.banner1.fastTrackData.complainVal,
				})
		}
	}
</script>

<style scoped>
	.channel{
		height: 56px;
		line-height: 56px;
		padding: 0 10px;
		border-bottom: 1px solid #d1d1d1;
		width: 90%;
    	margin: 0 auto;
	}
	.noBottom{
		border-bottom: none;
	}
	.pic-ad{
		margin: 12px 0;
	}
</style>