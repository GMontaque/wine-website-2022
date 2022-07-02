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
