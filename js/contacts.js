$(function() {
	window.onload = function() {
		html = document.getElementsByTagName("html")[0];
		html.style.fontSize = window.innerWidth / 100 + "px";
	}
});

$(function(){
	$(".list li").hover(function(){
		$(this).css("background","lightblue");
		$(this).children("div").eq(1).children('div').eq(2).show();
	},function(){
		$(this).css("background","lightgoldenrodyellow");
		$(this).children("div").eq(1).children('div').eq(2).hide();
	});
	$(".list li").click(function(e){
		console.log("user ID: "+$(this).attr("userId"));	//获取用户id
		console.log(e.target.alt)	//事件类型 delete update other
	})
	
})

function deleteUser(){
	alert("delete user")
}
function updateUser(){
	alert("update user")
}