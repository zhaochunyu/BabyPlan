/**
 * New node file
 */
$(document).ready(function() {	
	//回滚
	$("#reboot").click(function() {		
			alert("已发出一分钟重启倒计时");
			$("#rebootmes").html('重启中……');
			$("#reboot").attr("disabled", "disabled");
			$("#close").removeAttr("disabled");
	});
	$("#close").click(function() {		
		alert("一分钟关机倒计时");
		$("#rebootmes").html('已经关机');
		$("#reboot").removeAttr("disabled");
		$("#close").attr("disabled", "disabled");
		
});
	
// 接收查询页面返回
	$("#lockscreen").click(function() {		
		alert("一分钟锁屏倒计时");
		$("#screenmes").html('已经锁屏，解锁密码：YU3234');
		$("#lockscreen").attr("disabled", "disabled");
		$("#openscreen").removeAttr("disabled");
});
	$("#openscreen").click(function() {		
		$("#screenmes").html('未锁屏');
		$("#openscreen").attr("disabled", "disabled");
		$("#lockscreen").removeAttr("disabled");
});

	$("#nonetwork").click(function() {		
		$("#networkmes").html('已经停止网络');
		$("#nolinegame").attr("disabled", "disabled");
		
});
	$("#network").click(function() {		
		$("#networkmes").html('网络开启');
		$("#nolinegame").removeAttr("disabled");
		
});
	$("#nolinegame").click(function() {		
		$("#linegamemes").html('已经禁止网络游戏');
		$("#nolinegame").attr("disabled", "disabled");
		
});
	$("#linegame").click(function() {		
		$("#linegamemes").html('允许网络游戏');
		$("#nolinegame").removeAttr("disabled");
		
});
	$("#nosinglegame").click(function() {		
		$("#singlegamemes").html('已经禁止单机游戏');
		
});
	$("#singlegame").click(function() {		
		$("#singlegamemes").html('允许单机游戏');
});
	
});


