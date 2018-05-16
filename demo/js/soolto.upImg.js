(function($){
	/* 
	 图片上传预览插件，兼容IE8
	 * */
	$.fn.previewImage = function(){ 
		var $review = $(this).parent().siblings('.imgPreview');  //预览图片元素
		var ua = navigator.userAgent; //取得浏览器的userAgent字符串
	    var filextension=$(this)[0].value.substring($(this)[0].value.lastIndexOf("."),$(this)[0].value.length);
	    filextension=filextension.toLowerCase();
	    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
	    {
	        alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
	        $(this).focus();
	    }
	    else
	    {
	        var path;
	        if(document.all)//IE
	        {
	            $(this).select();
	            path = document.selection.createRange().text;
	           	$review.html();
	           	$filterC = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";
	            $review.css('filter',$filterC);//使用滤镜效果
	        }else if(ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1) {
	        	$review.html($(this)[0].files[0].fileName);
		    }
	        else//FF
	        {
	        	html5Reader($(this)[0],$review);
	        }
	    }
	    function html5Reader(file,review){
		     var file = file.files[0];
		     var reader = new FileReader();
		     reader.readAsDataURL(file);
		     reader.onload = function(e){
		         review.html("<img src='"+this.result+"'/>");
		     }
		     
		}
	}
})(jQuery);


