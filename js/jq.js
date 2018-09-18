/*
* @Author: lenovo
* @Date:   2018-09-14 00:01:48
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-18 20:57:32
*/
$(function(){

	// 购物袋
	let btn=$(".mixgou");
	let down=$(".down")
	btn.click(function(){
		down.slideToggle("slow");
	});
	down.mouseleave(function(){
		down.slideUp("slow");
	});

	let input=$(".inputs");
	let cai_b=$(".cai_bot");
	let cai_a=$(".cai_bot0")
	input.focus(function(){
		cai_b.slideUp("slow");
		cai_a.fadeIn("slow");
	});
	

	let line1=$(".liner");
	let line2=$(".liner0");
	let btnl=$(".listLeft");
	let downl=$(".caidown");
	btnl.click(function(){
		downl.slideToggle("slow");
		btn.fadeToggle("slow");
		cai_b.fadeIn("fast");
		cai_a.fadeOut("fast");

		line1.toggleClass("magic");
		line2.toggleClass("magic1")

		// $("html").css("overflow","hidden");

	});

	// 变换
	








	// downl.mouseleave(function(){
	// 	downl.slideUp("slow");
	// 	btn.css("display","block");

	// });


	// let abtn=$(".abtn");
	// let show=$(".show");
	// abtn.click(function(){
	// 	show.slideToggle("slow");
	// });




	let add=$(".add");
	console.log(add);
	let down0=$(".content-down");
	let both=$(".footer2 ul li");
	both.click(function(){
		let i=$(this).index();
		down0.eq(i).slideToggle("slow");
		add.eq(i).toggleClass('hot');
	});
	// let i=add.index();
	// add.click(function(){
	// 	$(this).parent().siblings().slideToggle("slow");
	// });
	// 
	// 
	// 
	// 
	// 
	// let times=0;
	// for(let i=0;i<add.length;i++){
	// 	add.eq(i).click(function(){
	// 		times++;
	// 		if (times%2==0) {
	// 			down0.eq(i).slideUp("slow");
	// 		}else{
	// 			down0.eq(i).slideDown("slow");
	// 		}
			
	// 	});

	// }














})
