window.onload=function (argument) {
	changeOpacity();
	changeChannel();
}

function changeOpacity(argument) {
	var piclis=document.getElementsByClassName('pic_show')[0].getElementsByTagName('li');
	var num=100;
	var sleep=0.01;
	var i=0;
	var time=setInterval(function()
					{
						num-=sleep;
						piclis[i%piclis.length].style.opacity=num/100;
						if(num<80){
							piclis[i%piclis.length].style.display="none";
							i++;
							piclis[i%piclis.length].style.display="block";
//							clearInterval(time);
							num=100;
						}
					},3)
		
}
function changeChannel()
{
	var selects = document.getElementsByClassName("left")[0].getElementsByTagName("li");
	var channels = document.getElementsByClassName("cate_channel_option")[0];
	for(var i=0;i<selects.length-1;i++)
	{
		selects[i].index=i;
		selects[i].onclick=function(){
			for(var j=0;j<selects.length-1;j++)
			{
				selects[j].style.backgroundColor="#f3f3f3";
				selects[j].style.borderRight="1px solid #e1e1e1";
				selects[j].style.color="black";
				this.style.color="blue";
				this.style.backgroundColor="#fff";
				this.style.borderRight="0";
				channels.children[j].style.display="none";
				channels.children[this.index].style.display="block";
			}
		}
		
	}
}
