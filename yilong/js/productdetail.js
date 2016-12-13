window.onload = function  () {
	changeImg();
}

function changeImg(){
	var pic = document.getElementsByClassName("spec-pic")[0].children[0];
	var piclist = document.getElementsByClassName("spec-list")[0].getElementsByTagName("li");
	console.log(piclist[0].childNodes[1]);
	for(var i = 0 ; i <piclist.length ; i++)
	{
		piclist[i].onclick = function  () {
			for (var j = 0 ;j < piclist.length;j++) {
				piclist[j].style.border = "0";
			}
			pic.src = this.childNodes[1].src;
			this.style.border = "2px solid red";
		}
	}
}
