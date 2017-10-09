window.onload=function () {
	var oDiv = document.getElementById('play');
	var aBtn = document.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var oUl  = document.getElementsByTagName('ul')[0];
	var now  = 0;
	var timer;
	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			now=this.index;
			tab();
		};
	};
	function tab(){
		for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className=''; 
			}
		aBtn[now].className='active';
		startMove(oUl,{top:-150*now});
	};
	function next(){
		if(now==aBtn.length){
			now=0;
		}
		else{
			now++;
		}
		tab();
	};
	var timer=setInterval(next,2000);
	aBtn.onmouseover=oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	aBtn.onmouseout=oDiv.onmouseout=function(){
		timer=setInterval(next,2000);
	};
};