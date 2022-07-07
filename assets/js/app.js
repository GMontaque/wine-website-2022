// homepage overlay
$("#btn").on("click", function () {
	$(".overlay").fadeOut();
	$(".mainScreen").fadeIn();
});

// shop currency

let currency = "£";

// currency exchange
// const eurToGBP = 0.86;
// const dollarToGBP = 0.82;
const GBPToDollar = 1.21;
const GBPToEuro = 1.16;
let currentCurrencyType = $("#currency").val();

$("#currency").on("change", function () {
	currency = $("#currency").val();
	$(".currencyType").html(currency);
	let prices = document.querySelectorAll(".currentAmount");
	// reset total amount
	$("#total").html(0);
	// currecny exchange
	if (currency == "£") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice);
			return $(this).html(basePrice);
		});
		console.log("change pound");
	} else if (currency == "€") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToEuro);
			let newValue = $(this).html(basePrice * GBPToEuro);
			console.log(newValue);
			$(this).attr("currentCost", newValue);
			return newValue;
		});
		console.log("change euro");
	} else {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToDollar);
			return $(this).html(basePrice * GBPToDollar);
		});
		console.log("change dollar");
	}
});

// remove amount from shopping cart
// $(".removeItem").on("click", function () {
// 	// $(".shoppingCart-amount").html("&#8356; <span id='total'>0</span>");
// 	let total = parseInt($("#total").html());
// 	let price = parseInt($(this).attr("data-price"));
// 	if (total > 0) {
// 		total = total - price;
// 		$("#total").html(total);
// 	}
// 	let cardTitle = ".cardTitle2";
// 	$(cardTitle).remove();
// });

// add amount from shopping cart
$(".addItem").on("click", function () {
	// let price = parseInt($(this).attr("data-price"));
	let price = parseInt($(this).parent().find(".currentAmount").text());
	let total = parseInt($("#total").html());
	total = total + price;
	$("#total").html(total);

	let cardTitle = $(this).parent().find(".card-title").text();
	let cardPrice = 20;
	let cardAmount = 5;
	// let cardId = $(this).parent().find(".card-title").text();
	let cardId = "cardTitle2";

	let tableRow = document.createElement("tr");
	tableRow.classList.add(cardId);

	let itemName = document.createElement("th");
	itemName.innerHTML = cardTitle;
	tableRow.appendChild(itemName);

	let itemPrice = document.createElement("th");
	itemPrice.innerHTML = cardPrice;
	tableRow.appendChild(itemPrice);

	let itemAmount = document.createElement("th");
	itemAmount.innerHTML = cardAmount;
	tableRow.appendChild(itemAmount);

	$(".cartItems").append(
		`<div class="bookingItem"><span>${cardTitle}</span> £<span class="thisItem">${cardPrice}</span> <input type="number" data-original-value="1" value="1"></div>`
	);
	$(".tbod").append(tableRow);
});

// style
$(function () {
	$().timelinr({
		orientation: "vertical",
		issuesSpeed: 300,
		datesSpeed: 100,
		arrowKeys: "true",
		startAt: 1,
	});
});

// scroll effect - homepage

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
