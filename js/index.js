/*
* @Author: lenovo
* @Date:   2017-07-30 17:25:40
* @Last Modified by:   lenovo
* @Last Modified time: 2017-07-30 17:34:18
*/

window.onload=function(){
	$("#dowebok").fullpage({
		sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
		//滚到某一屏后调用，index=自动获取当前屏
		afterLoad:function(link,index){
			$(".section").removeClass("current");
			setTimeout(function(){
			$(".section").eq(index-1).addClass('current');

			},100);
		}

	})
}