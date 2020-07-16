
//回复楼主
var i = 3;
function publish() {
	var time = new Date();//获取系统时间
	var year = time.getFullYear();//获取年份
	var month = time.getMonth()+1;//获取月份
	var date = time.getDate()<10?"0"+time.getDate():time.getDate();//获取日期
	var hour = time.getHours()<10?"0"+time.getHours():time.getHours();//获取小时
	var minute = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();//获取分钟
	var div_reply = document.getElementById("div_reply");
	var content = document.getElementById("content").value;
	var footer_tip = document.getElementById("footer_tip");
	if(content == ""){
		footer_tip.style.display="block";
	}else{
		footer_tip.style.display="none";
		i++;
		//创建新的节点,创建一个div标签
		var div_last = document.createElement("div");
		//给div添加class="div_cont2"的样式
		div_last.setAttribute("class","div_cont");
		//给div添加内容
		div_last.innerHTML = "<div class='div_cont_l'>\
							<div class='div_tx'>\
								<div class='tx_div'>\
									<img src='img/tx.jpg' class='tx_img'>\
								</div>\
							</div>\
							<a href='#' class='name_a1'>小星星</a>\
							<a href='#' class='name_a2'>食堂管理员</a>\
						</div>\
						<div class='div_cont_r'>\
							<!-- 层主内容 -->\
							<span class='cont_r_span1'>"+content+"</span>\
							<!-- 回复框 -->\
							<div class='div_cont_b'>\
								<a href='#footer_l_div2' class='cont_r_a'>回复</a>\
								<span class='cont_r_span2'>\
								来自<a href='#'>iPhone客户端</a> "+i+"楼 "+year+"-"+month+"-"+date+"&nbsp;"+hour+":"+minute+"\
								</span>\
							</div>\
						</div>";
		//向div_reply的子节点的最后一位添加节点
		div_reply.appendChild(div_last);
		document.getElementById("return_a1").innerHTML = i;
		document.getElementById("return_a2").innerHTML = i;
	}
}


//展开回复1
function expand_1(){
	document.getElementById("cont_r_a1").style.display="none";
	document.getElementById("unfold_a1").style.display="block";
	document.getElementById("unfold1").style.display="block";
}
//展开回复2
function expand_2(){
	document.getElementById("cont_r_a2").style.display="none";
	document.getElementById("unfold_a2").style.display="block";
	document.getElementById("unfold2").style.display="block";
}
//展开回复3
function expand_3(){
	document.getElementById("cont_r_a3").style.display="none";
	document.getElementById("unfold_a3").style.display="block";
	document.getElementById("unfold3").style.display="block";
}


//收起回复1
function packUp_1(){
	document.getElementById("cont_r_a1").style.display="block";
	document.getElementById("unfold_a1").style.display="none";
	document.getElementById("unfold1").style.display="none";
}
//收起回复2
function packUp_2(){
	document.getElementById("cont_r_a2").style.display="block";
	document.getElementById("unfold_a2").style.display="none";
	document.getElementById("unfold2").style.display="none";
}
//收起回复3
function packUp_3(){
	document.getElementById("cont_r_a3").style.display="block";
	document.getElementById("unfold_a3").style.display="none";
	document.getElementById("unfold3").style.display="none";
}


// 我也说一句1
function replyBox_1(){
	var reply_div = document.getElementById("reply_div1");
		if(reply_div.style.display=="none"){
			reply_div.style.display="block";
		}else{
			reply_div.style.display="none";
		}
}
// 我也说一句2
function replyBox_2(){
	var reply_div = document.getElementById("reply_div2");
		if(reply_div.style.display=="none"){
			reply_div.style.display="block";
		}else{
			reply_div.style.display="none";
		}
}
// 我也说一句3
function replyBox_3(){
	var reply_div = document.getElementById("reply_div3");
		if(reply_div.style.display=="none"){
			reply_div.style.display="block";
		}else{
			reply_div.style.display="none";
		}
}


//发表1
function reply_1(){
	//时间
	var time = new Date();//获取系统时间
	var year = time.getFullYear();//获取年份
	var month = time.getMonth()+1;//获取月份
	var date = time.getDate()<10?"0"+time.getDate():time.getDate();//获取日期
	var hour = time.getHours()<10?"0"+time.getHours():time.getHours();//获取小时
	var minute = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();//获取分钟
	var replyList = document.getElementById("replyList1");//获取id="replyList1"的div
	var unfold_text = document.getElementById("unfold_text1").value;
	var reply_tip = document.getElementById("reply_tip1");
	if(unfold_text == ""){
		reply_tip.style.display="block";
	}else{
		reply_tip.style.display="none";
		//创建新的节点,创建一个新div
		var reply_list = document.createElement("div");
		//新div添加样式
		reply_list.setAttribute("class","unfold_cont");
		//给div添加内容
		reply_list.innerHTML = "<div class='unfold_tx'>\
											<img src='img/tx.jpg' class='unfold_tx_img' >\
										</div>\
										<span class='unfold_span1'>\
											<a href='#'>小星星</a>:回复<a href='#'> 阿BUA</a>:\
										</span>\
										<span class='unfold_span2'>"+unfold_text+"</span>\
										<span class='unfold_span3'>\
										"+year+"-"+month+"-"+date+"&nbsp;"+hour+":"+minute+"\
											<a href='#'> 回复</a>\
										</span>";
		//向replyList的子节点的最后一位添加节点
		replyList.appendChild(reply_list);
	}
}
//发表2
function reply_2(){
	//时间
	var time = new Date();//获取系统时间
	var year = time.getFullYear();//获取年份
	var month = time.getMonth()+1;//获取月份
	var date = time.getDate()<10?"0"+time.getDate():time.getDate();//获取日期
	var hour = time.getHours()<10?"0"+time.getHours():time.getHours();//获取小时
	var minute = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();//获取分钟
	var replyList = document.getElementById("replyList2");//获取id="replyList2"的div
	var unfold_text = document.getElementById("unfold_text2").value;
	var reply_tip = document.getElementById("reply_tip2");
	if(unfold_text == ""){
		reply_tip.style.display="block";
	}else{
		reply_tip.style.display="none";
		//创建新的节点,创建一个新div
		var reply_list = document.createElement("div");
		//新div添加样式
		reply_list.setAttribute("class","unfold_cont");
		//给div添加内容
		reply_list.innerHTML = "<div class='unfold_tx'>\
											<img src='img/tx.jpg' class='unfold_tx_img' >\
										</div>\
										<span class='unfold_span1'>\
											<a href='#'>小星星</a>:回复<a href='#'> 小萝北</a>:\
										</span>\
										<span class='unfold_span2'>"+unfold_text+"</span>\
										<span class='unfold_span3'>\
										"+year+"-"+month+"-"+date+"&nbsp;"+hour+":"+minute+"\
											<a href='#'> 回复</a>\
										</span>";
		//向replyList的子节点的最后一位添加节点
		replyList.appendChild(reply_list);
	}
}
//发表3
function reply_3(){
	//时间
	var time = new Date();//获取系统时间
	var year = time.getFullYear();//获取年份
	var month = time.getMonth()+1;//获取月份
	var date = time.getDate()<10?"0"+time.getDate():time.getDate();//获取日期
	var hour = time.getHours()<10?"0"+time.getHours():time.getHours();//获取小时
	var minute = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();//获取分钟
	var replyList = document.getElementById("replyList3");//获取id="replyList1"的div
	var unfold_text = document.getElementById("unfold_text3").value;
	var reply_tip = document.getElementById("reply_tip3");
	if(unfold_text == ""){
		reply_tip.style.display="block";
	}else{
		reply_tip.style.display="none";
		//创建新的节点,创建一个新div
		var reply_list = document.createElement("div");
		//新div添加样式
		reply_list.setAttribute("class","unfold_cont");
		//给div添加内容
		reply_list.innerHTML = "<div class='unfold_tx'>\
											<img src='img/tx.jpg' class='unfold_tx_img' >\
										</div>\
										<span class='unfold_span1'>\
											<a href='#'>小星星</a>:回复<a href='#'> 咸鱼</a>:\
										</span>\
										<span class='unfold_span2'>"+unfold_text+"</span>\
										<span class='unfold_span3'>\
										"+year+"-"+month+"-"+date+"&nbsp;"+hour+":"+minute+"\
											<a href='#'> 回复</a>\
										</span>";
		//向replyList的子节点的最后一位添加节点
		replyList.appendChild(reply_list);
	}
}

function showTime(){
	var t_1_div_span1 = document.getElementById("t_1_div_span1");

	var time = new Date();//获取系统时间
	var month = time.getMonth()+1;//获取月份
	var date = time.getDate();//获取日期

	t_1_div_span1.innerHTML=month+"月"+date+"日";
}
setInterval("showTime()",1000);