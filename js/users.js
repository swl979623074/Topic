$(function() {
	window.onload = function() {
		html = document.getElementsByTagName("html")[0];
		html.style.fontSize = window.innerWidth / 100 + "px";
	}
});

function showDialog(){
	$(".addUserDialog").removeClass('hide');
}

function hideDialog(){
	$(".addUserDialog").addClass('hide');
}
