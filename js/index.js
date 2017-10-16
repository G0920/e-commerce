// 网站换肤
$(function(){
		var $li =$("#skin li");
		$li.click(function(){
			switchSkin( this.id );
		});
		
		var cookie_skin = $.cookie("MyCssSkin");
		if (cookie_skin) {
			switchSkin(cookie_skin);
		}
});

function switchSkin(skinName){
		$("#"+skinName).addClass("selected")                //当前<li>元素选中
		.siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
	    $("#cssfile").attr("href","css/"+ skinName +".css"); //设置不同皮肤
	   
		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}

$(function(){
	$("aside div h3 span").click(function(){
		if($(this).text() == "-"){
			$(this).text("+")
		}else{
			$(this).text("-")
		}
		$(this).parent().siblings().slideToggle(400)
	})
})


$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");    //mouseleave 鼠标离开事件
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}