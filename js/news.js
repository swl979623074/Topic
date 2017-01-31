$(function() {
	window.onload = function() {
		html = document.getElementsByTagName("html")[0];
		html.style.fontSize = window.innerWidth / 100 + "px";
	}
});

function showDialog(){
	$(".createTopic").removeClass('hide');
}

function hideDialog(){
	$(".createTopic").addClass('hide');
}