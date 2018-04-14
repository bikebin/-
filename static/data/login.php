<?php 
header('content-type:text/html; charset= utf-8');
	// 准备一个数组 用来保存 多个用户名
	$userArr = array("binbin","菲菲","肉肉","钢铁侠");

	// 获取 提交过来的 用户名
	$postName = $_POST['name'];

	// 判断 是否存在于数组中
	/*
		参数1: 查询的内容
		参数2 数组
	*/
	$isIn = in_array($postName,$userArr);
	if($isIn){
		echo  file_get_contents('user.json');  //是在这里判断然后传回html渲染在网页上
	}else{
		echo "用户名不存在~~";
	}
 ?>