$("#info").focus(function(){
	if($(this).val()=="姓名："){
		$(this).val("")
	}
})

$("#info").blur(function(){
	if($(this).val()==""){
		$(this).val("姓名：")
	}
})

$("#handset").focus(function(){
	if($(this).val()=="手机："){	
		$(this).val("")
	}	
})

$("#handset").blur(function(){
	if($(this).val()==""){
		$(this).val("手机：")
	}
})

$("#address").focus(function(){
	if($(this).val()=="地址："){
		$(this).val("")
	}
})

$("#address").blur(function(){
	if($(this).val()==("")){
		$(this).val("地址：")
	}
})

$("#Password").focus(function(){
	if($(this).val()=="验证码："){
		$(this).val("")
	}
})

$("#Password").blur(function(){
	if($(this).val()==""){
		$(this).val("验证码：")
	}
})

$("textarea").focus(function(){
	if($("textarea").eq(0).val()=="意见与建议："){
		$("textarea").val("")
	}
})

$("textarea").blur(function(){
	if($("textarea").eq(0).val()==""){
		$("textarea").val("意见与建议：")
	}
})





























