// currency

let currency = "£";

$("#currency").on("change", function () {
	currency = $("#currency").val();
	$(".currencyType").html(currency);
});

$("#btn").on("click", function () {
	$(".overlay").fadeOut();
	$(".mainScreen").fadeIn();
});

$(".removeItem").on("click", function () {
	// $(".shoppingCart-amount").html("&#8356; <span id='total'>0</span>");
	let total = parseInt($("#total").html());
	let price = parseInt($(this).attr("data-price"));
	if (total > 0) {
		total = total - price;
		$("#total").html(total);
	}
});

// #shop .product button
$(".addItem").on("click", function () {
	let price = parseInt($(this).attr("data-price"));
	let total = parseInt($("#total").html());
	total = total + price;
	$("#total").html(total);
});

// style
$(function () {
	$().timelinr({
		orientation: "vertical",
		issuesSpeed: 300,
		datesSpeed: 100,
		arrowKeys: "true",
		startAt: 3,
	});
});

// scrooll

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
