<template>
	<div>
		<div class="pic-ad">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<!-- <li data-target="#carousel-example-generic" data-slide-to="2"></li> -->
				</ol>

				<!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<img v-if='a!=null' style="width: 320px;height: 140px;" v-bind:src='a' alt="...">
						<img v-else style="width: 320px;height: 140px;" src="../../assets/img/2233.jpg" alt="...">
						<div class="carousel-caption">
							
						</div>
					</div>
					<div class="item">
						<img v-if='b!=null' style="width: 320px;height: 140px;" v-bind:src='b' alt="...">
						<img v-else style="width: 320px;height: 140px;" src="../../assets/img/tu1.jpg" alt="...">
						<div class="carousel-caption">
							
						</div>
					</div>
					...
				</div>

				<!-- Controls -->
				<!-- <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a> -->
			</div>
		</div>
		<div class="border">
			<input type="button" name="" value="删除" @click='delPicAd'>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			...mapActions([
				'delThis1'
				]),
			init(){
				
			},
			delPicAd(){
				var self=this;
				var type=$(event.target).parents('.template').attr('data-type');
				self.delThis1();
			}
		},
		computed: mapState({
			picAd1:state=>state.banner1.data.picAd1,
			a:state=>state.banner1.data.bannerPic.a,
			b:state=>state.banner1.data.bannerPic.b,
		}),
		created(){
			// this.$nextTick(function(){
			// 	$('.carousel').carousel({
			// 		interval: 2000
			// 	})
			// });
		},
		mounted(){
			$('.carousel').carousel({
					interval: 2000
				})
		}
	}
</script>

<style scoped>
	.pic-ad{
		width: 100%;
		height: 140px;
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