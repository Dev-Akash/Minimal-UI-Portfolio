function showSkills(){
	document.getElementsByClassName('content1')[0].style.display = "none";
	document.getElementsByClassName('content2')[0].style.display = "unset";
}
function backToContent1(){
	document.getElementsByClassName('content1')[0].style.display = "unset";
	document.getElementsByClassName('content2')[0].style.display = "none";
}
function showWorks(){
	document.getElementsByClassName('content2')[0].style.display = "none";
	document.getElementsByClassName('content3')[0].style.display = "unset";
}
function backToContent2() {
	document.getElementsByClassName('content2')[0].style.display = "unset";
	document.getElementsByClassName('content3')[0].style.display = "none";
}