var t1;
var offsetbg = 0;
$(document).ready(function(e) {
    $(document).ready(
        function () {
			$body = $("body");
        }
    );

    /// 滚动
	t1 = setInterval(bg,100);
});	
function bg() {
		/* if (offsetbg >= mainwidth) {
			offsetbg =  -580;
		} */
		offsetbg += 0.9;
		$body.css("background-position", -offsetbg + "px 0");

    }