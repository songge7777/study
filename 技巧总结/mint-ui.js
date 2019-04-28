/*
	1、mint-ui  loadmore上啦刷新/下拉加载
	
      <template>
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :auto-fill="autoFill" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul>
            <li v-for="item in list">{{ item }}</li>
          </ul>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
          </div>
        </mt-loadmore>
      </template>

      allLoaded : false   // 若数据已全部获取完毕  以后就不会出现上啦刷新
      autoFill: false    //若为真，loadmore 会自动检测并撑满其容器,
            //autoFill 最好设置为false，否则一开始会自动加载一遍 loadBottom

  2、
      mint-ui
    下拉刷新的时候 当页面可以触发下啦刷新 函数会一直掉 
    this.allLoaded = true; 设置这个就会停止
    当动态获取数据时候有BUG  
      获取数据的时候 高度满足上啦刷新  就会自动去调
      处理 给一个模拟div  设置足够的高度 进行切换
*/