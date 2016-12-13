
function changeOpacity(argument) {
	var piclis=document.getElementsByClassName('pic_show')[0].getElementsByTagName('li');
	var dots = document.getElementsByClassName("dot");
	var num=100;
	var sleep=0.01;
	var i=0;
	var time=setInterval(function()
					{
						dots[i%piclis.length].style.backgroundPosition="-508px -387px";
						num-=sleep;
						piclis[i%piclis.length].style.opacity=num/100;
						if(num<80){
							dots[i%piclis.length].style.backgroundPosition="-508px -368px";
							piclis[i%piclis.length].style.display="none";
							i++;
							piclis[i%piclis.length].style.display="block";
							dots[i%piclis.length].style.backgroundPosition="-508px -387px";
//							clearInterval(time);
							num=100;
						}
					},3)
		
}

