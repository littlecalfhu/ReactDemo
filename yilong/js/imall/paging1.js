window.onload = function  () {
	changePage ();
	changeOpacity();
}
function changePage () {
	var pages = document.getElementsByClassName('paging1')[0].getElementsByTagName('a');
	var span = document.getElementsByClassName('paging1')[0].getElementsByTagName('span')[0];
	pages[0].style.display="none";
	pages[4].style.display="none";
	for(var i = 0;i < pages.length ;i++)
	{
		if(i == 0)
		{
			pages[0].onclick = function  () {
				span.style.display = "inline-block";
				pages[0].style.display="none";
				pages[4].style.display="none";
			}
			
		}else{
			pages[i].onclick = function  () {
			for(var j = 0 ;j < pages.length ;j++)
			{
				pages[j].style.display = "inline-block";
				pages[j].style.backgroundColor = "#F2F2F2";
				pages[j].style.color = "black";
				span.style.display = "none";
				this.style.backgroundColor = "#49f";
				this.style.color = "white";
			}
		}	
		}
		
	}
}