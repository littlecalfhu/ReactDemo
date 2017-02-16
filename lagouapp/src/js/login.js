$(function () {
	var $reg_phone = /^[1][358][0-9]{9}$/;
	var $reg_email = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
	var $reg_psd = /^[a-z0-9_-]{8,32}$/;
	function checkPhone () {
		var $phone = $("#user").val();
		if ($phone != "") {
			if ($reg_phone.test($phone) || $reg_email.test($phone)) {
				return true;
		    }else{
				$(".ph_err").show();
			}
		}else{
			$(".ph_err").show().html("请输入正确的账号");
		}
	}
	$("#user").blur(function () {
		checkPhone();
	});
	//密码/
	function checkPsd () {
		var $psd = $("#psd").val();
		if ($psd != "") {
			if ($reg_psd.test($psd)) {
				return true;
			}else{
				$(".psd_err").show();
			}
		}else{
			$(".psd_err").show().html("请输入密码");
		}
	}
	$("#psd").blur(function () {
		checkPsd();
	});
	/////////////////////
    $("input").focus(function () {
    	$(".err").hide();
    });
    /////////////////////////
	$("#login").click(function () {
		if (checkPhone() == true && checkPsd() == true) {
			location.assign("index.html");
		}
	});
});