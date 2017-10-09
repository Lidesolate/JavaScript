window.onload=function () {
	var oBtnShow=document.getElementById('but');
	var oBtnClose=document.getElementById('btn_close');
	var oBottom=document.getElementById('zns_bottom');
	var oBox=document.getElementById('zns_box');
	
	oBtnShow.onclick=function ()
	{
		startMove(oBottom, {right:0} ,function (){
			oBox.style.display='block';
			startMove(oBox, {bottom:0});
		});
	};
	oBtnClose.onclick=function ()
	{
		startMove(oBox, {bottom:-315} ,function (){
			oBox.style.display='none';
			
			startMove(oBottom,{right:-165});
		});
	};

	var oBtn=document.getElementById('btn1');
	var oDiv=document.getElementById('div1');
	oBtn.onclick=function(){
		startMove(oDiv,{width:101,height:300,opacity:100});
	};
};