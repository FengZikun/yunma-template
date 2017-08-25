<template>
  <div class="right-main">
  <div>
    <div class="muban">
      <div class="header">

      </div>
      <div class="muban-title">

      </div>
      <div class="muban-main" @click="detailBox">
        <!-- 轮播图 -->
        <pic-ad class="template" data-type="picAd1" v-if='picAd1'>

        </pic-ad>
        <!-- 防伪验证 -->
        <text-nav class="template" data-type="verify" v-if='verify'>

        </text-nav>
        <!-- 快速通道 -->
        <fast-track class="template" data-type="fastTrack" v-if='fastTrack'>

        </fast-track>
      </div>
      <ul class="muban-list" @click='addmuban'>
        <li><a class="muban-button" data-type='picAd'>图片广告</a></li>
        <li><a class="muban-button" data-type='verify'>防伪验证</a></li>
        <li><a class="muban-button" data-type='proInfo'>商品信息</a></li>
        <li><a class="muban-button" data-type='fastTrack'>快速通道</a></li>
      </ul>
    </div>
    <div class="box">
      <detail-module v-bind:data="testCom">

      </detail-module>
    </div>
  </div>
    

    <div class="footer">
      <input type="button" name="" value="保存" @click="save">
    </div>
  </div>
</template>

<script>
  import displayAd from '../modules/display-advertising.vue'
  import textNav from '../modules/text-nav.vue'
  import detailModule from '../modules/detailModule.vue'
  import fastTrack from '../modules/fastTrack.vue'
  import {mapState} from 'vuex'
  import {mapActions} from 'vuex'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return{
        isPicAd:false,
        testCom:null,
      }
    },
    components:{
      'pic-ad':displayAd,
      'text-nav':textNav,
      'detail-module':detailModule,
      'fast-track':fastTrack
    },
    methods:{
      ...mapMutations([
        'addFastTrack'
        ]),
      ...mapActions([
        'showPicAd1',
        'module',
        'addVerify'
        ]),
      init(event){
        var self=this;

        $('.template').mouseenter(function(e){
          $(e.delegateTarget).find('.border').removeClass('hidelist')
        })
        $('.template').mouseleave(function(e){
          // console.log($(e.delegateTarget).hasClass('editor'))
          if(!$(e.delegateTarget).hasClass('editor')){
          $(e.delegateTarget).find('.border').addClass('hidelist')

          }
        })
      },
      //添加模板
      addmuban:function(){
        var self=this;
        
        //判断
        var elementType=$(event.target).attr('data-type')
        if(elementType==='picAd'){
          self.addPicAd()
        }
        if(elementType==='verify'){
          self.addVerify()
        }
        if(elementType==='fastTrack'){
          self.addFastTrack()
        }


        
      },

      //添加图片广告
      addPicAd:function(){
        var self=this;
        if(!self.picAd1){
          self.showPicAd1();
          return
        }
        
      },

      //配置
      detailBox:function(){
        var self=this;
        var element=$(event.target)[0];
        if(element.className==='border'){
          //显示操作框
          $(element).removeClass('hidelist');
          //其余模块隐藏操作框
          $(element).parent().siblings().find('.border').addClass('hidelist');
          var thisElement=$(event.target).parent();
          //被选中的模块右边出现编辑框
          $(thisElement).addClass('editor').siblings().removeClass('editor');
          var topPosition=$(thisElement)[0].offsetTop;
          $('.box').addClass('detail').css('top',topPosition);
          //根据模块名称显示相应组件
          var type=$(thisElement).attr('data-type')
          self.module(type);
        }



      },

      //获取高度
      getTopPosition:function(){
        var self=this;
        if($('.editor').length==1){
          var topPosition1=$('.editor')[0].offsetTop+140;
          console.log($('.editor'));
          $('.box').css('top',topPosition1);
        }
      },

      //保存
      save(){
        var self=this;
        console.log($('.muban-main').html())
      }
    },
    computed:mapState({
      picAd1:state=>state.banner1.data.picAd1,
      verify:state=>state.banner1.verifyData.verify,
      fastTrack:state=>state.banner1.fastTrackData.fastTrack,
    }),
    mounted(){
      this.init();
    },
    updated(){
      this.init();
    }
  }
</script>

<style scoped>
  .muban{
    width: 350px;
    border: 1px solid #e5e5e5;
    border-radius: 18px 18px 0 0;
    display: inline-block;
  }
  .header{
    width: 350px;
    height: 70px;
    background-image: url(../../assets/img/phoneHeader.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .muban-title{
    width: 320px;
    height: 64px;
    background-image: url(../../assets/img/phoneTitle.png);
    margin: auto;
  }
  .muban-main{
    width: 320px;
    min-height: 150px;
    margin: auto;
    padding-bottom: 11px;
    background-color: #f7f7f7;
  }
  .muban-list{
    width: 350px;
    position: relative;
    display: flex;
    justify-content: space-around;
    left: -1px;
    top: -1px;
    border: 1px solid #ddd;
    padding: 0 14px 4px 14px;
    background: #f7f7f7;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .muban-list:after{
    position: absolute;
    content: ' ';
    border: 8px solid transparent;
    border-bottom-width: 10px;
    border-bottom-color: #f7f7f7;
    top: -18px;
    left: 167px;
  }
  .muban-list:before{
    top: -19px;
    border-bottom-color: #ddd;
    position: absolute;
    content: ' ';
    border: 8px solid transparent;
    border-bottom-width: 10px;
    border-bottom-color: #f8f8f8;
    top: -18px;
    left: 167px;
  }
  .muban-list li{
    display: table;
    margin: 0 0 10px 5px;
    background: #fff;
  }
  .muban-button{
    display: table-cell;
    text-decoration: none;
    color: #000;
    width: 75px;
    height: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #d1d1d1;
    line-height: 14px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
  }
  .template{
    position: relative;
  }
  .detail{
    width: 470px;
    min-height: 200px;
    background-color: #f6f8fc;
    display: inline-block;
    border-radius: 18px;
    margin-left: 30px;
    position: absolute;
  }
  .detail:before{
    content: '';
    width: 30px;
    height: 30px;
    display: inline-block;
    position: absolute;
    left: -30px;
    top: 40px;
    border-right:15px solid #f6f8fc;
    border-top:15px solid transparent;
    border-left:15px solid transparent;
    border-bottom:15px solid transparent;
  }
</style>