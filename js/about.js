	var newlis=$(".content>.main>ul>li:first-child +li+li+li>div>div>div").clone();
	$(".content>.main>ul>li:first-child +li+li+li>div>div").append(newlis)
//	
	var s=0;
	var bol=true
	
	$(".content .next").click(function(){
		if(bol){
			s++;
			if(s>1){
				s=1;
				$(".content>.main>ul>li:first-child +li+li+li>div>div").css("left","0px");		
			}
			$(".content>.main>ul>li:first-child +li+li+li>div>div").animate({
				"left":-s*765+"px"
			},2000)
			bol=false;
			setTimeout(function(){
				bol=true;
			},2000)
		}
		
	})
	
	$(".content .prev").click(function(){
		if(bol){
		s--;
		if(s<0){
			s=0;
			$(".content>.main>ul>li:first-child +li+li+li>div>div").css("left",-765+"px");		
		}
		$(".content>.main>ul>li:first-child +li+li+li>div>div").animate({
			"left":-s*765+"px"
		},2000)
		bol=false;
			setTimeout(function(){
				bol=true;
			},2000)
		}
		
	})



























