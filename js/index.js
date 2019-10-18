var index=0;
//			给下一个按钮添加点击事件
			$(".banner .next").eq(0).click(function(){
				index++;
				if(index>2){
					index=0;
				}
				$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
				$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
			})		
			
//			<!--给上一个按钮添加点击事件-->
			var index=0;
			var timer;
			$(".banner .prev").eq(0).click(function(){
				index--;
				if(index<0){
					index=2;
				}
				$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
				$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
			})
		
//			调用定时器
			run();
			
//			展示框移入移出
				
			$(".banner").eq(0).hover(function(){	
				clearInterval(timer);
			},function(){	
				run();
			})
		
//			hover(ab)鼠标移入（执行a）移出（执行b）
//			封装定时器
			function run(){			
				clearInterval(timer);
				timer=setInterval(function(){
					index++;
					if(index>2){
						index=0;
					}
					$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
					$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
				},3000)
			}
			
		
//			给每个按钮添加事件
			$(".banner .btn li").mouseenter(function(){
				$(this).addClass("current").siblings().removeClass("current");
				$(".banner .pic li").eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
				index=$(this).index();
			})
		
			var l=0;
			$(".product .pic .bg .next").click(function(){
				l++;
				if(l>3){
					l=0;
				}
				$(".product .pic ul li").eq(l).addClass("current").siblings().removeClass("current");
			})
			
				
			$(".product .pic .bg .prev").click(function(){
				l--;
				if(l<0){
					l=3;
				}
				$(".product .pic ul li").eq(l).addClass("current").siblings().removeClass("current");
			})
			
			
			
			var newlis=$(".news .news_pic ul>li").clone();
			$(".news .news_pic ul").append(newlis)
			
			var s=0;
			var bol=true
			$(".news .next").click(function(){
				if(bol){
					s++;
					if(s>1){
						s=1;
						$(".news .news_pic ul").css("left","0px");
					}
					$(".news .news_pic ul").animate({
						"left":-s*1112+"px"
					},2000)
					bol=false;
					setTimeout(function(){
						bol=true;
					},2000)
				}
			})

			
			
			$(".news .prev").click(function(){
				if(bol){
					s--;
					if(s<0){
						s=0;
						$(".news .news_pic ul").css("left","-1112px");
					}
					$(".news .news_pic ul").animate({
						"left":s*1112+"px"
					},2000)
					bol=false;
					setTimeout(function(){
						bol=true;
					},2000)
				}
			})

			run2();
			var timer2;
			
			
			$(".news .news_pic,.news .prev,.news .next").hover(function(){
				clearInterval(timer2)
			},function(){
				run2();
			})
		
			function run2(){
				clearInterval(timer2)
				timer2=setInterval(function(){
					s++;
					if(s>1){
						s=1;
						$(".news .news_pic ul").css("left","0px");
					}
					$(".news .news_pic ul").animate({
						"left":-s*1112+"px"
					},2000)
				},2500)
			}



